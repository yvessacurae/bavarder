var app = require('express')(),
	express = require('express'),
	server = require('http').Server(app),
	io = require('socket.io')(server);

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/views/index.html');
// });

// Public Routing
app.use(express.static(__dirname + '/public'));

io.on('connection', function(client){
	client.on('add user', function (username) {
		console.log(username);
		client.username = username;
	});
	client.on('chat message', function(data){
		// client.broadcast.emit('chat message', { 
		// 	username: data.username, 
		// 	msg: data.msg 
		// });
        io.emit('chat message', { username: data.username, msg: data.msg });
    });

	client.on('room', function(room){
		client.join(room);
	});

	client.on('disconnect', function(){

	});
});


server.listen(3000, function(){
    console.log('listening on *:3000');
});