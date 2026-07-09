const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); 
require("dotenv").config();

const bookingRoutes = require("./routes/bookingRoutes")

const app= express();

app.use(cors());
app.use(express.json());

app.use("/api/booking",bookingRoutes);

app.get("/",(req,res) =>{
    res.send("Madras Tailor's Backend Running..")
});

const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});