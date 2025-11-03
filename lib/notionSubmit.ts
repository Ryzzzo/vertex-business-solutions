import { Client } from '@notionhq/client';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  industry: string;
  services: string[];
  budget: string;
  timeline: string;
  challenges: string;
  additionalInfo?: string;
}

export async function submitToNotion(formData: FormData) {
  const notion = new Client({
    auth: 'ntn_607226945d072NBKvGv1wQPv6nqwv0VoVbP9qGv5691813'
  });

  const databaseId = 'efc6e00a0f1449bbb26c13d96fd80750';

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Name': {
          title: [{ text: { content: formData.name || 'Unknown' } }]
        },
        'Email': {
          email: formData.email
        },
        'Phone': {
          phone_number: formData.phone || null
        },
        'Company Name': {
          rich_text: [{ text: { content: formData.company || '' } }]
        },
        'Industry': {
          select: { name: formData.industry }
        },
        'Services Interested In': {
          multi_select: formData.services ? formData.services.map(s => ({ name: s })) : []
        },
        'Project Budget': {
          select: { name: formData.budget }
        },
        'Timeline': {
          rich_text: [{ text: { content: formData.timeline || '' } }]
        },
        'Message': {
          rich_text: [{ text: { content: `${formData.challenges || ''}\n\nAdditional Info: ${formData.additionalInfo || ''}` } }]
        },
        'Source': {
          select: { name: 'Website Form' }
        },
        'Status': {
          select: { name: 'New' }
        }
      }
    });

    return { success: true };
  } catch (error) {
    console.error('Notion Error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
