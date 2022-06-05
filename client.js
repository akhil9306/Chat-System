const socket = io.connect('http://localhost:8080');

const form = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");
const messageContainer = document.querySelector(".container");
const buttons = document.querySelectorAll('.my-button-text');

message.document.designMode = 'On';

for(let i=0;i<buttons.length;i++) {
    buttons[i].addEventListener('click', ()=> {
        let cmd = buttons[i].getAttribute('data-cmd');
        if(buttons[i].name === "active") {
            buttons[i].classList.toggle('active');
        }
        if(cmd === "createLink") {
            let url = prompt("Enter link here : ");
            message.document.execCommand(cmd,false,url);
        }
        else {
            message.document.execCommand(cmd,false,null);
        }
    })
}

const append = (message, position)=> {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

const name = prompt("Enter Your Name to join the live chat");
socket.emit('new-user-joined',name);

socket.on('user-joined',name => {
    append(`${name} has joined the chat`,middle);  
});

socket.on('receive',data => {
    append(`${data.name}: ${data.message}`,'left');
});

socket.on('left',name => {
    append(`${name} left the chat`,'middle');
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`,'right');
    socket.emit('send',message);
    messageInput.value;
})