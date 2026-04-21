import type { Metadata } from 'next';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import {Analytics} from "@vercel/analytics/vue";

export const metadata: Metadata = {
    title: 'BudgetFlow - Gérez votre budget simplement',
    description: 'BudgetFlow vous aide à gérer votre budget, suivre vos dépenses et épargner plus efficacement.',
    keywords: 'budget, finance, gestion, argent, épargne, Madagascar',
    authors: [{ name: 'FITAHIANTSOA Ny Aina Fitiavana' }],
    icons: {
        icon: [
            { url: '/images/favicon.png', sizes: 'any' },
            { url: '/images/favicon.png', sizes: '16x16', type: 'image/png' },
            { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <body className="bg-white dark:bg-gray-900 transition-colors duration-300" suppressHydrationWarning>
            {children}
            <Analytics />
        </body>
        </html>
    );
}