/**
 * KIWI Token - Çoklu Dil Desteği (i18n)
 * Desteklenen diller: Türkçe, İngilizce, Rusça, Arapça
 */

// Dil anahtarları ve bilgileri
const LANGUAGES = {
  TR: 'tr',
  EN: 'en',
  RU: 'ru',
  AR: 'ar'
};

const LANGUAGE_INFO = {
  tr: {name: 'Türkçe', flag: '🇹🇷', nativeName: 'Türkçe'},
  en: {name: 'English', flag: '🇺🇸', nativeName: 'English'},
  ru: {name: 'Русский', flag: '🇷🇺', nativeName: 'Русский'},
  ar: {name: 'العربية', flag: '🇸🇦', nativeName: 'العربية'}
};

// Varsayılan dil
let currentLanguage = LANGUAGES.TR;

// Çeviriler
const translations = {
  // Türkçe (varsayılan)
  [LANGUAGES.TR]: {
    meta: {
      description: "KIWI, Blum ağında bulunan, amacı, iddiası veya vaatleri olmayan bir tokendir. Şimdilik KIWI'yi Blum üzerinden alıp satabilirsin.",
      keywords: "KIWI, token, kripto, Blum, TON, meme token, kripto para",
      ogDescription: "KIWI, Blum ağında bulunan, amacı, iddiası veya vaatleri olmayan bir tokendir.",
      twitterDescription: "KIWI, Blum ağında bulunan token. Hemen Blum üzerinden alım satım yapabilirsin."
    },
    title: "KIWI",
    description: "KIWI, <a href=\"https://www.blum.io/\" target=\"_blank\" rel=\"noopener\">Blum</a> ağında bulunan, amacı, iddiası veya vaatleri olmayan bir tokendir. Şimdilik KIWI'yi Blum üzerinden alıp satabilirsin. Arkadaşlarına KIWI'den bahsetmeyi, hakkında içerikler üretmeyi ve bizi X'te takip etmeyi unutma!",
    followButton: "X HESABIMIZA ULAŞ!",
    howToTitle: "Nasıl KIWI token alabilirim?",
    steps: [
      "<a href=\"https://t.me/blum/app?startapp=ref_BrT6JGaWn\" target=\"_blank\" rel=\"noopener\">Telegram üzerinden Blum'u başlatın.</a>",
      "Kripto cüzdanınızı Blum'a bağlayın.",
      "<a href=\"https://ton.org/tr\" target=\"_blank\" rel=\"noopener\" class=\"ton-link\">Satın almak istediğiniz tutarın <span style=\"color: #0088cc;\">TON</span> olarak kripto cüzdanınıza aktarın.</a>",
      "Bağlantıya tıklayarak KIWI'ye ulaşın ve alım satımlara başlayın."
    ],
    buyButton: "KIWI TOKEN'A ULAŞ!",
    disclaimer: "<strong>Yasal Uyarı:</strong> KIWI, bağımsız ve topluluk odaklı bir dijital varlıktır. Herhangi bir şirket, marka veya kuruluşla bağlantılı değildir. Yatırım tavsiyesi değildir, kullanım tamamen kullanıcı sorumluluğundadır.",
    justKiwi: "Just Kiwi",
    fullscreen: "Tam Ekran",
    exitFullscreen: "Çık",
    languageSelectTitle: "Dil seçin"
  },
  
  // İngilizce
  [LANGUAGES.EN]: {
    meta: {
      description: "KIWI is a token on the Blum network with no purpose, claims, or promises. For now, you can buy and sell KIWI through Blum.",
      keywords: "KIWI, token, crypto, Blum, TON, meme token, cryptocurrency",
      ogDescription: "KIWI is a token on the Blum network with no purpose, claims, or promises.",
      twitterDescription: "KIWI is a token on the Blum network. Buy and sell directly on Blum now."
    },
    title: "KIWI",
    description: "KIWI is a token on the <a href=\"https://www.blum.io/\" target=\"_blank\" rel=\"noopener\">Blum</a> network with no purpose, claims, or promises. For now, you can buy and sell KIWI through Blum. Don't forget to tell your friends about KIWI, create content about it, and follow us on X!",
    followButton: "FOLLOW US ON X!",
    howToTitle: "How can I buy KIWI token?",
    steps: [
      "<a href=\"https://t.me/blum/app?startapp=ref_BrT6JGaWn\" target=\"_blank\" rel=\"noopener\">Launch Blum via Telegram.</a>",
      "Connect your crypto wallet to Blum.",
      "<a href=\"https://ton.org/en\" target=\"_blank\" rel=\"noopener\" class=\"ton-link\">Transfer the amount you want to buy as <span style=\"color: #0088cc;\">TON</span> to your crypto wallet.</a>",
      "Click on the link to access KIWI and start trading."
    ],
    buyButton: "GET KIWI TOKEN!",
    disclaimer: "<strong>Disclaimer:</strong> KIWI is an independent and community-focused digital asset. It is not affiliated with any company, brand, or organization. This is not investment advice, usage is entirely at the user's responsibility.",
    justKiwi: "Just Kiwi",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit",
    languageSelectTitle: "Select language"
  },
  
  // Rusça
  [LANGUAGES.RU]: {
    meta: {
      description: "KIWI - это токен в сети Blum без цели, претензий или обещаний. Пока что вы можете покупать и продавать KIWI через Blum.",
      keywords: "KIWI, токен, крипто, Blum, TON, мем токен, криптовалюта",
      ogDescription: "KIWI - это токен в сети Blum без цели, претензий или обещаний.",
      twitterDescription: "KIWI - это токен в сети Blum. Покупайте и продавайте прямо на Blum прямо сейчас."
    },
    title: "KIWI",
    description: "KIWI - это токен в сети <a href=\"https://www.blum.io/\" target=\"_blank\" rel=\"noopener\">Blum</a> без цели, претензий или обещаний. Пока что вы можете покупать и продавать KIWI через Blum. Не забудьте рассказать своим друзьям о KIWI, создавать контент о нем и подписаться на нас в X!",
    followButton: "ПОДПИСАТЬСЯ НА X!",
    howToTitle: "Как купить токен KIWI?",
    steps: [
      "<a href=\"https://t.me/blum/app?startapp=ref_BrT6JGaWn\" target=\"_blank\" rel=\"noopener\">Запустите Blum через Telegram.</a>",
      "Подключите свой криптокошелек к Blum.",
      "<a href=\"https://ton.org/ru\" target=\"_blank\" rel=\"noopener\" class=\"ton-link\">Переведите сумму, которую вы хотите купить, в виде <span style=\"color: #0088cc;\">TON</span> в свой криптокошелек.</a>",
      "Нажмите на ссылку, чтобы получить доступ к KIWI и начать торговлю."
    ],
    buyButton: "ПОЛУЧИТЬ ТОКЕН KIWI!",
    disclaimer: "<strong>Отказ от ответственности:</strong> KIWI - это независимый цифровой актив, ориентированный на сообщество. Он не связан ни с какой компанией, брендом или организацией. Это не инвестиционный совет, использование полностью на ответственности пользователя.",
    justKiwi: "Just Kiwi",
    fullscreen: "Полный экран",
    exitFullscreen: "Выход",
    languageSelectTitle: "Выберите язык"
  },
  
  // Arapça
  [LANGUAGES.AR]: {
    meta: {
      description: "KIWI هو رمز على شبكة بلوم بدون غرض أو مطالبات أو وعود. في الوقت الحالي، يمكنك شراء وبيع KIWI من خلال بلوم.",
      keywords: "KIWI، رمز، عملة مشفرة، بلوم، تون، رمز ميم، عملة رقمية",
      ogDescription: "KIWI هو رمز على شبكة بلوم بدون غرض أو مطالبات أو وعود.",
      twitterDescription: "KIWI هو رمز على شبكة بلوم. اشتر وبع مباشرة على بلوم الآن."
    },
    title: "KIWI",
    description: "KIWI هو رمز على شبكة <a href=\"https://www.blum.io/\" target=\"_blank\" rel=\"noopener\">بلوم</a> بدون غرض أو مطالبات أو وعود. في الوقت الحالي، يمكنك شراء وبيع KIWI من خلال بلوم. لا تنس إخبار أصدقائك عن KIWI، وإنشاء محتوى عنه، ومتابعتنا على إكس!",
    followButton: "تابعنا على إكس!",
    howToTitle: "كيف يمكنني شراء رمز KIWI؟",
    steps: [
      "<a href=\"https://t.me/blum/app?startapp=ref_BrT6JGaWn\" target=\"_blank\" rel=\"noopener\">قم بتشغيل بلوم عبر تليجرام.</a>",
      "قم بتوصيل محفظة العملات المشفرة الخاصة بك إلى بلوم.",
      "<a href=\"https://ton.org/en\" target=\"_blank\" rel=\"noopener\" class=\"ton-link\">قم بتحويل المبلغ الذي تريد شراءه كـ <span style=\"color: #0088cc;\">TON</span> إلى محفظة العملات المشفرة الخاصة بك.</a>",
      "انقر على الرابط للوصول إلى KIWI وبدء التداول."
    ],
    buyButton: "احصل على رمز KIWI!",
    disclaimer: "<strong>إخلاء المسؤولية:</strong> KIWI هو أصل رقمي مستقل يركز على المجتمع. وهو غير مرتبط بأي شركة أو علامة تجارية أو منظمة. هذه ليست نصيحة استثمارية، الاستخدام يقع بالكامل على مسؤولية المستخدم.",
    justKiwi: "Just Kiwi",
    fullscreen: "ملء الشاشة",
    exitFullscreen: "خروج",
    languageSelectTitle: "اختر اللغة"
  }
};

