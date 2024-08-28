import { ControllerAdvice, Bean, ExceptionHandler } from "@compositor/core";
import type { HttpRequest, HttpResponse } from "@compositor/http";

@ControllerAdvice()
export class ExceptionHandlingAdvice {
  constructor() {
    console.log("init exception handling advice");
  }

  @ExceptionHandler(Error)
  public handleException(
    ex: Error,
    request: HttpRequest,
    response: HttpResponse,
  ) {
    return {
      data: "uh oh, this is an error ig",
      instance: request.path,
    };
  }
}
