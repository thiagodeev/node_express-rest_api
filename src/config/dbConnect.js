import mongoose from "mongoose";

mongoose.connect(process.env.DB_LINK);

const db = mongoose.connection;

export default db;