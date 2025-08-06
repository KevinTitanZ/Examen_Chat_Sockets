const jwt = require('jsonwebtoken');
const Message = require('../../domain/models/message.model');
const User = require('../../domain/models/user.model');

const connectedUsers = new Set();

const chatHandler = (io) => {
  // Middleware para verificar el token antes de establecer la conexión
  io.use(async (socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error('Token no proporcionado'));

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id); // Usamos 'id' porque en el token se firmó como { id: user._id }

      if (!user) return next(new Error('Usuario no encontrado'));

      socket.user = user; // Guardamos el objeto completo del usuario
      next();
    } catch (error) {
      next(new Error('Token inválido'));
    }
  });

  // Conexión de cliente
  io.on('connection', async (socket) => {
    console.log(`🔌 Usuario conectado: ${socket.user.email}`);
    connectedUsers.add(socket.user._id.toString());

    // Emitir número de usuarios conectados
    io.emit('userCount', connectedUsers.size);

    // Manejo del envío de mensajes
    socket.on('sendMessage', async (text) => {
      try {
        const message = await Message.create({
          text,
          user: socket.user._id,
        });

        io.emit('newMessage', {
          text: message.text,
          user: socket.user.email,
          userId: socket.user._id.toString(),
          createdAt: message.createdAt,
        });
      } catch (err) {
        console.error('❌ Error al guardar mensaje:', err.message);
      }
    });

    // Desconexión de cliente
    socket.on('disconnect', () => {
      connectedUsers.delete(socket.user._id.toString());
      io.emit('userCount', connectedUsers.size);
      console.log(`❌ Usuario desconectado: ${socket.user.email}`);
    });
  });
};

module.exports = chatHandler;
