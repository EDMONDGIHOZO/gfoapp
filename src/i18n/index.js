import * as Localization from "expo-localization";
import i18n from "i18n-js";
import en from "./en";
import fr from "./fr";

// get save local language
let defLang = Localization.locale;
// Set the key-value pairs for the different languages
i18n.translations = {
  en,
  fr,
};
// Set the locale once at the beginning of the app.
// check if there is languge in async storage
i18n.locale = defLang;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default i18n;
