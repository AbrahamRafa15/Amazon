const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Conexión a MongoDB local (puedes cambiarla a Atlas después)
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Conectado a MongoDB Atlas');
}).catch(err => {
  console.error('Error de conexión:', err);
});

// Esquema del usuario
const User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
}));

// Ruta para guardar el correo
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email y contraseña requeridos' });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new User({ email, password: hashedPassword });
    await nuevoUsuario.save();
    res.json({ mensaje: 'Correo guardado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al guardar el correo' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});