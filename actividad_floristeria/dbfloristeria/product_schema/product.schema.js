import mongoose from "mongoose";

const alumnoSchema = new mongoose.Schema( {
    name: String,
    username: String,
    email: String,
    edad: Number,
    isAdmin: Boolean,
    hobbies: Array
}, options);