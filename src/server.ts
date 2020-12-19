import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import tagRoutes from './routes/tagRoutes';

class Server {
    private app:express.Application;
    constructor(){
        this.app = express();
        
        this.config();
        this.routes();


    }

    config(){
        //datasource
        const MONGO_URI = 'mongodb+srv://apitest:diego123@cluster0.3grjx.mongodb.net/apitest?retryWrites=true&w=majority';
        mongoose.set('useFindAndModify', true);
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(() => console.log('MongoDB Connected...'))
        .catch((err) => console.log(err))

        //settings
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
        
    }

    routes(){
        this.app.use(indexRoutes);
        this.app.use('/api/tags',tagRoutes);
    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server runing on port', this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();