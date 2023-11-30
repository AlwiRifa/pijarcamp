import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import produksRoute from "./routes/produksRoutes.js";

const app = express();
app.use(express.json());

// app.use(
//   cors({
//     origin: "https://pijarcamp-level3-tugas10-alwi.vercel.app/",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// Allow requests from 'https://pijarcamp-level3-tugas10-alwi.vercel.app'
app.use(cors({ origin: 'https://pijarcamp-level3-tugas10-alwi.vercel.app' }));


app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.use("/produks", produksRoute); // Fix the import here

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("database connected");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
