import Handlebars from "handlebars";
import { chatTemplate } from "./chat";
export const chatLink = () => {
  return Handlebars.compile(chatTemplate)({});
};
