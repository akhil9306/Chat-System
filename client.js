const socket = io.connect('http://localhost:8080');

const form = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");
const messageContainer = document.querySelector(".container");
const buttons = document.querySelectorAll(".my-button-text");

const iDocument = messageInput.contentWindow.document;

iDocument.body.style.color = "white";

const append = (message, position)=> {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

const user_name = prompt("Enter Your Name to join the live chat");
socket.emit('new-user-joined',user_name);

socket.on('user-joined',name => {
    append(`${name} has joined the chat`,'middle');
});

socket.on('recieve',data => {
    append(`${data.name}: ${data.message}`,'left');
});

socket.on('left',name => {
    append(`${name} left the chat`,'middle');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let iDocument = messageInput.contentWindow.document;
    let message = iDocument.body.innerHTML;
    console.log(message);
    append(`You: ${message}`,'right');
    socket.emit('send',message);
    messageInput.contentWindow.document = "";
});

messageName.document.designMode = 'On';

buttons.forEach( button => {
    button.addEventListener('click', () => {
        console.log("working");
        let command = button.getAttribute('data-cmd');
        if(command === "createLink") {
            let url = prompt("Enter link here : ");
            messageName.document.execCommand("createLink",false,url);
        }
        else if(command === "addAt") {
            let person = prompt("Enter the persons name : ");
            iDocument.body.innerHTML = iDocument.body.innerHTML + "@" +person;
        }
        else if(command === "addSmilie") {
            iDocument.body.innerHTML = iDocument.body.innerHTML + "<div>&#128512;</div>";
        }
        else {
            messageName.document.execCommand(command,false,null);
        }
    })
});