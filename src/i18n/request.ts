import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as typeof locales[number])) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});