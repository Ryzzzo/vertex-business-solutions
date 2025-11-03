import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.58.0";
import { Client } from "npm:@notionhq/client@2.2.15";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const NOTION_DATABASE_ID = "118c4ff318fb44bd9b0fa0505c1162e1";

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    // Initialize Supabase client with service role to access secrets
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Retrieve Notion API key from secrets table
    const { data: secretData, error: secretError } = await supabase
      .from("secrets")
      .select("key_value")
      .eq("key_name", "notion_api_key")
      .single();

    if (secretError || !secretData) {
      console.error("Failed to retrieve Notion API key:", secretError);
      return new Response(
        JSON.stringify({ success: false, error: "Configuration error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Initialize Notion client
    const notion = new Client({ auth: secretData.key_value });

    // Parse request body
    const body = await req.json();

    // Create page in Notion database
    await notion.pages.create({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        "Name": {
          title: [{ text: { content: body.name || "Unknown" } }],
        },
        "Contact Name": {
          rich_text: [{ text: { content: body.name || "" } }],
        },
        "Email": {
          email: body.email || null,
        },
        "Phone": {
          phone_number: body.phone || null,
        },
        "Company Name": {
          rich_text: [{ text: { content: body.company || "" } }],
        },
        "Industry": {
          rich_text: [{ text: { content: body.industry || "" } }],
        },
        "Project Budget": {
          rich_text: [{ text: { content: body.budget || "" } }],
        },
        "Services Interested In": {
          multi_select: body.services ? body.services.map((s: string) => ({ name: s })) : [],
        },
        "Message": {
          rich_text: [
            {
              text: {
                content: `Team Size: ${body.teamSize || "N/A"}\nTimeline: ${body.timeline || "N/A"}\n\nChallenges:\n${body.challenges || "N/A"}\n\nAdditional Info:\n${body.additionalInfo || "N/A"}`,
              },
            },
          ],
        },
        "Source": {
          rich_text: [{ text: { content: "Website Form" } }],
        },
        "Status": {
          rich_text: [{ text: { content: "New" } }],
        },
      },
    });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error submitting to Notion:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
