// ==========================================
// MADEFORU JO - قائمة المنتجات والإعدادات
// متجر الهدايا والمصنوعات المخصصة — تُصنع خصيصاً لك
// ==========================================

const STORE_CONFIG = {
  storeName: "MadeForU",
  storeTagline: "هدايا ومصنوعات فريدة تُصنع خصيصاً لك — خشب وأكريليك مع حفر ليزر مخصص",
  currency: "د.أ",
  deliveryAmman: 1.0,      // أجرة التوصيل داخل عمان: 1 دينار
  deliveryOutside: 2.0,    // أجرة التوصيل خارج عمان (باقي المحافظات): 2 دينار
  whatsappNumber: "962789423717",
  logo: "images/MadeForU Logo Trans.png",
  favicon: "images/MadeForU Logo.png",
  instagramUrl: "https://www.instagram.com/madeforu.jo/",
  facebookUrl: "https://www.facebook.com/madeforu.jo",

  // خدمة الحفر المخصص بالليزر
  engravingFee: 3.0,       // رسم الحفر: 3 دنانير (يتم تحويله مسبقاً بالتنسيق عبر الواتساب)

  // خيارات المواد والألوان بأسماء مباشرة وبسيطة
  materials: [
    {
      id: "mdf",
      name: "خشب MDF صلب",
      price: 7,
      badge: "الأكثر طلباً 🪵",
      desc: "خشب صلب متين ومقاوم للكسر والتمزق، بلمسة دافئة وأصيلة.",
      colors: [
        { id: "light-wood", name: "خشب فاتح", hex: "#c89d7c" },
        { id: "dark-wood", name: "خشب داكن", hex: "#5a3825" },
        { id: "black", name: "أسود", hex: "#1f1f1f" },
        { id: "white", name: "أبيض", hex: "#ffffff", border: "#ccc" }
      ]
    },
    {
      id: "acrylic",
      name: "أكريليك صلب",
      price: 10,
      badge: "مظهر عصري 💎",
      desc: "أكريليك صلب متين بمظهر زجاجي أنيق وعصري ومقاومة عالية.",
      colors: [
        { id: "clear", name: "شفاف", hex: "linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #bae6fd 100%)", border: "#93c5fd" },
        { id: "white", name: "أبيض", hex: "#ffffff", border: "#bbb" },
        { id: "black", name: "أسود", hex: "#0a0a0a" }
      ]
    }
  ]
};

// المنتجات الأساسية (الخرائط والأشكال الفنية)
const BASE_PRODUCTS = [
  {
    id: 1,
    title: "خريطة الأردن الملكية الفاخرة",
    category: "خرائط 🗺️",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "الأكثر طلباً 🇯🇴",
    shortDesc: "قطعة فنية مميزة مقاس 40 سم من الخشب الصلب أو الأكريليك، تُصنع خصيصاً لك مع إمكانية حفر ليزر مخصص.",
    description: "خريطة الأردن الملكية بتصميم فني هندسي متقن. كل قطعة تُصنع بعناية وإتقان خصيصاً لك من خامات صلبة فاخرة مقاس 40 سم (خشب MDF صلب أو أكريليك عصري)، مع إمكانية إضافة حفر ليزر مخصص لاسمك أو إهدائك الخاص.",
    image: "images/Jordan Map Puzzle/Jordan Map render s0000.png",
    gallery: [
      "images/Jordan Map Puzzle/Jordan Map render s0000.png",
      "images/Jordan Map Puzzle/Jordan Map render s0001.png",
      "images/Jordan Map Puzzle/Jordan Map render0002.png",
      "images/Jordan Map Puzzle/Top.png"
    ]
  },
  {
    id: 2,
    title: "خريطة فلسطين التاريخية",
    category: "خرائط 🗺️",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "مميز 🇵🇸",
    shortDesc: "قطعة تذكارية أصيلة تجسد خارطة فلسطين التاريخية من خامات صلبة مقاس 40 سم.",
    description: "قطعة تذكارية أصيلة تجسد خارطة فلسطين التاريخية بجمال وتفاصيل هندسية دقيقة. مصنوعة من خامات صلبة فاخرة غير قابلة للتلف تدوم لسنوات، وتُصنع خصيصاً لك مع إمكانية الحفر المخصص.",
    image: "images/Palestine Map Puzzle/Palestine20003.png",
    gallery: [
      "images/Palestine Map Puzzle/Palestine20003.png",
      "images/Palestine Map Puzzle/Palestine20002.png",
      "images/Palestine Map Puzzle/Palestine20001.png",
      "images/Palestine Map Puzzle/Palestine20000.png"
    ]
  },
  {
    id: 3,
    title: "شكل القلب الفني الإهدائي",
    category: "أشكال ⭐",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "هدية فريدة ❤️",
    shortDesc: "هدية استثنائية لمن تحب بتصميم القلب الفني، خامات صلبة مقاس 40 سم مع إمكانية حفر إهداء خاص.",
    description: "هدية مثالية مميزة للمناسبات والأحباب. تصميم فني متداخل يجمع بين الأناقة والمتانة، مصنوع من خشب MDF الصلب أو الأكريليك بمقاس 40 سم يدوم لسنوات، مع إمكانية حفر عبارة إهداء خاصة.",
    image: "images/Shapes/heart0005.png",
    gallery: [
      "images/Shapes/heart0005.png",
      "images/Shapes/heart0004.png",
      "images/Shapes/heart0002.png",
      "images/Shapes/heart0000.png"
    ]
  },
  {
    id: 4,
    title: "النجمة الهندسية الفاخرة",
    category: "أشكال ⭐",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "تصميم هندسي ⭐",
    shortDesc: "نجمة هندسية متناظرة بتصميم راقٍ، مقطوعة بدقة ليزر متناهية مقاس 40 سم.",
    description: "تحفة هندسية متناظرة راقية للديكور والإهداء. مقطوعة بدقة متناهية من خامات صلبة متينة مقاس 40 سم، تُصنع وتُجهّز خصيصاً لك من متجر MadeForU.",
    image: "images/Shapes/star0005.png",
    gallery: [
      "images/Shapes/star0005.png",
      "images/Shapes/star0004.png",
      "images/Shapes/star0002.png",
      "images/Shapes/star0000.png"
    ]
  }
];

// توليد جميع الحروف الأبجدية الـ 26 (من A إلى Z)
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const LETTER_PRODUCTS = ALPHABET.map((char, index) => ({
  id: 5 + index,
  title: `حرف شخصي مخصص — حرف ${char}`,
  category: "حروف 🔤",
  price: 7,
  priceAcrylic: 10,
  dimensions: "المقاس 40 سم",
  badge: `حرف ${char} 🔤`,
  shortDesc: `حرف (${char}) مخصص ومصنوع خصيصاً لك من خامات صلبة فاخرة مع إمكانية حفر إهداء خاص.`,
  description: `تصميم شخصي فاخر لحرف (${char}). يُصنع خصيصاً لك بحرفية عالية من خامات صلبة مقاس 40 سم (خشب MDF صلب أو أكريليك عصري)، ويمكن إضافة حفر ليزر مخصص للاسم أو التاريخ على القاعدة.`,
  image: `images/Letters/${char}0003.png`,
  gallery: [
    `images/Letters/${char}0003.png`,
    `images/Letters/${char}0002.png`,
    `images/Letters/${char}0001.png`,
    `images/Letters/${char}0000.png`
  ]
}));

// دمج المنتجات
const PRODUCTS = [...BASE_PRODUCTS, ...LETTER_PRODUCTS];
