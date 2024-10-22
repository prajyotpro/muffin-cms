import { controller, httpGet, request, response } from "inversify-express-utils";
import { BaseController } from "../core/BaseController";
import { SessionMiddleware } from "../middleware/session";

import * as express from "express";


@controller('/health', SessionMiddleware)
export class HealthController extends BaseController {
    constructor() {
        super();
    }
    
    @httpGet('/')
    async index(@request() req: express.Request, @response() res: express.Response) {
        res.statusCode = 200;
        res.json({});
        return res
    }
}
