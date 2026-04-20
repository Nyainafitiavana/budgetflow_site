// components/Features.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeaturesProps {
    language: 'fr' | 'en';
}

export default function Features({ language }: FeaturesProps) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

    const features = [
        { icon: 'fas fa-chart-pie', titleFr: 'Tableau de bord', titleEn: 'Dashboard', descFr: 'Visualisez vos dépenses en temps réel et suivez votre progression.', descEn: 'View your expenses in real time and track your progress.' },
        { icon: 'fas fa-wallet', titleFr: 'Gestion des budgets', titleEn: 'Budget Management', descFr: 'Créez et gérez vos budgets personnalisés facilement.', descEn: 'Create and manage your custom budgets easily.' },
        { icon: 'fas fa-moon', titleFr: 'Thème clair/sombre', titleEn: 'Light/Dark Theme', descFr: 'Adaptez l\'application à votre préférence visuelle.', descEn: 'Adapt the app to your visual preference.' },
    ];

    return (
        <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('Fonctionnalités principales', 'Main Features')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t('Découvrez tout ce que BudgetFlow peut faire pour vous', 'Discover everything BudgetFlow can do for you')}
                    </p>
                </div>

                <div ref={ref} className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                                <i className={`${feature.icon} text-blue-600 text-2xl group-hover:text-white transition-colors`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {t(feature.titleFr, feature.titleEn)}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t(feature.descFr, feature.descEn)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}