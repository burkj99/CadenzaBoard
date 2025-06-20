"""Simple Flask server exposing a /chat endpoint for CadenzaBot."""
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

openai.api_key = os.getenv('OPENAI_API_KEY', 'YOUR_OPENAI_API_KEY')

SYSTEM_PROMPT = (
    "You are CadenzaBot, a helpful assistant for the CadenzaBoard project. "
    "CadenzaBoard is a platform where musicians showcase portfolios, receive feedback, "
    "connect with mentors, and track their growth. You answer questions about how to "
    "use the platform, suggest best practices for submissions, and offer encouragement "
    "to emerging artists."
)

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json(force=True)
    messages = data.get('messages', [])
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": SYSTEM_PROMPT}] + messages,
    )
    reply = response['choices'][0]['message']['content']
    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
