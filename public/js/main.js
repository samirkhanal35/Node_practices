const chatform = document.getElementById("chat-form");

const socket = io();

socket.on("message", (message) => {
  console.log(message);
});

// Message submit
chatform.addEventListener("submit", (e) => {
  e.preventDefault();

  //   Get message text
  const msg = e.target.elements.msg.value;

  //   Emit message to server
  socket.emit("chatMessage", msg);
});
