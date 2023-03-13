import Handlebars from "handlebars";
import { signinTemplate } from "./signin";
export const signinLink = () => {
  return Handlebars.compile(signinTemplate)({
    signinText: "Войти",
  });
};
