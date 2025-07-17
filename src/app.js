import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js';
import graficasRoutes from './routes/graficas-admin.routes.js'


import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

const allowedOrigins = [
    'http://localhost:3000', //frontend local 
    'http://localhost:5173', //dashboard admin local 
    'http://localhost:8080',  //app flutter local

    'https://tienda-online-frontend.vercel.app', //frontend
    'https://tienda-online-dashboard-admin.vercel.app' //dashboard
    
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
app.use('/api/graficas', graficasRoutes);

export default app;
