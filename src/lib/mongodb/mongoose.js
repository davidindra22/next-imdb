import mongoose from "mongoose";
import { initialize } from "next/dist/server/lib/render-server";
let initalized = false;
export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialize) {
    console.log("mongoDB already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next-imdb-clerk",
      userNewUrlParser: true,
      useUnifiedTopology: true,
    });
    initalized = true;
    console.log("mongoDB connected");
  } catch (error) {
    console.log("mongoDB connection error :", error);
  }
};
