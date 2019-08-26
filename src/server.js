require("dotenv").config();
import { prisma } from "../generated/prisma-client";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import express from "express";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));
server.express.use(express.json());

server.express.post("/api", (req, res) => {
  //console.log(req.body);
  const sendRecord = async () => {
    const gameID = req.body.gameID;
    const gameName = req.body.gameName;
    const boardID = req.body.boardID;
    const userID = req.body.userID;
    const userName = req.body.userName;
    const viewscore = req.body.viewscore;

    const rawVP = await prisma.createrawVP({
      gameID: gameID,
      gameName: gameName,
      boardID: boardID,
      userID: userID,
      userName: userName,
      viewscore: viewscore
    });
    if (viewscore > 0) {
      const VP = await prisma.createVP({
        game: {
          connect: { id: gameID }
        },
        ADboard: {
          connect: { id: boardID }
        },
        userID: userID,
        userName: userName,
        viewscore: viewscore
      });
      return VP;
    }
    return "Only Pended rawVP since viewpoint=0";
  };
  sendRecord().then(x => {
    res.send(x);
    console.log(x);
  });
});
server.express.get("/api", (req, res) => {
  const getImage = async () => {
    return await prisma.aDboards();
  };
  getImage().then(async x => {
    await res.send({ aDboards: x });
    //console.log(x);
  });
});

server.start({ port: PORT, endpoint: "/graphql" }, () =>
  console.log(`✅ Server Running on http://localhost:${PORT}`)
);
