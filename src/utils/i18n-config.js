const en = require('../locales/en/messages.json');
const pt = require('../locales/pt/messages.json');

const catalogs = {
  en: { messages: en },
  pt: { messages: pt },
};

const defaultLanguage = 'pt';

const prefix = language => (language === defaultLanguage ? '/' : `/${language}`);
const deprefix = pathname => (pathname.startsWith('/en/') ? pathname.substr(4) : pathname);
const langFromPath = pathname => (pathname.startsWith('/en/') ? 'en' : 'pt');

exports.defaultLanguage = defaultLanguage;
exports.languages = ['en', 'pt'];
exports.catalogs = catalogs;
exports.prefix = prefix;
exports.deprefix = deprefix;
exports.langFromPath = langFromPath;
