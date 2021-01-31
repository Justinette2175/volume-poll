const path = require("path");
import * as express from "express";
import * as http from "http";
import * as WebSocket from "ws";

import { handleVolumeRequest } from "./src/volume";
import { v4 as uuidv4 } from "uuid";

type ExpectedMessage = {
  volume: number;
};

const app = express();

app.use(express.static("./app/build"));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws: WebSocket & { id: string }) => {
  ws.id = uuidv4();
  ws.on("message", (message: string) => {
    const data: ExpectedMessage = JSON.parse(message);
    const newVolume = handleVolumeRequest(data.volume, ws.id);
    wss.clients.forEach((client) => {
      client.send(JSON.stringify({ volume: newVolume }));
    });
  });
});

const PORT = process.env.PORT || 8999;

//start our server
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
