import { I18n as i18n } from 'i18n-js';
import { useState } from 'react';
import * as Localization from 'expo-localization';
import es from './translations/es';
import en from './translations/en';


var I18n = new i18n({ es, en });
//const [locale, setLocale] = useState(Localization.locale);
i18n.locale = Localization.locale
i18n.enableFallback = true
i18n.defaultLocale = "es"

export default I18n;