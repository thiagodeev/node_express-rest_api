import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config()

mongoose.connect(process.env.DB_LINK);

const db = mongoose.connection;

export default db;