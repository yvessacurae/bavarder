var socket = io();

var username;

$('#send-msgs').submit(function(){
    socket.emit('chat message', {username: username, msg: $('#m').val()});
    $('#m').val('');
    return false;
});

$('#change-nickname').submit(function(){
    username = $('#user').val();
    socket.emit('add user', username);

    $('#user').val('');
    return false;
});

socket.on('chat message', function(data){
    var ownerFlag = data.username===username?'sended-msg':'received-msg';
    
    $('#messages').append($('<li class="'+ownerFlag+'">').text(data.username+': '+data.msg));
});