// Vercel serverless function to serve config
// Reads from Vercel environment variables

export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/javascript');
    
    // Get API key from Vercel environment variables
    const apiKey = process.env.OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY_HERE';
    
    // Return as JavaScript that updates the CONFIG object
    const configScript = `window.CONFIG = window.CONFIG || {};
window.CONFIG.OPENAI_API_KEY = '${apiKey}';`;
    
    res.status(200).send(configScript);
}

