# 2D Pixel Art Avatar

A cozy, interactive 2D pixel art avatar that listens to your voice and responds with AI-powered conversations.

## Features

- 🎨 Pixel-perfect 2D avatar with lip sync animation
- 🎤 Voice input via Web Speech API
- 🤖 AI responses using OpenAI GPT
- 🔊 Natural text-to-speech using OpenAI TTS
- 🏠 Cozy room background with pixel art aesthetic
- 💬 Floating chat bubbles with fade effects

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mukit1400/2DAvatar.git
   cd 2DAvatar
   ```

2. **Configure API Keys**
   - Copy `config.example.js` to `config.js`:
     ```bash
     cp config.example.js config.js
     ```
   - Open `config.js` and add your OpenAI API key:
     ```javascript
     const CONFIG = {
         OPENAI_API_KEY: 'your-actual-api-key-here'
     };
     ```

3. **Start the local server**
   ```bash
   python3 server.py
   ```
   Or use the shell script:
   ```bash
   ./start-server.sh
   ```
   
   Then open `http://localhost:8000/index.html` in your browser.

## Character: Pixel

Pixel is a digital friend from Dhaka, Bangladesh. They speak in a chill, empathetic tone and love sharing stories about the city. Keep responses short and casual!

## Technical Details

- **Rendering**: Three.js with WebGL
- **Sprite Format**: 2816x606px sprite sheet with 4 frames (704x606 each)
- **Voice**: OpenAI TTS-1 with "shimmer" voice
- **AI**: OpenAI GPT-3.5-turbo

## File Structure

- `index.html` - Main application file
- `config.js` - API keys (gitignored, create from config.example.js)
- `avatar_sheet.png` - Avatar sprite sheet
- `room_background.png` - Room background image
- `server.py` - Python HTTP server
- `start-server.sh` - Shell script to start server

## Notes

- The app requires a local server (not `file://`) to avoid CORS issues
- Microphone permissions are required for voice input
- API keys are stored locally in `config.js` (not committed to git)

