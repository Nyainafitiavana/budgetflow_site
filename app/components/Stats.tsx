// components/Stats.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatsProps {
    language: 'fr' | 'en';
}

export default function Stats({ language }: StatsProps) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

    const stats = [
        { value: '4+', labelFr: 'Écrans principaux', labelEn: 'Main Screens' },
        { value: '100%', labelFr: 'Hors ligne', labelEn: 'Offline' },
        { value: 'Gratuit', labelFr: 'Sans publicité', labelEn: 'Ad-free' },
        { value: 'Sécurisé', labelFr: 'Données locales', labelEn: 'Local data' },
    ];

    return (
        <section className="py-20 px-6 gradient-bg">
            <div className="container mx-auto">
                <div ref={ref} className="grid md:grid-cols-4 gap-8 text-center text-white">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-4xl font-bold">{stat.value}</div>
                            <div className="text-white/80">{t(stat.labelFr, stat.labelEn)}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}