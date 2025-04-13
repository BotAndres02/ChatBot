const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/chats", chatRoutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server in port ${PORT}`));