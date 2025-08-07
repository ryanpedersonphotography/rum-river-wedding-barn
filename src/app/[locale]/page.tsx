import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Rum River Wedding Barn</h1>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-600">{t('common.navigation.home')}</Link></li>
            <li><Link href="/about" className="hover:text-gray-600">{t('common.navigation.about')}</Link></li>
            <li><Link href="/gallery" className="hover:text-gray-600">{t('common.navigation.gallery')}</Link></li>
            <li><Link href="/packages" className="hover:text-gray-600">{t('common.navigation.packages')}</Link></li>
            <li><Link href="/contact" className="hover:text-gray-600">{t('common.navigation.contact')}</Link></li>
          </ul>
        </div>
      </nav>
      
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-4">{t('home.hero.title')}</h2>
        <p className="text-xl text-gray-600 mb-8">{t('home.hero.subtitle')}</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            {t('common.cta.bookNow')}
          </button>
          <button className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50">
            {t('common.cta.learnMore')}
          </button>
        </div>
      </section>
    </main>
  );
}