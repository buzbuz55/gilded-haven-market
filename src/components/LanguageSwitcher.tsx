import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

type Lang = { code: string; name: string; title: string; desc: string; rtl?: boolean };

// Site title + description in the 25 most widely spoken languages.
export const LANGUAGES: Lang[] = [
  { code: "en", name: "English", title: "LUXE — Luxury Jewelry, Art & Watches Consignment", desc: "Bring us your jewelry, art and watches. We examine, price and sell them — you keep 90%." },
  { code: "zh-CN", name: "中文", title: "LUXE — 奢华珠宝、艺术品与腕表寄售", desc: "将您的珠宝、艺术品和腕表交给我们。我们鉴定、定价并出售——您保留90%。" },
  { code: "hi", name: "हिन्दी", title: "LUXE — लक्ज़री आभूषण, कला और घड़ियों की कंसाइनमेंट", desc: "अपने आभूषण, कला और घड़ियाँ हमारे पास लाएँ। हम जाँच, मूल्य निर्धारण और बिक्री करते हैं — आपको 90% मिलता है।" },
  { code: "es", name: "Español", title: "LUXE — Consignación de joyas, arte y relojes de lujo", desc: "Tráenos tus joyas, arte y relojes. Los examinamos, valoramos y vendemos: tú te quedas con el 90%." },
  { code: "fr", name: "Français", title: "LUXE — Dépôt-vente de bijoux, art et montres de luxe", desc: "Confiez-nous vos bijoux, œuvres d'art et montres. Nous les expertisons, estimons et vendons — vous gardez 90 %." },
  { code: "ar", name: "العربية", rtl: true, title: "LUXE — بيع المجوهرات والفنون والساعات الفاخرة بالأمانة", desc: "أحضر لنا مجوهراتك وأعمالك الفنية وساعاتك. نفحصها ونسعّرها ونبيعها — وتحصل على 90٪." },
  { code: "bn", name: "বাংলা", title: "LUXE — বিলাসবহুল গহনা, শিল্পকর্ম ও ঘড়ির কনসাইনমেন্ট", desc: "আপনার গহনা, শিল্পকর্ম ও ঘড়ি আমাদের কাছে আনুন। আমরা পরীক্ষা, মূল্য নির্ধারণ ও বিক্রি করি — আপনি পান ৯০%।" },
  { code: "pt", name: "Português", title: "LUXE — Consignação de joias, arte e relógios de luxo", desc: "Traga suas joias, arte e relógios. Nós avaliamos, precificamos e vendemos — você fica com 90%." },
  { code: "ru", name: "Русский", title: "LUXE — Комиссионная продажа ювелирных украшений, искусства и часов", desc: "Принесите нам украшения, произведения искусства и часы. Мы оценим и продадим их — вы получите 90%." },
  { code: "ur", name: "اردو", rtl: true, title: "LUXE — لگژری زیورات، آرٹ اور گھڑیوں کی کنسائنمنٹ", desc: "اپنے زیورات، آرٹ اور گھڑیاں ہمارے پاس لائیں۔ ہم جانچ، قیمت اور فروخت کرتے ہیں — آپ کو 90٪ ملتا ہے۔" },
  { code: "id", name: "Bahasa Indonesia", title: "LUXE — Konsinyasi Perhiasan, Seni & Jam Tangan Mewah", desc: "Bawa perhiasan, karya seni, dan jam tangan Anda. Kami periksa, beri harga, dan jual — Anda menerima 90%." },
  { code: "de", name: "Deutsch", title: "LUXE — Kommission für Luxusschmuck, Kunst & Uhren", desc: "Bringen Sie uns Ihren Schmuck, Ihre Kunst und Uhren. Wir prüfen, bewerten und verkaufen — Sie erhalten 90 %." },
  { code: "ja", name: "日本語", title: "LUXE — 高級ジュエリー・美術品・時計の委託販売", desc: "ジュエリー、美術品、時計をお持ちください。鑑定・査定・販売を行い、売上の90%をお支払いします。" },
  { code: "sw", name: "Kiswahili", title: "LUXE — Uuzaji wa Vito, Sanaa na Saa za Kifahari kwa Niaba", desc: "Tuletee vito, sanaa na saa zako. Tunazikagua, kuzipa bei na kuziuza — wewe unapata 90%." },
  { code: "mr", name: "मराठी", title: "LUXE — आलिशान दागिने, कला व घड्याळांची कन्साइनमेंट", desc: "तुमचे दागिने, कला आणि घड्याळे आमच्याकडे आणा. आम्ही तपासतो, किंमत ठरवतो आणि विकतो — तुम्हाला ९०% मिळतात." },
  { code: "te", name: "తెలుగు", title: "LUXE — విలాసవంతమైన ఆభరణాలు, కళ & గడియారాల కన్సైన్‌మెంట్", desc: "మీ ఆభరణాలు, కళాఖండాలు, గడియారాలు మాకు తీసుకురండి. మేము పరిశీలించి, ధర నిర్ణయించి, అమ్ముతాము — మీకు 90%." },
  { code: "tr", name: "Türkçe", title: "LUXE — Lüks Mücevher, Sanat ve Saat Konsinye Satışı", desc: "Mücevherlerinizi, sanat eserlerinizi ve saatlerinizi getirin. İnceler, fiyatlar ve satarız — %90'ı sizin." },
  { code: "ta", name: "தமிழ்", title: "LUXE — ஆடம்பர நகைகள், கலை & கடிகாரங்கள் சரக்கு விற்பனை", desc: "உங்கள் நகைகள், கலைப்பொருட்கள், கடிகாரங்களை கொண்டு வாருங்கள். நாங்கள் ஆய்வு செய்து, விலை நிர்ணயித்து விற்கிறோம் — உங்களுக்கு 90%." },
  { code: "vi", name: "Tiếng Việt", title: "LUXE — Ký gửi trang sức, nghệ thuật và đồng hồ cao cấp", desc: "Mang trang sức, tác phẩm nghệ thuật và đồng hồ của bạn đến. Chúng tôi thẩm định, định giá và bán — bạn nhận 90%." },
  { code: "ko", name: "한국어", title: "LUXE — 명품 주얼리·예술품·시계 위탁 판매", desc: "주얼리, 예술품, 시계를 가져오세요. 감정하고 가격을 매겨 판매하며, 판매 금액의 90%를 드립니다." },
  { code: "it", name: "Italiano", title: "LUXE — Conto vendita di gioielli, arte e orologi di lusso", desc: "Portaci i tuoi gioielli, opere d'arte e orologi. Li esaminiamo, valutiamo e vendiamo: a te il 90%." },
  { code: "fa", name: "فارسی", rtl: true, title: "LUXE — فروش امانی جواهرات، آثار هنری و ساعت‌های لوکس", desc: "جواهرات، آثار هنری و ساعت‌های خود را بیاورید. ما بررسی، قیمت‌گذاری و فروش می‌کنیم — ۹۰٪ سهم شماست." },
  { code: "pa", name: "ਪੰਜਾਬੀ", title: "LUXE — ਲਗਜ਼ਰੀ ਗਹਿਣੇ, ਕਲਾ ਅਤੇ ਘੜੀਆਂ ਦੀ ਕੰਸਾਈਨਮੈਂਟ", desc: "ਆਪਣੇ ਗਹਿਣੇ, ਕਲਾ ਅਤੇ ਘੜੀਆਂ ਸਾਡੇ ਕੋਲ ਲਿਆਓ। ਅਸੀਂ ਜਾਂਚ, ਕੀਮਤ ਅਤੇ ਵਿਕਰੀ ਕਰਦੇ ਹਾਂ — ਤੁਹਾਨੂੰ 90% ਮਿਲਦਾ ਹੈ।" },
  { code: "th", name: "ไทย", title: "LUXE — รับฝากขายเครื่องประดับ งานศิลปะ และนาฬิกาหรู", desc: "นำเครื่องประดับ งานศิลปะ และนาฬิกาของคุณมาที่เรา เราตรวจสอบ ตั้งราคา และขาย — คุณได้รับ 90%" },
  { code: "pl", name: "Polski", title: "LUXE — Komis luksusowej biżuterii, sztuki i zegarków", desc: "Przynieś nam swoją biżuterię, dzieła sztuki i zegarki. Wycenimy je i sprzedamy — Ty otrzymasz 90%." },
];

