import express from 'express';
import cors from 'cors';
import productRoutes from './routes/products.route.js'
import authRoutes from './routes/auth.route.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
// port number
const port = 5000;
dotenv.config();
const app = express();

mongoose.connect(process.env.DB_CONNECTION_STRING, (err) => {console.log('connected to mongoose', err)});

// Adding middelwares to express
app.use(express.json());
app.use(cors());


app.use("/auth", authRoutes);
app.use('/products', productRoutes)
app.get('/', (req, res) => {
  res.send('404 not found');
})

// starting the port
app.listen(port, () => {
    console.log("started on ",port )
})