import { loginLink } from "./modules/login/loginTpl";
import { signinLink } from "./modules/signin/signinTpl";

export const App = () => {
  switch (window.location.pathname) {
    case "/sign-in":
      return signinLink();
    case "/login":
      return loginLink();
    default:
      return loginLink();
  }
};
