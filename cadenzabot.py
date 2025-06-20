import os
import openai

# Load your OpenAI API key from the environment or replace with your key
openai.api_key = os.getenv('OPENAI_API_KEY', 'YOUR_OPENAI_API_KEY')

SYSTEM_PROMPT = (
    "You are CadenzaBot, a helpful assistant for the CadenzaBoard project. "
    "CadenzaBoard is a platform where musicians showcase portfolios, receive feedback, "
    "connect with mentors, and track their growth. You answer questions about how to "
    "use the platform, suggest best practices for submissions, and offer encouragement "
    "to emerging artists."
)


def chat_with_cadenzabot(messages):
    """Send a conversation to the OpenAI ChatCompletion API and return the reply."""
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": SYSTEM_PROMPT}] + messages,
    )
    return response['choices'][0]['message']['content']


def main():
    print("Welcome to CadenzaBot! Type 'quit' to exit.")
    conversation = []
    while True:
        user_input = input('You: ')
        if user_input.lower() in {'quit', 'exit'}:
            break
        conversation.append({"role": "user", "content": user_input})
        reply = chat_with_cadenzabot(conversation)
        print(f'CadenzaBot: {reply}')
        conversation.append({"role": "assistant", "content": reply})


if __name__ == "__main__":
    main()
