const chat = document.getElementById("chat");
const input = document.getElementById("msg");
const usernameInput = document.getElementById("username");
const socket = new WebSocket("ws://localhost:8080/chat-websocket/chat");

socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    const mensaje = document.createElement("div");
    mensaje.innerHTML = `<strong>${data.user}:</strong> ${data.text}`;
    chat.appendChild(mensaje);
    chat.scrollTop = chat.scrollHeight;
};

function enviar() {

    const username = usernameInput.value.trim();
    const text = input.value.trim();

    if(username == ""  || text == "") return;

    const message = {
        user: username,
        text: text
    };

    socket.send(JSON.stringify(message));

    input.value = "";

}
