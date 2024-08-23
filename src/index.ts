import { Application } from "@compositor/core";
import { RootConfiguration } from "./configuration.js";
import {
  HttpMethod,
  method,
  param,
  PathTrie,
  wildcard,
} from "@compositor/http";

const application = new Application();

application.configure(RootConfiguration);
application.bootstrap();
