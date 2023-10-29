import express from "express";
import mongoose from "mongoose";
import cors from "cors";  
import contactRoutes from "./Routes/contact.js";

const PORT = 3001;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.status(200).send("Hello world"));

app.use("/contact", contactRoutes);


const CONNECTION_URL = "mongodb+srv://jibran:jibranmern@clusterone.u74t8kf.mongodb.net/?retryWrites=true&w=majority";
mongoose .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true,}).then(() => { console.log('Connected Successfully.'); }) .catch((err) => console.log('No connection ', err));const server = app.listen(PORT, () => console.log("Listening on port ", PORT));
