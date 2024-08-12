import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import formsRoutes from './routes/forms.routes.js'; // Importa las rutas de forms

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", formsRoutes); // Usa las rutas de forms

export default app;