import express, {Application} from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';


const app: Application = express();

import indexRoutes from './routes/index'

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', indexRoutes);

app.use('/uploads', express.static(path.resolve('uploads')));

export default app;