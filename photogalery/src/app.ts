import express from 'express';
import morgan from 'morgan';
import path from 'path'

const app = express();

import indexRoutes from './routes/index'

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', indexRoutes);

app.use('/uploads', express.static(path.resolve('uploads')));

export default app;