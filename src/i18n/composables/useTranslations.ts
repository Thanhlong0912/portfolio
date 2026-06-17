import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";
import { onMounted } from "vue";
import { LOCALES } from "../constants";

import type { Locale } from "../types";

export const useTranslations = () => {
  onMounted(() => {
    const savedLocale = window.localStorage.getItem("portfolio-locale");

    if (savedLocale === "de") {
      locale.value = "vi";
      return;
    }

    if (savedLocale && savedLocale in LOCALES) {
      locale.value = savedLocale as Locale;
      return;
    }

    const preferredLocale = navigator.language.split("-")[0] as Locale;

    if (preferredLocale in LOCALES) {
      locale.value = preferredLocale;
    } else {
      locale.value = "en";
    }
  });

  watch(locale, () => {
    if (!locale.value) return;
    window.localStorage.setItem("portfolio-locale", locale.value);
  });

  watch(
    locale,
    async (newLocale) => {
      if (!newLocale) return;
      translations.value = (await loadTranslations("common", newLocale)) ?? {};
    },
    { immediate: true },
  );
};
