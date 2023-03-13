import Handlebars from "handlebars";
import { profileTemplate } from "./profile";
export const profileLink = () => {
  return Handlebars.compile(profileTemplate)({
    profileText: "Профиль",
  });
};
