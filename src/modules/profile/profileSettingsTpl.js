import Handlebars from "handlebars";
import { profileSettingsTemplate } from "./profileSettings";
export const profileSettingsLink = () => {
  return Handlebars.compile(profileSettingsTemplate)({});
};
