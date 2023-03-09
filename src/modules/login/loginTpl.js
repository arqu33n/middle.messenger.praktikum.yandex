import Handlebars from "handlebars";
import { loginTemplate } from "./login";
export const loginLink = () => {
  return Handlebars.compile(loginTemplate)();
};
