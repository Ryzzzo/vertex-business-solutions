import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.58.0";
import { Client } from "npm:@notionhq/client@2.2.15";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const NOTION_DATABASE_ID = "efc6e00a0f1449bbb26c13d96fd80750";

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
          select: body.industry ? { name: body.industry } : null,
        },
        "Current Team Size": {
          rich_text: [{ text: { content: body.teamSize || "" } }],
        },
        "Project Budget": {
          select: body.budget ? { name: body.budget } : null,
        },
        "Timeline": {
          select: body.timeline ? { name: body.timeline } : null,
        },
        "Message": {
          rich_text: [
            {
              text: {
                content: `Challenges: ${body.challenges || "N/A"}\n\nAdditional Info: ${body.additionalInfo || "N/A"}`,
              },
            },
          ],
        },
        "Source": {
          select: { name: "Website Form" },
        },
        "Status": {
          select: { name: "New" },
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