/**
 * Dil değiştirme fonksiyonu
 */
function changeLanguage(lang) {
  if (!Object.values(LANGUAGES).includes(lang)) {
    console.error('Desteklenmeyen dil:', lang);
    return;
  }

  currentLanguage = lang;
  document.documentElement.dir = lang === LANGUAGES.AR ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  
  updateMetaTags();
  updatePageContent();
  localStorage.setItem('kiwi-language', lang);
  updateLanguageSelectorActiveItem();
}

/**
 * Meta etiketlerini güncelleme
 */
function updateMetaTags() {
  const meta = translations[currentLanguage].meta;
  
  document.querySelector('meta[name="description"]').setAttribute('content', meta.description);
  document.querySelector('meta[name="keywords"]').setAttribute('content', meta.keywords);
  document.querySelector('meta[property="og:description"]').setAttribute('content', meta.ogDescription);
  document.querySelector('meta[name="twitter:description"]').setAttribute('content', meta.twitterDescription);
}

/**
 * Sayfa içeriğini güncelleme
 */
function updatePageContent() {
  const t = translations[currentLanguage];
  
  document.getElementById('kiwi-text-intro').textContent = t.title;
  document.querySelector('.kiwi-title').textContent = t.title;
  document.querySelector('.description p').innerHTML = t.description;
  document.querySelector('.buttons .btn').textContent = t.followButton;
  document.querySelector('.subtitle').textContent = t.howToTitle;
  
  const steps = document.querySelectorAll('.steps li');
  t.steps.forEach((step, index) => {
    if (steps[index]) steps[index].innerHTML = step;
  });
  
  document.querySelector('.buy-button .btn').textContent = t.buyButton;
  document.querySelector('.disclaimer p').innerHTML = t.disclaimer;
  document.querySelector('.just-kiwi').textContent = t.justKiwi;
  
  updateFullscreenButtonText();
}

