import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getADboardList: async () => {
      return await prisma.aDboards();
    },
    getADboard: async (_, args) => {
      const { id } = args;
      return await prisma.aDboard({ id });
    }
  }
};
