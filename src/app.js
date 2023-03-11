import { loginLink } from "./modules/login/loginTpl";
import { signinLink } from "./modules/signin/signinTpl";
import { profileLink } from "./modules/profile/profileTpl";
import { chatLink } from "./modules/chat/chatTpl";
import { errorLink } from "./modules/error/notFoundTpl";

export const App = () => {
  switch (window.location.pathname) {
    case "/sign-in":
      return signinLink();
    case "/login":
      return loginLink();
    case "/profile":
      return profileLink();
    case "/chat":
    case "/chat/":
      return chatLink();
    case "/not-found":
      return errorLink({
        errorText: "Назад к чатам",
        errorMessage: "Не туда попали",
        errorCode: "404",
      });
    case "/error":
      return errorLink({
        errorText: "Назад к чатам",
        errorMessage: "Мы уже фиксим",
        errorCode: "500",
      });
    default:
      return loginLink();
  }
};
