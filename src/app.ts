import express from "express";
import "./database";
import { router } from "./routes";
import dgram from "dgram";
import net from "net";

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
var tcp = new net.Socket();
tcp.connect(6666, "127.0.0.1");

tcp.on("data", function (data) {
  console.log(data.toString());
});

tcp.on("error", function (err) {
  console.log(`Error: ${err}`);
});

app.use(express.json());
app.use(router);

export { app, server, tcp };
