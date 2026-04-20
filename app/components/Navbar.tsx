// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    language: 'fr' | 'en';
    setLanguage: (lang: 'fr' | 'en') => void;
}

export default function Navbar({ darkMode, toggleDarkMode, language, setLanguage }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
                    : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
            } border-b border-gray-200 dark:border-gray-800`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo avec Image locale - Taille augmentée */}
                    <a href="#home" className="flex items-center gap-3">
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
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition font-medium">
                            {t('Accueil', 'Home')}
                        </a>
                        <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition font-medium">
                            {t('Fonctionnalités', 'Features')}
                        </a>
                        <a href="#screenshots" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition font-medium">
                            {t('Aperçu', 'Preview')}
                        </a>
                        <a
                            href="#download"
                            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition flex items-center gap-2 shadow-md"
                        >
                            <i className="fas fa-download"></i> {t('Télécharger', 'Download')}
                        </a>
                    </div>

                    {/* Language & Theme Switchers */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={() => setLanguage('fr')}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg ${
                                language === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                        >
                            FR
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg ${
                                language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={toggleDarkMode}
                            className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center shadow-lg"
                        >
                            {darkMode ? (
                                <i className="fas fa-sun text-yellow-500"></i>
                            ) : (
                                <i className="fas fa-moon text-gray-700"></i>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-600 dark:text-gray-300">
                        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                        <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 py-2">
                            {t('Accueil', 'Home')}
                        </a>
                        <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 py-2">
                            {t('Fonctionnalités', 'Features')}
                        </a>
                        <a href="#screenshots" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 py-2">
                            {t('Aperçu', 'Preview')}
                        </a>
                        <a href="#download" onClick={() => setMobileMenuOpen(false)} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-center">
                            {t('Télécharger', 'Download')}
                        </a>
                        <div className="flex items-center gap-2 pt-2">
                            <button onClick={() => { setLanguage('fr'); setMobileMenuOpen(false); }} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                FR
                            </button>
                            <button onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                EN
                            </button>
                            <button onClick={toggleDarkMode} className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                {darkMode ? <i className="fas fa-sun text-yellow-500"></i> : <i className="fas fa-moon text-gray-700"></i>}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}