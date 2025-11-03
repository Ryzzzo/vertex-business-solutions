import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export async function POST(req: NextRequest) {
  try {
    const notion = new Client({
      auth: process.env.NOTION_API_KEY
    });

    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      return NextResponse.json(
        { success: false, error: 'Database ID not configured' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { name, email, phone, company, industry, services, budget, timeline, challenges, additionalInfo } = body;

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Name': {
          title: [{ text: { content: name || 'Unknown' } }]
        },
        'Email': {
          email: email
        },
        'Phone': {
          phone_number: phone || null
        },
        'Company Name': {
          rich_text: [{ text: { content: company || '' } }]
        },
        'Industry': {
          select: { name: industry }
        },
        'Services Interested In': {
          multi_select: services ? services.map((s: string) => ({ name: s })) : []
        },
        'Project Budget': {
          select: { name: budget }
        },
        'Timeline': {
          rich_text: [{ text: { content: timeline || '' } }]
        },
        'Message': {
          rich_text: [{ text: { content: `${challenges || ''}\n\nAdditional Info: ${additionalInfo || ''}` } }]
        },
        'Source': {
          select: { name: 'Website Form' }
        },
        'Status': {
          select: { name: 'New' }
        }
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Notion Error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