/**
 * Tam ekran buton metnini güncelleme
 */
function updateFullscreenButtonText() {
  const fullscreenButton = document.getElementById('fullscreen-button');
  if (!fullscreenButton) return;
  
  const t = translations[currentLanguage];
  const isFullscreen = document.fullscreenElement || 
                    document.mozFullScreenElement || 
                    document.webkitFullscreenElement || 
                    document.msFullscreenElement;
  
  fullscreenButton.textContent = isFullscreen ? t.exitFullscreen : t.fullscreen;
}

/**
 * Dil seçicideki aktif öğeyi günceller
 */
function updateLanguageSelectorActiveItem() {
  document.querySelectorAll('.language-selector-button').forEach(button => {
    const buttonLang = button.getAttribute('data-lang');
    button.classList.toggle('active', buttonLang === currentLanguage);
  });
}

/**
 * Dil seçici bileşenini oluştur ve ekle
 */
function createLanguageSelector() {
  const existingSelector = document.querySelector('.language-selector-container');
  if (existingSelector) existingSelector.remove();

  // CSS Stilleri
  const style = document.createElement('style');
  style.textContent = `
    .language-selector-container {
      position: fixed;
      top: 50px; /* Daha aşağıya konumlandırıldı */
      right: 60px; /* İçeri konumlandırma korundu */
      z-index: 10000;
      display: flex;
      align-items: center;
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    
    .language-selector-toggle {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background-color: rgba(151, 202, 63, 0.9);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      padding: 0;
    }
    
    .language-selector-toggle:hover {
      background-color: rgba(151, 202, 63, 1);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    /* Nizami dünya simgesi SVG */
    .language-selector-icon {
      width: 18px;
      height: 18px;
      fill: white;
    }
    
    .language-selector-menu {
      position: absolute;
      top: 40px;
      right: 0;
      background-color: white;
      border-radius: 8px;
      padding: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
      transition: all 0.3s ease;
      min-width: 140px;
      max-height: 70vh;
      overflow-y: auto;
      border: 1px solid rgba(151, 202, 63, 0.2);
    }
    
    .language-selector-menu.open {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    
    .language-selector-heading {
      font-size: 12px;
      color: #777;
      margin-bottom: 8px;
      font-family: 'Inconsolata', monospace;
      text-align: center;
      padding-bottom: 5px;
      border-bottom: 1px solid #eee;
      position: sticky;
      top: 0;
      background-color: white;
    }
    
    .language-selector-buttons {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    
    .language-selector-button {
      display: flex;
      align-items: center;
      padding: 6px 12px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: all 0.2s ease;
      border-radius: 4px;
      font-family: 'Inconsolata', monospace;
      font-weight: 700;
      color: #464631;
    }
    
    .language-selector-button:hover {
      background-color: rgba(151, 202, 63, 0.1);
      transform: translateX(2px);
    }
    
    .language-selector-button.active {
      background-color: rgba(151, 202, 63, 0.2);
    }
    
    .language-selector-flag {
      margin-right: 8px;
      font-size: 16px;
    }
    
    .language-selector-name {
      text-align: left;
      font-size: 14px;
    }
    
    [dir="rtl"] .language-selector-container {
      left: 60px;
      right: auto;
    }
    
    [dir="rtl"] .language-selector-menu {
      left: 0;
      right: auto;
    }
    
    [dir="rtl"] .language-selector-flag {
      margin-left: 8px;
      margin-right: 0;
    }
    
    [dir="rtl"] .language-selector-name {
      text-align: right;
    }
    
    [dir="rtl"] .language-selector-button:hover {
      transform: translateX(-2px);
    }
    
    @media (max-width: 768px) {
      .language-selector-container {
        top: 40px; /* Mobil için de aşağıya alındı */
        right: 40px;
      }
      
      .language-selector-toggle {
        width: 30px;
        height: 30px;
      }
      
      .language-selector-icon {
        width: 16px;
        height: 16px;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Ana konteyner
  const selectorContainer = document.createElement('div');
  selectorContainer.className = 'language-selector-container';
  
  // Dil değiştirme butonu - nizami SVG dünya simgesi
  const toggleButton = document.createElement('button');
  toggleButton.className = 'language-selector-toggle';
  toggleButton.setAttribute('aria-label', translations[currentLanguage].languageSelectTitle);
  toggleButton.setAttribute('type', 'button');
  
  // SVG dünya simgesi
  toggleButton.innerHTML = `
    <svg class="language-selector-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  `;
  
  // Dil menüsü
  const menuContainer = document.createElement('div');
  menuContainer.className = 'language-selector-menu';
  
  // Başlık
  const heading = document.createElement('div');
  heading.className = 'language-selector-heading';
  heading.textContent = translations[currentLanguage].languageSelectTitle;
  menuContainer.appendChild(heading);
  
  // Dil butonları konteyner
  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'language-selector-buttons';
  
  // Dil butonlarını oluştur
  Object.keys(LANGUAGE_INFO).forEach(langCode => {
    const langInfo = LANGUAGE_INFO[langCode];
    const button = document.createElement('button');
    button.className = `language-selector-button ${langCode === currentLanguage ? 'active' : ''}`;
    button.setAttribute('type', 'button');
    button.setAttribute('data-lang', langCode);
    
    const flag = document.createElement('span');
    flag.className = 'language-selector-flag';
    flag.textContent = langInfo.flag;
    
    const name = document.createElement('span');
    name.className = 'language-selector-name';
    name.textContent = langInfo.nativeName;
    
    button.appendChild(flag);
    button.appendChild(name);
    
    button.addEventListener('click', () => {
      changeLanguage(langCode);
      toggleMenu(false);
    });
    
    buttonsContainer.appendChild(button);
  });
  
  menuContainer.appendChild(buttonsContainer);
  
  // Toggle menüyü açıp kapatma
  toggleButton.addEventListener('click', () => {
    toggleMenu();
  });
  
  function toggleMenu(force) {
    if (force === undefined) {
      menuContainer.classList.toggle('open');
    } else {
      menuContainer.classList[force ? 'add' : 'remove']('open');
    }
    
    // Başlığı güncelle
    heading.textContent = translations[currentLanguage].languageSelectTitle;
  }
  
  // Dışarı tıklandığında menüyü kapat
  document.addEventListener('click', (e) => {
    if (!selectorContainer.contains(e.target)) {
      toggleMenu(false);
    }
  });
  
  // Bileşenleri bir araya getir
  selectorContainer.appendChild(toggleButton);
  selectorContainer.appendChild(menuContainer);
  document.body.appendChild(selectorContainer);
  
  // Intro bittikten sonra görünür yap
  setTimeout(() => {
    selectorContainer.style.opacity = '1';
  }, 3500);
}

