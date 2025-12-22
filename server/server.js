import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import goalRoutes from './routes/GoalRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

connectDB();

app.get('/', (req, res) => {
    res.json('Server is running');
});

app.use('/goals', goalRoutes);
app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => console.log("Server is running on PORT " + process.env.PORT ));