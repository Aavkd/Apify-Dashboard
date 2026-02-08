const fs = require('fs');
const path = require('path');
const https = require('https');

// Config
const NOTION_API_KEY_PATH = path.join(process.env.HOME || process.env.USERPROFILE, '.config', 'notion', 'api_key');
const PAGE_ID = '3015d340-69d8-8037-86c8-e954b0b8dc6a'; // Dashboard Page ID
const BRIEF_PATH = path.join(__dirname, '..', 'PROJECT_BRIEF.md');

// Read API Key
let apiKey;
try {
    apiKey = fs.readFileSync(NOTION_API_KEY_PATH, 'utf8').trim();
} catch (err) {
    console.error(`Error reading API key from ${NOTION_API_KEY_PATH}:`, err.message);
    process.exit(1);
}

// Read Markdown
let markdownContent;
try {
    markdownContent = fs.readFileSync(BRIEF_PATH, 'utf8');
} catch (err) {
    console.error(`Error reading brief from ${BRIEF_PATH}:`, err.message);
    process.exit(1);
}

// Simple Markdown to Notion Blocks Parser
function parseMarkdownToBlocks(md) {
    const lines = md.split('\n');
    const blocks = [];

    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return; // Skip empty lines

        let block = null;

        if (trimmed.startsWith('# ')) {
            block = {
                object: 'block',
                type: 'heading_1',
                heading_1: {
                    rich_text: [{ type: 'text', text: { content: trimmed.substring(2).trim() } }]
                }
            };
        } else if (trimmed.startsWith('## ')) {
            block = {
                object: 'block',
                type: 'heading_2',
                heading_2: {
                    rich_text: [{ type: 'text', text: { content: trimmed.substring(3).trim() } }]
                }
            };
        } else if (trimmed.startsWith('### ')) {
            block = {
                object: 'block',
                type: 'heading_3',
                heading_3: {
                    rich_text: [{ type: 'text', text: { content: trimmed.substring(4).trim() } }]
                }
            };
        } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            block = {
                object: 'block',
                type: 'bulleted_list_item',
                bulleted_list_item: {
                    rich_text: [{ type: 'text', text: { content: trimmed.substring(2).trim() } }]
                }
            };
        } else {
            // Paragraph
            block = {
                object: 'block',
                type: 'paragraph',
                paragraph: {
                    rich_text: [{ type: 'text', text: { content: trimmed } }]
                }
            };
        }

        if (block) blocks.push(block);
    });

    return blocks;
}

const blocks = parseMarkdownToBlocks(markdownContent);

// Chunk blocks (Notion allows max 100 blocks per request)
function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

const blockChunks = chunkArray(blocks, 100);

// Function to append blocks via API
async function appendBlocks(chunk) {
    const options = {
        hostname: 'api.notion.com',
        path: `/v1/blocks/${PAGE_ID}/children`,
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json'
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (d) => data += d);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`Status Code: ${res.statusCode}, Body: ${data}`));
                }
            });
        });

        req.on('error', (e) => reject(e));
        req.write(JSON.stringify({ children: chunk }));
        req.end();
    });
}

// Execute
(async () => {
    console.log(`Syncing ${blocks.length} blocks to Notion Page ${PAGE_ID}...`);
    try {
        for (const chunk of blockChunks) {
            await appendBlocks(chunk);
            console.log(`Synced batch of ${chunk.length} blocks.`);
        }
        console.log('Successfully updated Notion page!');
    } catch (err) {
        console.error('Failed to update Notion:', err);
        process.exit(1);
    }
})();
