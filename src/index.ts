import express from "express"
import cors from "cors"

const app: Express = express();
app.use(express.json());

const PORT:number = 3000;

app.use(cors());

app.get("/ping",(req:Request<PageTransitionEvent,XMLHttpRequestBodyInit,ReqQuery,LocalsObj>,res): void => {
    console.log("CONECTADO");
    res.setHeader("Content Type","application/json")
    res.send("pong")
})

app.get("/hola/:nombre/:apellido",(req:Request<PageTransitionEvent,XMLHttpRequestBodyInit,ReqQuery,LocalsObj>,res): void => {
    res.setHeader("Content Type","application/json")
    const nombre = req.params.nombre;
    const apellido = req.params.apellido
    console.log("Aguien xd")
    res.send()
})

app.isten(PORT,():void =>{
    console.log("Server running in port"+PORT)
})