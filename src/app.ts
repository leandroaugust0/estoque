import express from "express";
import "./database";
import { router } from "./routes";
import dgram from "dgram";

const app = express();

// UDP
const server = dgram.createSocket("udp4");

server.on("error", (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on("message", (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});
server.connect(5555, "localhost");

// TCP

var net = require('net');

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); 
});

client.on('close', function() {
	console.log('Connection closed');
});

app.use(express.json());
app.use(router);

export { app, server };
