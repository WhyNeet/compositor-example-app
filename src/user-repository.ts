import { Autowired, Bean, Late, Qualifier, Scope } from "@compositor/core";

@Bean()
export class UserRepository {
  constructor() {
    console.log("init user repository");
  }

  public getUsername(): string {
    return "WhyNeet";
  }
}
