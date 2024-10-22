import 'dotenv/config';
import 'reflect-metadata';
import path from 'path';

import { InversifyExpressServer } from 'inversify-express-utils';

import './controller/HealthController';
import './controller/HomeController';
import './controller/AuthController';
import './controller/ContentController';
// import './controller/PostController';
// import './controller/ContactUsController';
// import './controller/InvestorRelationController';
// import './controller/AboutUsController';
// import './controller/ProjectController';

import bodyParser from 'body-parser';
import session from 'express-session'

declare module 'express-session' {
    export interface SessionData {
      user: { [key: string]: any };
    }
}

import container from './ioc/container';
import express from 'express';

export async function Bootstrap() {

    const port = process.env.PORT;
    const server = new InversifyExpressServer(container);
    server.setConfig((app) => {
        // add body parser
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
        app.use(session({
            secret: 'NAWCtcbgn6PlkCQ',
            resave: false,
            saveUninitialized: true
        }))
        app.use('/web-assets', express.static(path.join(__dirname, '../web-assets')))

        // set the view engine to ejs
        app.set('view engine', 'ejs');
    });

    const app = server.build();
    app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`));
}

Bootstrap();