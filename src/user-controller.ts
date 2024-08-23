import {
  Bean,
  Controller,
  Handler,
  Qualifier,
  Request,
  Response,
  UseMiddleware,
} from "@compositor/core";
import { UserService } from "./user-service.js";
import {
  HttpMethod,
  HttpRequest,
  HttpResponse,
  method,
} from "@compositor/http";
import {
  AdditionalLoggerMiddleware,
  LoggerMiddleware,
} from "./logger-middleware.js";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @UseMiddleware(AdditionalLoggerMiddleware)
  @UseMiddleware(LoggerMiddleware)
  @Handler(method(HttpMethod.GET), "/me")
  public async getUser() {
    return {
      data: this.userService.getUserData("123"),
    };
  }
}
