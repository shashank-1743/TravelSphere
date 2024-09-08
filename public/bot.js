// Predefined question-answer pairs
const responses = {
    "What are the upcoming exhibitions?": "We have a Modern Art exhibition starting next week and a Science Museum tour the following month.",
    "How can I book a ticket?": "You can book a ticket by clicking the 'Book Tickets' button on the left, or visit our website's ticketing section.",
    "What is the refund policy?": "Our refund policy allows cancellations up to 24 hours before the event for a full refund.",
    "How can I contact support?": "You can contact support by clicking the 'Customer Support' button or emailing us at support@museum.com."
};

// Function to add a message to the chat window
function addMessage(sender, message) {
    const chatWindow = document.querySelector('.chat-window');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    
    let avatar = sender === 'bot' ? '🤖' : '🧑';
    messageDiv.innerHTML = `<div class="avatar">${avatar}</div><div class="text">${message}</div>`;
    chatWindow.appendChild(messageDiv);

    // Scroll to bottom of chat window
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to handle user's question and show bot's response
function handleQuestion(question) {
    addMessage('user', question);
    setTimeout(() => {
        const botResponse = responses[question] || "I'm sorry, I don't have an answer for that. Please contact support for more information.";
        addMessage('bot', botResponse);
    }, 1000);
}

// Add event listeners to predefined question buttons
document.querySelectorAll('.question-btn').forEach(button => {
    button.addEventListener('click', function() {
        const question = this.innerText;
        handleQuestion(question);
    });
});

// Handle the user's input when they type a message and click send
document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput) {
        handleQuestion(userInput);
        document.getElementById('userInput').value = ''; // Clear input
    }
});

// Enable pressing "Enter" to send message
document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        document.getElementById('sendBtn').click(); // Trigger send button
    }
});
