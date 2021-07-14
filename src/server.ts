import 'reflect-metadata';
import express from 'express';

import router from './routes';
import appointmentsRouter from './routes/appointments.routes';

import './database';

const app = express();

app.use(express.json());
app.use(router);
app.use('/appointments', appointmentsRouter);

app.listen(3333, () => console.log('Server started on port 3333!'));
