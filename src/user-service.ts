import {
  ApplicationContext,
  Autowired,
  Bean,
  Context,
  Qualifier,
} from "@compositor/core";
import { UserRepository } from "./user-repository.js";

@Bean()
export class UserService {
  constructor(private userRepository: UserRepository) {
    console.log("User service created!");
  }

  public getUserData(userId: string) {
    return { id: userId, username: this.userRepository.getUsername() };
  }
}
