// export const PORT = process.env.PORT || 4000;
// export const MONGODB_URI = "mongodb+srv://yonatansuarez78:1061530108@cluster0.vetq3zl.mongodb.net/mongodb?retryWrites=true&w=majority";
// export const TOKEN_SECRET = 'some_secret_key'

// Usa process.env para acceder a las variables de entorno
export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
CORS_ORIGIN = 'https://tienda-online-frontend.vercel.app'