import dotenv from 'dotenv'
dotenv.config()

// console.log("environment")

export const PORT = process.env.PORT        ||  3000
export const domain = process.env.DOMAIN    ||  "http://localhost"

// datos de DB
export const host = process.env.HOSTNAME;
export const user = process.env.DB_USER
export const pass = process.env.DB_PASS
export const database = process.env.DATABASE

export const fullDomain = `${domain}:${PORT}`
