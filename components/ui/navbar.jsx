"use client";
import React, { useState } from "react";

export default function Navbar({ t, lang, setLang }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/icons/logo.png" alt="logo" className="w-9 h-9 rounded-full object-cover" />
            <span className="font-bold text-lg text-green-700">{t.brand[lang]}</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-green-700">{t.nav[lang][0]}</a>
            <a href="#products" className="text-sm font-medium text-gray-700 hover:text-green-700">{t.nav[lang][2]}</a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-green-700">{t.nav[lang][1]}</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-green-700">{t.nav[lang][3]}</a>
            <a href={`https://wa.me/971504761587?text=${encodeURIComponent(lang === 'ar' ? 'مرحبًا، أريد عرض سعر لطلبات بالجملة.' : 'Hello, I need a bulk quote for custom stamps.')}`} className="ml-2 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-green-500 text-white text-sm">{t.nav[lang][4]}</a>

            {/* Language switcher */}
            <div className="flex items-center gap-2 ml-2 relative">
              <div className="switch relative inline-block">
                <input
                  id="language-toggle-desktop"
                  type="checkbox"
                  className="sr-only"
                  checked={lang === 'ar'}
                  onChange={(e) => setLang(e.target.checked ? 'ar' : 'en')}
                  aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
                />

                <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-300 rounded-full inline-block">
                  <label htmlFor="language-toggle-desktop" className="block w-[97px] h-[35px] rounded-full cursor-pointer relative bg-white/10 backdrop-blur-sm border border-white/10">
                    <span className={`absolute top-[4px] left-[4px] w-[48px] h-[27px] bg-white rounded-full shadow transition-transform ${lang === 'ar' ? 'translate-x-[44px]' : 'translate-x-0'}`} />
                  </label>

                  {/* Left flag (USA) */}
                  <span className={`absolute top-[6px] left-3 w-6 h-6 rounded-full overflow-hidden pointer-events-none transition ${lang === 'en' ? 'bg-white ring-2 ring-emerald-600 ring-offset-1 ring-offset-white' : 'bg-gray-200'}`} aria-hidden="true">
                    <svg viewBox="0 0 512 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <rect width="512" height="512" fill="#b22234" />
                      <rect y="64" width="512" height="64" fill="#fff" />
                      <rect y="192" width="512" height="64" fill="#fff" />
                      <rect y="320" width="512" height="64" fill="#fff" />
                      <rect width="230.4" height="224" fill="#3c3b6e" />
                    </svg>
                  </span>

                  {/* Right flag (UAE) */}
                  <span className={`absolute top-[6px] right-3 w-6 h-6 rounded-full overflow-hidden pointer-events-none transition ${lang === 'ar' ? 'bg-white ring-2 ring-emerald-600 ring-offset-1 ring-offset-white' : 'bg-gray-200'}`} aria-hidden="true">
                    <svg viewBox="0 0 512 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <rect width="512" height="512" fill="#009639" />
                      <rect y="170.666" width="512" height="170.666" fill="#fff" />
                      <rect y="341.333" width="512" height="170.667" fill="#000" />
                      <rect width="128" height="512" fill="#cf1124" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)} type="button" aria-label="Toggle menu" className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100">
              {!navOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden border-t bg-white/70 p-4">
          <a href="#" className="block py-3 text-base text-gray-700">{t.nav[lang][0]}</a>
          <a href="#services" className="block py-3 text-base text-gray-700">{t.nav[lang][1]}</a>
          <a href="#products" className="block py-3 text-base text-gray-700">{t.nav[lang][2]}</a>
          <a href="#contact" className="block py-3 text-base text-gray-700">{t.nav[lang][3]}</a>

          <a href={`https://wa.me/971504761587?text=${encodeURIComponent(lang === 'ar' ? 'مرحبًا، أحتاج عرض سعر للطباعة' : 'Hello, I need a quote for printing')}`} className="mt-3 block text-center bg-green-500 text-white px-4 py-2 rounded-md font-semibold">{t.nav[lang][4]}</a>

          <div className="mt-3 flex items-center gap-3 relative">
            <div className="switch relative inline-block">
              <input
                id="language-toggle-mobile"
                type="checkbox"
                className="sr-only"
                checked={lang === 'ar'}
                onChange={(e) => setLang(e.target.checked ? 'ar' : 'en')}
                aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
              />

              <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-300 rounded-full inline-block">
                <label htmlFor="language-toggle-mobile" className="block w-[86px] h-[35px] rounded-full cursor-pointer relative bg-white/10 backdrop-blur-sm border border-white/10">
                  <span className={`absolute top-[4px] left-[4px] w-[48px] h-[27px] bg-white rounded-full shadow transition-transform ${lang === 'ar' ? 'translate-x-[38px]' : 'translate-x-0'}`} />
                </label>

                <span className={`absolute top-[8px] left-2 w-5 h-5 rounded-full overflow-hidden pointer-events-none transition ${lang === 'en' ? 'bg-white ring-2 ring-emerald-600 ring-offset-1 ring-offset-white' : 'bg-gray-200'}`} aria-hidden="true">
                  <svg viewBox="0 0 512 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <rect width="512" height="512" fill="#b22234" />
                    <rect y="64" width="512" height="64" fill="#fff" />
                    <rect y="192" width="512" height="64" fill="#fff" />
                    <rect y="320" width="512" height="64" fill="#fff" />
                    <rect width="230.4" height="224" fill="#3c3b6e" />
                  </svg>
                </span>

                <span className={`absolute top-[8px] right-2 w-5 h-5 rounded-full overflow-hidden pointer-events-none transition ${lang === 'ar' ? 'bg-white ring-2 ring-emerald-600 ring-offset-1 ring-offset-white' : 'bg-gray-200'}`} aria-hidden="true">
                  <svg viewBox="0 0 512 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <rect width="512" height="512" fill="#009639" />
                    <rect y="170.666" width="512" height="170.666" fill="#fff" />
                    <rect y="341.333" width="512" height="170.667" fill="#000" />
                    <rect width="128" height="512" fill="#cf1124" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
