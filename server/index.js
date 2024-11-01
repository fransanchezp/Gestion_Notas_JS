const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const notasRoutes = require('./routes/notas');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/notas', notasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
