import { Advice, Bean, ExceptionHandler } from "@compositor/core";

// AOP is not implemented yet
@Advice(Bean.decorator)
export class ExceptionHandlingAdvice {
  constructor() {
    console.log("init exception handling advice");
  }

  @ExceptionHandler(Error)
  public handleException(ex: Error) {
    console.log("An error occured!", ex.name, ex.message);
  }
}
