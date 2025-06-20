// Front-end chat interface for CadenzaBot

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('chat-form');
    const input = document.getElementById('user-input');
    const chatLog = document.getElementById('chat-log');
    let conversation = [];

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;
        appendMessage('You', text);
        conversation.push({role: 'user', content: text});
        input.value = '';
        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({messages: conversation})
            });
            const data = await response.json();
            const reply = data.reply || 'Sorry, something went wrong.';
            appendMessage('CadenzaBot', reply);
            conversation.push({role: 'assistant', content: reply});
        } catch (err) {
            appendMessage('Error', 'Failed to reach server.');
        }
    });

    function appendMessage(sender, text) {
        const div = document.createElement('div');
        div.className = 'chat-message';
        div.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatLog.appendChild(div);
        chatLog.scrollTop = chatLog.scrollHeight;
    }
});
