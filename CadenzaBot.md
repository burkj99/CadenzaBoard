# CadenzaBot

CadenzaBot is a small GPT-based assistant intended to help musicians using CadenzaBoard. The bot answers questions about the platform, gives tips for submitting work, and suggests ways to connect with mentors or improve practice routines.

The included `cadenzabot.py` script provides a basic command-line interface. It requires an OpenAI API key and uses the `gpt-3.5-turbo` model by default.

## Setup
1. Install the OpenAI Python package:
   ```bash
   pip install openai
   ```
2. Set the `OPENAI_API_KEY` environment variable to your OpenAI key.
3. Run the bot:
   ```bash
   python cadenzabot.py
   ```

When prompted, enter your questions or requests about using CadenzaBoard. Type `quit` to exit.

The system prompt used by the script defines CadenzaBot's role and ensures responses stay focused on helping musicians navigate the platform.
