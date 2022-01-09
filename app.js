const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
const connectDB = require('./config/db')


dotenv.config({ path: './config/.env' })

connectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))