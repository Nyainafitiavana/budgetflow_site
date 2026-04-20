// components/Screenshots.tsx (alignement en bas)
'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ScreenshotsProps {
    language: 'fr' | 'en';
}

export default function Screenshots({ language }: ScreenshotsProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

    const screenshots = [
        { nameFr: 'Tableau de bord', nameEn: 'Dashboard', image: '/images/dashboard.png', height: 350 },
        { nameFr: 'Gestion des budgets', nameEn: 'Budgets', image: '/images/budget.png', height: 440 },
        { nameFr: 'Historique', nameEn: 'History', image: '/images/history_transaction.png', height: 360 },
        { nameFr: 'Comptes', nameEn: 'Accounts', image: '/images/accounts.png', height: 440 },
    ];

    return (
        <>
            <section id="screenshots" className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('Aperçu de l\'application', 'App Preview')}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {t('Découvrez l\'interface simple et intuitive de BudgetFlow', 'Discover the simple and intuitive interface of BudgetFlow')}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 items-end">
                        {screenshots.map((screen, index) => (
                            <div
                                key={index}
                                className="text-center cursor-pointer"
                                onClick={() => setSelectedImage(screen.image)}
                            >
                                <div className="bg-gray-900 rounded-2xl p-2 shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div
                                        className="bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center"
                                        style={{ height: screen.height }}
                                    >
                                        <Image
                                            src={screen.image}
                                            alt={screen.nameEn}
                                            width={220}
                                            height={screen.height}
                                            className="w-auto h-full object-contain"
                                            unoptimized
                                        />
                                    </div>
                                    <p className="mt-2 text-gray-300 font-medium text-center text-sm py-1">
                                        {t(screen.nameFr, screen.nameEn)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal pour agrandir l'image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-3xl w-full mx-4">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-10 right-0 text-white hover:text-blue-400 transition flex items-center gap-2"
                        >
                            <span className="text-xl">✕</span>
                            <span>{t('Fermer', 'Close')}</span>
                        </button>
                        <div className="bg-gray-900 rounded-xl p-3">
                            <Image
                                src={selectedImage}
                                alt="Full size screenshot"
                                width={400}
                                height={800}
                                className="rounded-lg w-full h-auto max-h-[85vh] object-contain"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}