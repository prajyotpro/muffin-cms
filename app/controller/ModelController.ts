import { controller, httpGet, request, response } from "inversify-express-utils";
import { BaseController } from "../core/BaseController";
import { SessionMiddleware } from "../middleware/session";

import * as express from "express";
import { title } from "process";
import Types from "../ioc/types";
import { inject } from "inversify";
import { IGetProjectUseCase } from "../usercase/getProjectUseCase";


@controller('/', SessionMiddleware)
export class HomeController extends BaseController {
    constructor(
        @inject(Types.UseCase.GetProjectUseCase) private getProjectUseCase: IGetProjectUseCase,
    ) {
        super();
    }
    
    @httpGet('/')
    async index(@request() req: express.Request, @response() res: express.Response) {

        console.log("req.session.user", req.session.user)

        const projects = await this.getProjectUseCase.execute("");


        res.render('home/index', {
            name: "Prajyot",
            testimonials: [],
            projects: projects.all,
            header: "",
            title: ""
        });
    }
}
