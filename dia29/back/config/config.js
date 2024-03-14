import detenv from 'dotenv';
dotenv.config();

console.log(process.env)

console.log("environment es:", process.env.NODE_ENV || "development");

export const PORT= process.env.PORT || 3000
export const domain = process.env.DOMAIN || "http://localhost";

export const fullDomain = `${domain}:${PORT}`