import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app=express();
app.use(cors()); // Enable CORS
app.use(express.json({limit: "16kb"})); // Set a limit for JSON body size
app.use(express.urlencoded({extended: true})); // Parse URL-encoded bodies
app.use(express.static("public")); // Serve static files from the "public" directory
app.use(cookieParser()); // Parse cookies

export default app;