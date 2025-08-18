// index.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "../.env" });

const app = express();

// connect to MongoDB
connectDB()
.then(
    app.listen(process.env.PORT, () => {
    console.log(`🚀 Server is running on port ${process.env.PORT}`);
})
)
.catch((error) => {
  console.error("❌ MongoDB connection error: ", error);
});

