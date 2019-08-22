require("dotenv").config()
import { GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import express from "express";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({schema});


server.express.use(logger("dev"));
server.express.use(express.json());

server.express.post("/api", (req, res)=>{
    console.log(req.body);
    console.log(typeof req.body.viewscore);
    res.send(req.body);
});
server.express.get("/api", (req, res)=>{
    res.send(req.body);
});

server.start({port: PORT, endpoint: "/graphql"}, () => console.log(`✅ Server Running on http://localhost:${PORT}`));