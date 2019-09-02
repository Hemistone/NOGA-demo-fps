import { prisma } from "../../generated/prisma-client";

export default {
  Game: {
    id: ({ id }) => prisma.game({ id }).id(),
    name: ({ id }) => prisma.game({ id }).name(),
    coverImage: ({ id }) => prisma.game({ id }).coverImage(),
    ADboardList: ({ id }) => prisma.game({ id }).ADboardList(),
    createdAt: ({ id }) => prisma.game({ id }).createAt(),
    updatedAt: ({ id }) => prisma.game({ id }).updatedAt()
  },
  ADboard: {
    id: ({ id }) => prisma.aDboard({ id }).id(),
    game: ({ id }) => prisma.aDboard({ id }).game(),
    ADboardName: ({ id }) => prisma.aDboard({ id }).ADboardName(),
    ADboardImage: ({ id }) => prisma.aDboard({ id }).ADboardImage(),
    description: ({ id }) => prisma.aDboard({ id }).description(),
    IngameImages: ({ id }) => prisma.aDboard({ id }).IngameImages(),
    viewpointList: ({ id }) => prisma.aDboard({ id }).viewpointList(),
    createdAt: ({ id }) => prisma.aDboard({ id }).createdAt(),
    updatedAt: ({ id }) => prisma.aDboard({ id }).updatedAt()
  },
  VP: {
    id: ({ id }) => prisma.vP({ id }).id(),
    game: ({ id }) => prisma.vP({ id }).game(),
    ADboard: ({ id }) => prisma.vP({ id }).ADboard(),
    userID: ({ id }) => prisma.vP({ id }).userID(),
    userName: ({ id }) => prisma.vP({ id }).userName(),
    viewscore: ({ id }) => prisma.vP({ id }).viewscore(),
    createdAt: ({ id }) => prisma.vP({ id }).createdAt(),
    updatedAt: ({ id }) => prisma.vP({ id }).updatedAt()
  }
};
