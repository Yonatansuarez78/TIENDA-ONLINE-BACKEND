import app from './src/app.js'
import { PORT } from "./src/config.js";
import { connectDB } from "./src/db.js";


async function main() {
    try {
        await connectDB();
        app.listen(PORT);
        console.log(`Server on port: ${PORT}`)
    } catch (error) {
        console.error(error);
    }
}

main();