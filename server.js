import express from 'express';
import user from './routes/user.js';
import post from './routes/post.js';
import dotenv from 'dotenv';
import connectDB from './database/config.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config()
connectDB()

const app = express();
const PORT = process.env.PORT || 8080

app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://threads-fumu.onrender.com'); // Reemplaza con la URL de tu aplicación React
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  // Otros encabezados CORS y configuraciones pueden ir aquí
  next();
});
app.use(express.json()) //To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })) // To parse form data in the req.body
app.use(cookieParser())

// Routes
app.use('/api/users', user);
app.use("/api/posts", post);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
