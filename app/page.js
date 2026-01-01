"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  const [services, setservices] = useState([]);
  const [otherservices, setOtherServices] = useState([]);
  const [navOpen, setNavOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  // Language (en/ar)
  const [lang, setLang] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('lang') || 'en' : 'en'));

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    // update page title for SEO & clarity
    document.title = `${t.brand[lang]} - ${t.heroTitle[lang]}`;
    // optional meta description update (keeps in sync with hero subtitle)
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.heroSubtitle[lang]);
  }, [lang]);

  // simple translations
  const t = {
    brand: { en: 'Prime Print', ar: 'برايم برينت' },
    nav: { en: ['Home', 'Services', 'Products', 'Contact', 'WhatsApp'], ar: ['الرئيسية', 'الخدمات', 'المنتجات', 'اتصل', 'واتساب'] },
    heroTag: { en: 'Business Printing · Packaging · Branding', ar: 'الطباعة التجارية · التغليف · العلامة التجارية' },
    heroTitle: { en: 'End-to-end Printing Solutions for Businesses', ar: 'حلول الطباعة المتكاملة للشركات' },
    heroSubtitle: { en: 'Business cards, bill books, T-shirts, leaflets, banners, gold foiling, stickers, diaries, boxes, signboards, screen & digital printing, labels, offset and shopping bags — volume discounts, expert prepress and express delivery across the UAE.', ar: 'بطاقات أعمال، دفاتر فواتير، تي شيرتات، مناشير، لافتات، تذهيب ذهبي، ملصقات، دفاتر يومية، تغليف وعلب، لوحات إعلانية، طباعة سلكية ورقمية، ملصقات، أوفست وحقائب تسوق — خصومات للطلب بالجملة، تحضير مدقق للطباعة وتسليم سريع في جميع أنحاء الإمارات.' },
    ctaQuote: { en: 'Get a Quote', ar: 'طلب عرض سعر' },
    ctaBrowse: { en: 'Browse Products', ar: 'تصفح المنتجات' },
    callLabel: { en: 'Call Us', ar: 'اتصل بنا' },
    features: { en: ['Custom Design', 'Free Delivery', 'Moneyback Guarantee', '24/7 Support'], ar: ['تصميم مخصص', 'توصيل مجاني', 'ضمان استرداد', 'دعم 24/7'] },
    testimonialsTitle: { en: 'What our clients say', ar: 'ماذا يقول عملاؤنا' },
    testimonialsSubtitle: { en: 'Trusted by businesses across the UAE — real feedback from our customers.', ar: 'موثوق بها من قبل شركات في جميع أنحاء الإمارات — آراء حقيقية من عملائنا.' },
    faqTitle: { en: 'Frequently asked questions', ar: 'الأسئلة المتكررة' },
    faq: {
      en: [
        { q: 'How long does delivery take?', a: 'Typical delivery is 2-5 business days within the UAE for standard orders; express options are available for urgent bulk shipments.' },
        { q: 'Do you offer bulk discounts?', a: 'Yes — we provide tiered pricing for bulk orders. Contact us with your estimated quantity for a tailored quote and lead time.' },
        { q: 'Can you create custom designs?', a: 'Absolutely — we have an in-house design team that works with your brand guidelines to produce final proofs for approval before production.' },
      ],
      ar: [
        { q: 'كم يستغرق التوصيل؟', a: 'عادةً يستغرق التوصيل من 2-5 أيام عمل داخل الإمارات للطلبات العادية؛ تتوفر خيارات سريعة للشحنات العاجلة.' },
        { q: 'هل تقدمون خصومات للطلبات بالجملة؟', a: 'نعم — نقدم تسعيرًا متدرجًا للطلبيات الكبيرة. تواصل معنا بكمية التقديرية للحصول على عرض سعر وموعد تسليم.' },
        { q: 'هل يمكنكم تصميم نماذج مخصصة؟', a: 'بالتأكيد — لدينا فريق تصميم داخلي يعمل وفقًا لإرشادات علامتك التجارية لتقديم نماذج نهائية للموافقة قبل الإنتاج.' },
      ]
    },
    contactUs: { en: 'Contact Us Anytime', ar: 'تواصل معنا في أي وقت' },
    footerCopy: { en: `© ${new Date().getFullYear()} Emirates PrimePrint. All rights reserved`, ar: `© ${new Date().getFullYear()} جميع الحقوق محفوظة لشركة الإمارات برايم برينت.` }
  };

  // Testimonials slider state
  const testimonials = [
    {
      quote: "Fast delivery, excellent bulk pricing — our office chain now uses their services across all branches.",
      name: "Rashid Ahmed",
      role: "Procurement Manager, Gulf Retail",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      quote: "Great communication and quick revisions — we got exactly what we needed for our corporate clients.",
      name: "Fatima Noor",
      role: "Office Supplies Head, Al Saff",
      avatar: "https://i.pravatar.cc/150?img=58",
    },
    {
      quote: "Reliable, professional service and competitive pricing — ideal for bulk orders.",
      name: "Mohammed Al Zarooni",
      role: "Operations Manager, Qamar Ltd.",
      avatar: "https://i.pravatar.cc/150?img=52",
    },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextTestimonial = () => setCurrentTestimonial((p) => (p + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);

  // autoplay
  useEffect(() => {
    const iv = setInterval(() => setCurrentTestimonial((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(iv);
  }, [testimonials.length]);

  useEffect(() => {
    fetch("/printservices.json")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);

  useEffect(() => {
    fetch("/other_services.json")
      .then((res) => res.json())
      .then((data) => setOtherServices(data));
  }, []);

  // lightweight scroll reveal for sections
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const nodes = document.querySelectorAll('[data-animate]');
    if (!nodes.length) return;
    const onIntersect = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    };
    const io = new IntersectionObserver(onIntersect, { threshold: 0.12 });
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const sendToWhatsApp = (image, name, size, type, price) => {
    const phone = "971504761587";
    const message = `Hello,
    I visited your website and I would like to know more about "${name}" printing services.
    Please assist me.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Stat counters removed — using static values per request


  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} />

      <style>{`[data-animate]{opacity:0;transform:translateY(18px);transition:opacity .6s ease, transform .6s cubic-bezier(.2,.8,.2,1);will-change:opacity,transform}[data-animate].in-view{opacity:1;transform:none}@media (prefers-reduced-motion: reduce){[data-animate]{transition:none;transform:none;opacity:1}}`}</style>

      {/* PrimePrint Hero section */}
      <main id="hero" data-animate style={{ backgroundImage: "linear-gradient(to bottom, rgba(6, 95, 70, 0.57), rgba(7, 62, 44, 0.76)), url('/dubai_bg.svg')", backgroundSize: "cover", backgroundPosition: "center" }} className="min-h-[70vh] md:h-screen w-full flex items-center py-16 md:py-24">
        <div className="max-w-xl sm:max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold text-emerald-200 mb-2">{t.heroTag[lang]}</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">{t.heroTitle[lang]}</h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6">{t.heroSubtitle[lang]}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href={`https://wa.me/971504761587?text=${encodeURIComponent(lang === 'ar' ? 'مرحبًا، أحتاج عرض سعر للطباعة (مثال: بطاقات أعمال، لافتات، تي شيرتات). الشركة: [اسم الشركة]. الكمية/المواصفات: [الكمية/التفاصيل].' : 'Hello, I need a quote for printing (e.g., Business Cards, Banners, T-Shirts). Company: [Your Company]. Quantity/Specs: [Qty/Details].')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={lang === 'ar' ? 'فتح واتساب' : 'Open WhatsApp'}
              className="flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-md md:rounded-lg text-sm md:text-base lg:text-lg shadow-md hover:shadow-lg transition duration-200 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-5 md:w-6 h-5 md:h-6" />
              <span className="leading-tight">{t.nav[lang][4]}</span>
            </a>

            <a href="tel:+971504761587" aria-label={lang === 'ar' ? 'اتصل بنا' : 'Call us'} className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-md md:rounded-lg text-sm md:text-base lg:text-lg shadow-lg hover:shadow-2xl transform transition duration-200 hover:scale-105 active:scale-95 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              <span className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-8 w-8 md:h-10 md:w-10 animate-ping rounded-full bg-cyan-400 opacity-40"></span>
              <img src="/icons/callus.png" alt="callus" className="w-5 md:w-6 h-5 md:h-6 z-10" />
              <span className="z-10">{t.callLabel[lang]}</span>
            </a>
          </div>
        </div>
      </main>

      {/* PrimePrint Quick Features */}
      <main data-animate className="w-full py-8 grid grid-cols-2 md:grid-cols-4 justify-center gap-4 px-4 md:px-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-gray-900">
        <div className="flex flex-col items-center justify-center md:border-r-2 border-white/30 gap-3">
          <img src="icons/custom_print.svg" alt="custom print design" className="w-8 lg:w-10 h-8 lg:h-10 drop-shadow" />
          <p className="text-xs font-bold">{t.features[lang][0]}</p>
        </div>
        <div className="flex flex-col items-center justify-center md:border-r-2 border-white/30 gap-3">
          <img src="icons/truck-fast-solid-full.svg" alt="delivery" className="w-8 lg:w-10 h-8 lg:h-10 drop-shadow" />
          <p className="text-xs font-bold">{t.features[lang][1]}</p>
        </div>
        <div className="flex flex-col items-center justify-center md:border-r-2 border-white/30 gap-3">
          <img src="icons/discount.svg" alt="guarantee" className="w-8 lg:w-10 h-8 lg:h-10 drop-shadow" />
          <p className="text-xs font-bold">{t.features[lang][2]}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <img src="icons/phone.svg" alt="support" className="w-8 lg:w-10 h-8 lg:h-10 drop-shadow" />
          <p className="text-xs font-bold">{t.features[lang][3]}</p>
        </div>
      </main>


      {/*  PrimePrint Print services */}
      <main id="products" data-animate className="w-full bg-gradient-to-b from-white to-emerald-50 py-16 flex flex-col items-center">
        <div className="w-full max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
            {services.map((service, idx) => (
              <Card key={idx} className="w-full shadow-lg border-2 border-emerald-100 rounded-xl transition hover:scale-105 hover:shadow-2xl hover:border-emerald-300 duration-200 bg-white">
                <CardContent className="p-4 flex flex-col items-center">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="rounded-lg aspect-square bg-gray-100 mb-3 w-32 h-32 md:w-40 md:h-40 object-cover"
                  />
                  <CardTitle className="text-lg font-semibold mb-1 text-gray-800">{service.name}</CardTitle>
                  <CardDescription className="text-sm mb-3 text-gray-600 text-center">
                    {/* Size: {service.size} | Type: {service.type} */}
                  </CardDescription>
                  <Button
                    onClick={() => sendToWhatsApp(service.image, service.name, service.size, service.type, service.price)}
                    size="sm"
                    className="text-xs w-full px-3 py-2 h-9 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg shadow transition duration-200 font-semibold"
                  >
                    Order / Inquiry
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Other Services */}
      <main id="other_services" data-animate
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(240, 253, 250, 0.98), rgba(204, 251, 241, 0.76)), url('/prints.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full max-h-max flex flex-col gap-8 text-center py-12">
        <div className="w-full flex flex-col items-center gap-2">
          <h1 className="text-xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 drop-shadow-lg mb-2">
            Discover Our Other Services
          </h1>
          <h4 className="text-[10px] lg:text-xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700">
            Beyond services: Creative Solutions for Your Business
          </h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center p-5 lg:p-12 mb-5 gap-6 lg:gap-20">
          {otherservices.map((service, idx) => (
            <div className="relative" key={idx}>
              <div
                style={{
                  backgroundColor: service.color_code,
                }}
                className="service_card_behind -z-10 w-8 lg:w-10 h-8 lg:h-10 absolute rounded-md opacity-60"></div>
              <div className="service_card flex bg-white items-center gap-2 lg:gap-5 p-3 rounded-lg shadow-lg transition hover:scale-105 hover:shadow-xl duration-200 border border-emerald-100">
                <div style={{ backgroundColor: service.color_code }} className="w-6 lg:w-8 h-6 lg:h-8 rounded-md text-white text-[10px] lg:text-sm font-black flex items-center justify-center flex-shrink-0">{idx + 1}</div>
                <h3 className="text-[10px] lg:text-sm lg:font-semibold text-gray-800">{service.service_name}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Testimonials (slider) */}
      <section id="testimonials" data-animate className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{t.testimonialsTitle[lang]}</h2>
          <p className="text-gray-600 mb-8">{t.testimonialsSubtitle[lang]}</p>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
                onTouchMove={(e) => (touchEndX.current = e.touches[0].clientX)}
                onTouchEnd={() => {
                  if (touchStartX.current == null || touchEndX.current == null) return;
                  const dx = touchStartX.current - touchEndX.current;
                  if (dx > 50) {
                    nextTestimonial();
                  } else if (dx < -50) {
                    prevTestimonial();
                  }
                  touchStartX.current = null;
                  touchEndX.current = null;
                }}
              >
                {testimonials.map((t, idx) => (
                  <div key={idx} className="min-w-full p-6 flex justify-center">
                    <div className="bg-emerald-50 p-6 rounded-lg shadow max-w-2xl">
                      <p className="text-gray-700 mb-4">"{t.quote}"</p>
                      <div className="flex items-center gap-3">
                        <img src={t.avatar} alt="client" className="w-10 h-10 rounded-full object-cover" />
                        <div className="text-left">
                          <p className="font-semibold text-gray-800">{t.name}</p>
                          <p className="text-sm text-gray-500">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={prevTestimonial} aria-label="Previous" className="hidden md:inline-flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextTestimonial} aria-label="Next" className="hidden md:inline-flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="mt-4 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setCurrentTestimonial(i)} className={`w-2 h-2 rounded-full ${i === currentTestimonial ? 'bg-emerald-600' : 'bg-emerald-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" data-animate className="w-full py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">Frequently asked questions</h2>
          <div className="space-y-3">
            <div className="border rounded-lg overflow-hidden">
              <button onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)} className="w-full flex justify-between items-center p-4 text-left">
                <span className="font-medium">{lang === 'ar' ? t.faq.ar[0].q : t.faq.en[0].q}</span>
                <svg className={`w-5 h-5 transition-transform ${openFAQ === 0 ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.138.976l-4.25 5a.75.75 0 01-1.138 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
              </button>
              {openFAQ === 0 && <div className="p-4 border-t text-gray-600">{lang === 'ar' ? t.faq.ar[0].a : t.faq.en[0].a}</div>}
            </div>

            <div className="border rounded-lg overflow-hidden">
              <button onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)} className="w-full flex justify-between items-center p-4 text-left">
                <span className="font-medium">{lang === 'ar' ? t.faq.ar[1].q : t.faq.en[1].q}</span>
                <svg className={`w-5 h-5 transition-transform ${openFAQ === 1 ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.138.976l-4.25 5a.75.75 0 01-1.138 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
              </button>
              {openFAQ === 1 && <div className="p-4 border-t text-gray-600">{lang === 'ar' ? t.faq.ar[1].a : t.faq.en[1].a}</div>}
            </div>

            <div className="border rounded-lg overflow-hidden">
              <button onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)} className="w-full flex justify-between items-center p-4 text-left">
                <span className="font-medium">{lang === 'ar' ? t.faq.ar[2].q : t.faq.en[2].q}</span>
                <svg className={`w-5 h-5 transition-transform ${openFAQ === 2 ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.138.976l-4.25 5a.75.75 0 01-1.138 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
              </button>
              {openFAQ === 2 && <div className="p-4 border-t text-gray-600">{lang === 'ar' ? t.faq.ar[2].a : t.faq.en[2].a}</div>}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <main id="contact" data-animate className="w-full grid lg:grid-cols-4 gap-5 font-bold text-gray-800 py-8 px-8 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 text-center">
        <div className="flex flex-col items-center justify-center gap-2 lg:border-r-2 border-white/40">
          <div className="flex items-center gap-2">
            <img src="icons/phone.svg" alt="phone" className="w-4 lg:w-6 h-4 lg:h-6" />
            +971 504761587
          </div>
          <span className="text-xs">{t.contactUs[lang]}</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 lg:border-r-2 border-white/40">
          <p className="text-3xl flex flex-col">78+
            <span className="text-sm font-semibold">Happy Customer</span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 lg:border-r-2 border-white/40">
          <p className="text-3xl flex flex-col">07+
            <span className="text-sm font-semibold">Locations</span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-3xl flex flex-col">19+
            <span className="text-sm font-semibold">Services</span>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-wrap items-center justify-between bg-gradient-to-l from-emerald-600 to-teal-600 text-white px-8 gap-4 py-6">
        <div className="flex flex-wrap gap-2">
          <p className="text-sm">{t.footerCopy[lang]}</p>
          <span className="text-sm">| Developed by <a className="text-cyan-200 italic font-semibold hover:text-white" href='https://ashrafuddin.vercel.app/' target="_blank">TTB</a></span>
        </div>
        <div className="flex gap-5">
          <a href="/privacy_policy.html" className="text-sm hover:text-cyan-200 transition">Privacy Policy</a>
          <a href="/terms_and_conditions.html" className="text-sm hover:text-cyan-200 transition">Terms & Conditions</a>
        </div>
        <div>
          <img src="payment_methods.png" alt="Payment Methods" className="w-auto h-12" />
        </div>
      </footer>
    </>
  );
}
