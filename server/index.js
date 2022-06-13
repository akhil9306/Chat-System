const io = require('socket.io')(8080, {
    cors: {
        origin: ['http://127.0.0.1:5500']
    }
});

const users = {};

io.on('connection',socket => {
    socket.on('new-user-joined',user_name => {
        console.log('new user :  ',user_name);
        users[socket.id] = user_name;
        socket.broadcast.emit('user-joined',user_name);
    });
    socket.on('send',message => {
        socket.broadcast.emit('recieve', {message : message, name : users[socket.id]});
    });
    socket.on('disconnect',message => {
        socket.broadcast.emit('left',users[socket.id]);
        delete users[socket.id];
    });
});