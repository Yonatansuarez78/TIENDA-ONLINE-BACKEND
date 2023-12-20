import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()


const welcomeMessage = '¡Bienvenido al backend!';
app.get('/', (req, res) => {
    res.send(welcomeMessage);
});

app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
}))

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use("/api", authRoutes)
export default app