/**
 * İlk yükleme ve event listener'ları ayarlama
 */
function initializeI18n() {
  // Kayıtlı dil tercihi kontrolü
  const savedLanguage = localStorage.getItem('kiwi-language');
  if (savedLanguage && Object.values(LANGUAGES).includes(savedLanguage)) {
    currentLanguage = savedLanguage;
  } else {
    // Tarayıcı dili kontrolü
    const browserLang = navigator.language.split('-')[0];
    if (Object.values(LANGUAGES).includes(browserLang)) {
      currentLanguage = browserLang;
    }
  }
  
  // Sayfa yüklendiğinde
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLanguage);
  } else {
    setupLanguage();
  }
  
  function setupLanguage() {
    document.documentElement.dir = currentLanguage === LANGUAGES.AR ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    
    updateMetaTags();
    
    // Intro animasyonu sonrasında içeriği güncelle
    setTimeout(() => {
      updatePageContent();
    }, 3000);
    
    createLanguageSelector();
    
    // Tam ekran değişikliklerini izle
    document.addEventListener('fullscreenchange', updateFullscreenButtonText);
    document.addEventListener('webkitfullscreenchange', updateFullscreenButtonText);
    document.addEventListener('mozfullscreenchange', updateFullscreenButtonText);
    document.addEventListener('MSFullscreenChange', updateFullscreenButtonText);
  }
}

// i18n sistemini başlat
initializeI18n();

// Global olarak erişim için dışa aktar
window.i18n = {
  changeLanguage,
  getCurrentLanguage: () => currentLanguage,
  getTranslation: (key) => {
    const keys = key.split('.');
    let result = translations[currentLanguage];
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        return key;
      }
    }
    
    return result;
  }
};
