import i18n from "../i18n";
import moment from "moment";
import "moment/locale/fr";
let lang = i18n.locale;
moment.locale(lang);

export function DateFormat(value) {
  return moment.unix(value).format("MMMM D, YYYY");
  //   return "aye mama";
}
