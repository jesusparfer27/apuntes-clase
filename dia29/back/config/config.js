import detenv from 'dotenv';
dotenv.config();

console.log(process.env)

export const DOMAIN = "http://localhost"

export const PORT= process.env.PORT || 3000
export const domain = process.env.DOMAIN || "http://localhost";

export const fullDomain = `${domain}:${PORT}`