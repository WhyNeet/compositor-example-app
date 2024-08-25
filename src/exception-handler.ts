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
    console.log("an error occured on:", request.path);
    console.error("error:", ex.name, ex.message);
  }
}
