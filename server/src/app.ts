import express from 'express'
import postsRouter from './router/postsRouter';
import cors from 'cors';
import accountRouter from './router/accountRouter';
import matesRouter from './router/matesRouter';
import riotRouter from './router/riotRouter';
import { visitantLog } from './controllers/visitant';

const app = express();
const corsOptions = {
  origin:process.env.FRONT_ADRESS,
  credentials:true
}
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
app.use(cors(corsOptions));

app.use('/wewi-gg/posts',postsRouter)
app.use('/wewi-gg/account',accountRouter)
app.use('/wewi-gg/mates',matesRouter)
app.use('/wewi-gg/lol',riotRouter)
app.use('/wewi-gg/visitant',visitantLog)
export default app;