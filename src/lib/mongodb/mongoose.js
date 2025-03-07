import mongoose from "mongoose";

let initalized = false;
export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initalized) {
    console.log("mongoDB already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next-imbd-clerk",
      userNewUrlParser: true,
      useUnifiedTopology: true,
    });
    initalized = true;
    console.log("mongoDB connected");
  } catch (error) {
    console.log("mongoDB connection error :", error);
  }
};
