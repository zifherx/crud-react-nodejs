import { config } from "dotenv";

config();

export const variables = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  DB_NAME: process.env.DB_NAME,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
};
