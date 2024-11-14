import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/thoughtAPI_17');

export default mongoose.connection;