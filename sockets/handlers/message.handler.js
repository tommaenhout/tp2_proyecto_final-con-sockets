
let currentMessageId= 1;


function createMessage(user, messageText){
    return{
        _id: currentMessageId++,
        text: messageText,
        createdAt: new Date(),
          user: {
            _id: user.userId,
            name: user.username,
            avatar: user.avatar,
            mail: user.email
      }
    }
    }

function handleMessage (socket, users) {
    socket.on("message", messageText => {
        const user = users[socket.id]
        const message = createMessage(user,messageText)
        console.log(message)
        socket.broadcast.emit("message",message)
    })
   
}

module.exports= {handleMessage}