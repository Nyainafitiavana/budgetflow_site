// components/Download.tsx
'use client';

import { motion } from 'framer-motion';

interface DownloadProps {
    language: 'fr' | 'en';
}

export default function Download({ language }: DownloadProps) {
    const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

    return (
        <section id="download" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl"
                >
                    <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-download text-3xl text-blue-600"></i>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('Prêt à gérer votre budget ?', 'Ready to manage your budget?')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                        {t('Téléchargez BudgetFlow gratuitement et commencez à économiser dès aujourd\'hui.', 'Download BudgetFlow for free and start saving today.')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://drive.google.com/file/d/1DtlNVSZaxWAMrCx57MiERRGSaMGMHI-d/view?usp=sharing"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold text-lg transition shadow-lg"
                        >
                            <i className="fab fa-android text-2xl"></i>
                            <span>{t('Télécharger l\'APK', 'Download APK')}</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                        Version 1.0.0 | Android 8.0+ | {t('Taille', 'Size')}: ~107 MB
                    </p>
                </motion.div>
            </div>
        </section>
    );
}