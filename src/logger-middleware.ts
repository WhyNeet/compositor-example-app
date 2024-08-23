import { Bean, Middleware } from "@compositor/core";
import type { Request, Response } from "express";
import { UserService } from "./user-service.js";

@Bean()
export class LoggerMiddleware extends Middleware {
  constructor(private userService: UserService) {
    console.log("init logger mw");
    super();
  }

  apply(
    req: Request,
    res: Response,
    next: (req: Request, res: Response) => unknown,
  ): unknown {
    console.log("request from middleware", req.method, req.path);
    console.log("user data:", this.userService.getUserData("123123"));
    return next(req, res);
  }
}

@Bean()
export class AdditionalLoggerMiddleware extends Middleware {
  constructor() {
    console.log("init additional logger mw");
    super();
  }

  apply(
    req: Request,
    res: Response,
    next: (req: Request, res: Response) => unknown,
  ): unknown {
    console.log("request from ADDITIONAL middleware", req.method, req.path);
    return next(req, res);
  }
}
