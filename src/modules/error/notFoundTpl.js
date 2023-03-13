import Handlebars from "handlebars";
import { notFoundTemplate } from "./notFound";
export const errorLink = (props) => {
  return Handlebars.compile(notFoundTemplate)(props);
};
