import type { Configuration, ConfigurationContext } from "@compositor/core";
import { HttpConfiguration } from "@compositor/http";
import { ExpressPlatformConfiguration } from "@compositor/server-express";
import { UserRepository } from "./user-repository.js";
import { UserService } from "./user-service.js";
import { UserController } from "./user-controller.js";
import {
  AdditionalLoggerMiddleware,
  LoggerMiddleware,
} from "./logger-middleware.js";
import { ExceptionHandlingAdvice } from "./exception-handler.js";

export class RootConfiguration implements Configuration {
  configure(cx: ConfigurationContext): void {
    cx.configure(
      HttpConfiguration.builder()
        .platform(ExpressPlatformConfiguration)
        .build(),
    )
      .register({ bean: UserRepository })
      .register({ bean: UserService })
      .register({ bean: UserController })
      .register({ bean: LoggerMiddleware })
      .register({ bean: AdditionalLoggerMiddleware })
      .register({ bean: ExceptionHandlingAdvice });
  }
}
