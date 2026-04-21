import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.ts";
import "dotenv/config";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

const connect = async () => {
  try {
    await prisma.$connect();
    console.log("prisma is connect");
  } catch {
    console.log("prisma is not connect");
    process.exit(1);
  }
};
const disconnect = async () => {
  await prisma.$disconnect();
  console.log("prisam is disconnect");
};

export { prisma, connect, disconnect };
