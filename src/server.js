import {join} from "path";
import express from "express";
import socketIO from "socket.io"
import logger from "morgan";

const PATH = 4000;
const app = express();

app.set("view engine", "pug")
app.set("views",join(__dirname,"views"))
app.use(express.static(join(__dirname,"static")))
app.get("/", (req,res)=>res.render("home"))

const handleListening = () =>console.log(`♥♡Server runiing : http://localhost${PATH}`)

const server = app.listen(PATH, handleListening);  

const io = socketIO.listen(server);

let sockets = [];

io.on("connection", (socket) => sockets.push(socket.id))

setInterval(()=> console.log(sockets),1000)