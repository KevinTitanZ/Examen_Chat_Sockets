require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./api/routes/auth.routes');

const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, { cors: { origin: '*' } });

const chatHandler = require('./infrastructure/websockets/chat.handler');

app.use(cors());
app.use(express.json());
connectDB();

app.use('/api/auth', authRoutes);

chatHandler(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
