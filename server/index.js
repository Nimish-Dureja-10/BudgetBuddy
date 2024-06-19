import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=> {
    res.status(200).send("Backend server working fine");
});

app.listen(process.env.PORT,()=> {
    console.log(`Server running on port ${process.env.PORT}`)
})