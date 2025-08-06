require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const passport = require('passport');
require('./infrastructure/strategies/google.strategy'); // Estrategia de Google

const connectDB = require('./config/db');
const authRoutes = require('./api/routes/auth.routes');
const chatHandler = require('./infrastructure/websockets/chat.handler');

const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, { cors: { origin: '*' } });

// 🔐 CONECTA A LA BASE DE DATOS ANTES DE TODO
connectDB();

// 🔧 Middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// 🌐 Rutas
app.use('/auth', authRoutes);

// 🔌 Websockets
chatHandler(io);

// 🚀 Iniciar servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor en puerto ${PORT}`);
});
