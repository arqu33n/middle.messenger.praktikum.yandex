import Handlebars from "handlebars";
import { loginTemplate } from "./login";
export const loginLink = () => {
  const template = Handlebars.compile(loginTemplate)({
    loginText: "Создать аккаунт",
  });
  return template;
};