const KEY = "luxe-lang";

const applyHead = (l: Lang) => {
  document.documentElement.lang = l.code;
  document.documentElement.dir = l.rtl ? "rtl" : "ltr";
  if (location.pathname === "/") document.title = l.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", l.desc);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", l.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", l.desc);
};

// Page text is translated with Google's website translator.
const setTranslateCookie = (code: string) => {
  const v = code === "en" ? "" : `/en/${code}`;
  const exp = code === "en" ? "; expires=Thu, 01 Jan 1970 00:00:00 GMT" : "";
  document.cookie = `googtrans=${v}; path=/${exp}`;
};

const loadTranslator = () => {
  if (document.getElementById("gt-script")) return;
  (window as any).googleTranslateElementInit = () => {
    new (window as any).google.translate.TranslateElement({ pageLanguage: "en", autoDisplay: false }, "gt-el");
  };
  const s = document.createElement("script");
  s.id = "gt-script";
  s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(s);
};

const LanguageSwitcher = () => {
  const [code, setCode] = useState(() => localStorage.getItem(KEY) || "en");

  useEffect(() => {
    const l = LANGUAGES.find((x) => x.code === code) ?? LANGUAGES[0];
    applyHead(l);
    if (code !== "en") loadTranslator();
  }, [code]);

  const change = (c: string) => {
    localStorage.setItem(KEY, c);
    setTranslateCookie(c);
    setCode(c);
    window.location.reload();
  };

  return (
    <label className="flex items-center gap-1 text-sm text-muted-foreground notranslate" translate="no">
      <Globe className="w-4 h-4" aria-hidden />
      <span className="sr-only">Language</span>
      <select value={code} onChange={(e) => change(e.target.value)} className="bg-transparent border border-border rounded-md px-1 py-1 text-foreground" aria-label="Choose language">
        {LANGUAGES.map((l) => <option key={l.code} value={l.code}>{l.name}</option>)}
      </select>
      <div id="gt-el" className="hidden" />
    </label>
  );
};

export default LanguageSwitcher;
