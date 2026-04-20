// components/Footer.tsx
'use client';

import Image from 'next/image';

interface FooterProps {
    language: 'fr' | 'en';
}

export default function Footer({ language }: FooterProps) {
    const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

    return (
        <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto text-center">
                {/* Logo au-dessus du texte */}
                <div className="flex flex-col items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                        <Image
                            src="/images/logo_home_150x150.png"
                            alt="BudgetFlow Logo"
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                            unoptimized
                        />
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">BudgetFlow</span>
                </div>

                <p className="text-gray-500 dark:text-gray-400 mb-4">
                    © 2026 FITAHIANTSOA Ny Aina Fitiavana - {t('Tous droits réservés', 'All rights reserved')}
                </p>

                <div className="flex justify-center gap-6">
                    <a
                        href="https://nyainafitiavana-portfolio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition"
                    >
                        <i className="fa-solid fa-user text-xl"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ny-aina-fitiavana-fitahiantsoa-a8a759247/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition"
                    >
                        <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a
                        href="mailto:ainafitiavana.project@gmail.com"
                        className="text-gray-400 hover:text-blue-600 transition"
                    >
                        <i className="fas fa-envelope text-xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}