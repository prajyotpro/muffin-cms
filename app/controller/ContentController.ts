import { controller, httpGet, request, response } from "inversify-express-utils";
import { BaseController } from "../core/BaseController";
import { SessionMiddleware } from "../middleware/session";

import * as express from "express";
import { title } from "process";
import Types from "../ioc/types";
import { inject } from "inversify";
import { IGetProjectUseCase } from "../usercase/getProjectUseCase";
import { openDb } from "../infrastructure/Database";


@controller('/content', SessionMiddleware)
export class ContentController extends BaseController {
    constructor(
        // @inject(Types.UseCase.GetProjectUseCase) private getProjectUseCase: IGetProjectUseCase,
    ) {
        super();
    }
    
    @httpGet('/')
    async index(@request() req: express.Request, @response() res: express.Response) {

        console.log("req.session.user", req.session.user)
        const db = await openDb();

        try {
            await db.exec(`
                CREATE TABLE test(
                  key INTEGER PRIMARY KEY,
                  value TEXT
                ) STRICT
            `);
        } catch (error) {
            console.log("table creation", error)
        }
        

        // Create a prepared statement to insert data into the database.
        const insert = await db.prepare('INSERT INTO test (key, value) VALUES (?, ?)');

        // Execute the prepared statement with bound values.

        try {
            await insert.run(1, 'hello');
            await insert.run(2, 'world');
        } catch (error) {
            console.log("insert error", error)
        }
        

        const all = await db.all('SELECT * FROM test');
        console.log(all)
        // await db.client.exec('CREATE TABLE tbl (col TEXT)')

        res.render('content', {
            name: "Prajyot",
            content: all,
            header: "",
            title: ""
        });
    }
}
