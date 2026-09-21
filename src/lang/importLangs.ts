import { createI18n } from 'vue-i18n';
import { deepmerge } from "deepmerge-ts";
import { parse } from 'yaml';

import configYaml from './config.yaml?raw'
// translations imports 
import messagesEnYaml from './en.yaml?raw'
import messagesFrYaml from './fr.yaml?raw'
// --- add here the imports for the other langages ---

const config = parse(configYaml);
const messages_en = parse(messagesEnYaml);
const messages_fr = parse(messagesFrYaml);

const en = deepmerge(config, messages_en);
const fr = deepmerge(config, messages_fr);

type Schema = typeof en

// translation of the website
export const i18n = createI18n<[Schema], "en" | "fr">({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {en, fr}
})