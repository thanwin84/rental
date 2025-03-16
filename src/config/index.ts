export const config = {
  MONGO_URI: process.env.MONGO_URL as string,
  SESSION_SECRET: process.env.SESSION_SECRET as string,
  SESSION_TOKEN_EXPIRY: process.env.SESSION_TOKEN_EXPIRY as string,
};
