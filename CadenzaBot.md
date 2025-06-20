# CadenzaBot

CadenzaBot is a GPT-based assistant to help musicians using **CadenzaBoard**. The bot answers questions about the platform, gives portfolio tips, and suggests ways to connect with mentors or improve practice routines.

Two interfaces are provided:

- `cadenzabot.py` – a simple command-line chat client.
- `cadenzabot_server.py` – a small Flask server with a `/chat` API used by `bot.html`.

## Setup

1. Install dependencies:
   ```bash
   pip install openai flask flask-cors
   ```
2. Set the `OPENAI_API_KEY` environment variable to your OpenAI key.

### Command Line
Run the CLI chat tool:
```bash
python cadenzabot.py
```

### Web Server
Start the Flask server and open `bot.html` in your browser:
```bash
python cadenzabot_server.py
```
The page will send chat messages to `http://localhost:5000/chat`.

The system prompt used by both interfaces defines CadenzaBot's role and ensures responses stay focused on helping musicians navigate the platform.
