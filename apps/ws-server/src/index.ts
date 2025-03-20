
import { WebSocketServer } from "ws";
import {client} from "@repo/db/client"
const server=new WebSocketServer({
    port:3001,
})
server.on("connection",(Socket)=>{
    client.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString(),
        }
    })
    Socket.send("hi there you are connected to server")
})