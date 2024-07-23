import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

const allowedOrigins = [
    'http://localhost:3000',
    'https://tienda-online-frontend.vercel.app',
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

app.use(cors(corsOptions));


app.get('/', (req, res) => {
    console.log('GET / request received.');
    res.send('¡Bienvenido al backend!');
});

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);

export default app;
