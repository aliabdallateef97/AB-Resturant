import  { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import * as selectors from "../config/import/selectors";


import {LocalType} from "../locales/localType";
import ar from "../locales/ar.json";
import en from "../locales/en.json";


type MessageType={
    ar:LocalType,
    en:LocalType
}

const messages:MessageType = { ar:ar,en:en };

type TypeProps={
    children:ReactNode
}

export function I18nProvider({ children }:TypeProps) {
  const locale= useSelector(selectors.appLanguage);
  return (
    <IntlProvider locale={locale} messages={messages[locale as keyof MessageType]}>
      {children}
    </IntlProvider>
  );
}
