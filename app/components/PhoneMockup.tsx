// components/PhoneMockup.tsx
'use client';

interface PhoneMockupProps {
    language: 'fr' | 'en';
}

export default function PhoneMockup({ language }: PhoneMockupProps) {
    const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

    return (
        <div className="phone-frame w-[340px] p-3">
            <div className="phone-screen">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                {/* Status Bar */}
                <div className="status-bar flex justify-between items-center px-5 pt-3 pb-2">
                    <span className="text-white text-sm font-semibold">9:41</span>
                    <div className="flex gap-1.5">
                        <i className="fas fa-signal text-white text-xs"></i>
                        <i className="fas fa-wifi text-white text-xs"></i>
                        <i className="fas fa-battery-full text-white text-xs"></i>
                    </div>
                </div>

                {/* Header */}
                <div className="px-4 py-3">
                    <h1 className="text-sm font-bold text-white">{t('Comptes', 'Accounts')}</h1>
                </div>

                {/* Scrollable Content */}
                <div className="px-4 pb-24 space-y-4" style={{ height: 480, overflowY: 'auto' }}>
                    {/* Bank Account Card */}
                    <div className="account-card bg-[#1E293B] rounded-2xl p-4 border border-[#334155] shadow-lg">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-blue-500/15 flex items-center justify-center">
                                    <i className="fas fa-building text-blue-500 text-sm"></i>
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-base">{t('Compte Bancaire', 'Bank')}</p>
                                    <p className="text-gray-400 text-xs">{t('Banque', 'Bank account')}</p>
                                </div>
                            </div>
                            <p className="text-white text-sm font-bold">Ar 50 000</p>
                        </div>
                        <div className="flex gap-3 mt-2">
                            <button className="flex-1 py-2.5 bg-blue-600 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-500 transition">
                                <i className="fas fa-plus text-white text-sm"></i>
                                <span className="text-white text-sm font-medium">{t('Alimenter', 'Top up')}</span>
                            </button>
                            <button className="flex-1 py-2.5 bg-blue-500/30 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-500/40 transition">
                                <i className="fas fa-exchange-alt text-white text-sm"></i>
                                <span className="text-white text-sm font-medium">{t('→ Espèces', '→ Cash')}</span>
                            </button>
                        </div>
                    </div>

                    {/* Cash Card */}
                    <div className="account-card bg-[#1E293B] rounded-2xl p-4 border border-[#334155] shadow-lg">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-green-500/15 flex items-center justify-center">
                                    <i className="fas fa-money-bill text-green-500 text-sm"></i>
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-base">{t('Espèces', 'Cash')}</p>
                                    <p className="text-gray-400 text-xs">{t('Liquide disponible', 'Available cash')}</p>
                                </div>
                            </div>
                            <p className="text-white text-sm font-bold">Ar 100 000</p>
                        </div>
                        <div className="flex gap-3 mt-2">
                            <button className="flex-1 py-2.5 bg-yellow-500/80 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-500 transition">
                                <i className="fas fa-piggy-bank text-white text-sm"></i>
                                <span className="text-white text-sm font-medium">{t('Espèces → Épargne', 'Cash → Savings')}</span>
                            </button>
                        </div>
                        <div className="mt-3 p-2.5 bg-blue-500/10 rounded-xl">
                            <div className="flex items-center gap-2">
                                <i className="fas fa-lightbulb text-yellow-500 text-xs"></i>
                                <p className="text-gray-400 text-xs">{t('Les espèces servent aussi à alimenter vos budgets', 'Cash is also used to top up your budgets')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Savings Card */}
                    <div className="account-card bg-[#1E293B] rounded-2xl p-4 border border-[#334155] shadow-lg">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-green-500/15 flex items-center justify-center">
                                    <i className="fas fa-piggy-bank text-green-500 text-sm"></i>
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-base">{t('Épargne', 'Savings')}</p>
                                    <p className="text-gray-400 text-xs">{t('Économies', 'Savings')}</p>
                                </div>
                            </div>
                            <p className="text-white text-sm font-bold">Ar 20 000</p>
                        </div>
                        <div className="flex gap-3 mt-2">
                            <button className="flex-1 py-2.5 bg-green-600 rounded-xl flex items-center justify-center gap-2 hover:bg-green-500 transition">
                                <i className="fas fa-arrow-up text-white text-sm"></i>
                                <span className="text-white text-sm font-medium">{t('Épargne → Espèces', 'Savings → Cash')}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="bottom-nav absolute bottom-0 left-0 right-0 py-2 px-4 flex justify-between rounded-t-2xl">
                    <div className="items-center text-center py-1 px-3 rounded-xl transition hover:bg-gray-700/50">
                        <i className="fas fa-home text-gray-400 text-sm"></i>
                        <p className="text-gray-400 text-xs mt-0.5">{t('Accueil', 'Home')}</p>
                    </div>
                    <div className="items-center text-center py-1 px-3 rounded-xl transition hover:bg-gray-700/50">
                        <i className="fas fa-chart-bar text-gray-400 text-sm"></i>
                        <p className="text-gray-400 text-xs mt-0.5">Dashboard</p>
                    </div>
                    <div className="items-center text-center py-1 px-3 rounded-xl transition hover:bg-gray-700/50">
                        <i className="fas fa-wallet text-gray-400 text-sm"></i>
                        <p className="text-gray-400 text-xs mt-0.5">{t('Budgets', 'Budgets')}</p>
                    </div>
                    <div className="items-center text-center py-1 px-3 rounded-xl bg-blue-500/20">
                        <i className="fas fa-building text-blue-500 text-sm"></i>
                        <p className="text-blue-500 text-xs mt-0.5 font-medium">{t('Comptes', 'Accounts')}</p>
                    </div>
                    <div className="items-center text-center py-1 px-3 rounded-xl transition hover:bg-gray-700/50">
                        <i className="fas fa-cog text-gray-400 text-sm"></i>
                        <p className="text-gray-400 text-xs mt-0.5">{t('Paramètres', 'Settings')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}