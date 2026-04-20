// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Stats from './components/Stats';
import Download from './components/Download';
import Footer from './components/Footer';

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState<'fr' | 'en'>('fr');

    // Éviter l'hydratation mismatch
    useEffect(() => {
        setMounted(true);
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        const savedLanguage = localStorage.getItem('language') as 'fr' | 'en';
        setDarkMode(savedDarkMode);
        if (savedLanguage) setLanguage(savedLanguage);
        if (savedDarkMode) document.documentElement.classList.add('dark');
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', String(newDarkMode));
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const toggleLanguage = (lang: 'fr' | 'en') => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    // Éviter le rendu pendant l'hydratation
    if (!mounted) {
        return (
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <div className="flex items-center justify-center h-screen">
                    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    return (
        <main>
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                language={language}
                setLanguage={toggleLanguage}
            />
            <Hero language={language} />
            <Features language={language} />
            <Screenshots language={language} />
            <Stats language={language} />
            <Download language={language} />
            <Footer language={language} />
        </main>
    );
}