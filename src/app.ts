import express from 'express';
import productsRouter from './routes/product.router';
import loginRouter from './routes/login.router';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(loginRouter);

export default app;
