//import {prisma} from "../../../../generated/prisma-client";
export default {
    Query: {
        sayHello: () => {
            console.log("SayHello loaded in Unity")
            return "Bye"
        }
    }
}