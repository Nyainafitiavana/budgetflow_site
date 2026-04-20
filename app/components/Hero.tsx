// components/Hero.tsx
'use client';

import PhoneMockup from './PhoneMockup';

interface HeroProps {
    language: 'fr' | 'en';
}

export default function Hero({ language }: HeroProps) {
    const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

    return (
        <section id="home" className="pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
                            <i className="fas fa-chart-line text-blue-600 text-sm"></i>
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {t('Gestion de budget intelligente', 'Smart budget management')}
              </span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Budget<span className="text-blue-600">Flow</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                            {t(
                                'Gérez votre budget simplement et efficacement. Suivez vos dépenses, gérez vos budgets et épargnez plus.',
                                'Manage your budget simply and effectively. Track your expenses, manage your budgets and save more.'
                            )}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#download"
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2 shadow-lg"
                            >
                                <i className="fas fa-download"></i> {t('Télécharger l\'APK', 'Download APK')}
                            </a>
                            <a
                                href="#screenshots"
                                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition flex items-center justify-center gap-2"
                            >
                                <i className="fas fa-play"></i> {t('Voir la démo', 'View demo')}
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-8">
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                <span className="text-gray-600 dark:text-gray-300">{t('Gratuit', 'Free')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                <span className="text-gray-600 dark:text-gray-300">{t('Sécurisé', 'Secure')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-green-500"></i>
                                <span className="text-gray-600 dark:text-gray-300">{t('Hors ligne', 'Offline')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="flex-1 flex justify-center">
                        <PhoneMockup language={language} />
                    </div>
                </div>
            </div>
        </section>
    );
}