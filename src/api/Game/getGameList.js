import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getGameList: async () => {
      return await prisma.games();
    }
  }
};
