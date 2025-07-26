
let recognition;

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onresult = function (event) {
        let speechResult = event.results[0][0].transcript.toLowerCase();
        document.getElementById("user-input").value = speechResult;
        sendMessage(speechResult);
    };

    recognition.onerror = function (event) {
        console.error("Speech recognition error:", event.error);
    };
} else {
    alert("Speech recognition is not supported by your browser.");
}

function startListening() {
    recognition.start();
}

function speak(message) {
        let utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'en-US'; 
        utterance.rate = 1; 
        utterance.pitch = 1; 
        window.speechSynthesis.speak(utterance);
    }

function sendMessage(userInput) {
    if (userInput.trim() === "") return;

        let chatBox = document.getElementById("chat-box");
        let userMessage = document.createElement("div");
        userMessage.classList.add("message", "user-msg");
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);

    let assistantMessage = document.createElement("div");
    assistantMessage.classList.add("message", "assistant-msg");

    
    if (userInput.includes("hello") || userInput.includes("hi")) {
            assistantMessage.textContent = "Hello! I am Vijendra, your virtual assistant. How can I help you today?";
            speak("Hello! I am Vijj, your virtual assistant. How can I help you today?");
    } else if (userInput.includes("google")) {
            assistantMessage.textContent = "Opening Google for you!";
            speak("Opening Google for you!");
        window.open("https://www.google.com", "_blank");
    } else if (userInput.includes("youtube")) {
            assistantMessage.textContent = "Opening YouTube for you!";
            speak("Opening YouTube for you!");
        window.open("https://www.youtube.com", "_blank");
    } else if (userInput.includes("facebook")) {
            assistantMessage.textContent = "Opening Facebook for you!";
            speak("Opening Facebook for you!");
        window.open("https://www.facebook.com", "_blank");
    } else {
            assistantMessage.textContent = "Sorry, I didn't understand that. Can you try again?";
            speak("Sorry, I didn't understand that. Can you try again?");
    }

        chatBox.appendChild(assistantMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

    
        document.getElementById("user-input").value = "";
 }
