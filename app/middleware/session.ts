import { BaseMiddleware } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

@injectable()
export class SessionMiddleware extends BaseMiddleware {

    handler(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): void {

        console.log(req.path)

        console.log("req.session.user", req.session.user)

        if(!req.session.user && req.path != '/auth/login') {
            // return res.redirect("/auth/login")
        }

        next();
    }
}

