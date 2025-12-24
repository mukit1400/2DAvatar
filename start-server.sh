#!/bin/bash
# Simple HTTP server for 2D Avatar app
# This avoids microphone permission prompts by serving over http://

PORT=8000

echo "🚀 Starting server on http://localhost:$PORT"
echo "📱 Open http://localhost:$PORT/index.html in your browser"
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer $PORT
else
    echo "❌ Python not found. Please install Python 3."
    exit 1
fi

