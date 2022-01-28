const net = require('net');
const port = 6666;

const server = new net.createServer();

server.listen(port, function() {
    console.log(`Server listening for connection requests on socket localhost:${port}`);
});

server.on('connection', function(socket) {
    console.log('connection is running');

    socket.write('connection is running');

    socket.on('data', function(data) {
        console.log(data.toString());
    });

    socket.on('end', function() {
        console.log('Closing connection with the client');
    });

    socket.on('error', function(err) {
        console.log(`Error: ${err}`);
    });
});