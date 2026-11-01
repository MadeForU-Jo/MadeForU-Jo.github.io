// ==========================================
// PUZZLEME JO - قائمة المنتجات والإعدادات
// قطع البازل نفسها تتولد بطريقة رياضية مبنية على الـ Fractals
// حصرياً: نحن المتجر الوحيد في الأردن والشرق الأوسط لهذا المنتج الفريد
// ==========================================

const STORE_CONFIG = {
  storeName: "PuzzleMe JO",
  storeTagline: "قطع تتولّد بطريقة رياضية مبنية على الـ Fractals — حصرياً في الأردن والشرق الأوسط",
  currency: "د.أ",
  deliveryAmman: 1.0,      // أجرة التوصيل داخل عمان: 1 دينار
  deliveryOutside: 2.0,    // أجرة التوصيل خارج عمان (باقي المحافظات): 2 دينار
  whatsappNumber: "962789423717",
  logo: "images/Logo/puzzleme logo.png",
  appUrl: "https://play.google.com/store/apps/details?id=com.ZaytuneGames.Puzzleme&hl=en",
  instagramUrl: "https://www.instagram.com/puzzleme.jo/",
  facebookUrl: "https://www.facebook.com/Puzzleme.Jo",

  // خدمة الحفر المخصص بالليزر
  engravingFee: 5.0,       // رسم الحفر: 5 دنانير (يتم تحويله مسبقاً بالتنسيق عبر الواتساب)

  // خيارات المواد والألوان بأسماء مباشرة وبسيطة (بدون ذكر السماكة)
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
    title: "بازل خريطة الأردن الملكية",
    category: "خرائط جغرافية",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "الأكثر طلباً 🇯🇴",
    shortDesc: "قطع البازل نفسها تتولّد بطريقة رياضية مبنية على الـ Fractals. لا يوجد طلبان متطابقان!",
    description: "خريطة الأردن الملكية بتصميم رياضي هندسي حصري. قطع البازل نفسها تتولّد بطريقة رياضية مبنية على مفهوم الـ Fractals، بحيث يحصل كل زبون على أنماط فريدة خاصة به ولا يوجد طلبان متطابقان في العالم! خامات صلبة مقاس 40 سم وليست كرتوناً أو ورقاً.",
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
    title: "بازل خريطة فلسطين التاريخية",
    category: "خرائط جغرافية",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "مميز 🇵🇸",
    shortDesc: "قطع البازل تتولّد بطريقة رياضية مبنية على الـ Fractals. أنماط فريدة لكل طلب.",
    description: "أحجية أصيلة تجسد خارطة فلسطين. تعتمد على توليد رياضي مبني على مفهوم الـ Fractals لتشكيل قطع فريدة لا تتكرر، مصنوعة من خامات صلبة غير قابلة للتلف. حصرياً في الأردن والشرق الأوسط ولا يوجد طلبان متطابقان.",
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
    title: "بازل شكل القلب الفني",
    category: "أشكال وتصاميم فنية",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "هدية فريدة ❤️",
    shortDesc: "قطع تتولّد بطريقة رياضية مبنية على الـ Fractals لتجربة وتحدٍ استثنائي.",
    description: "هدية مثالية مميزة. قطع البازل تتولّد بطريقة رياضية مبنية على مفهوم الـ Fractals لابتكار أنماط متداخلة لا تتكرر. خامات صلبة ومتينة تدوم لسنوات مقاس 40 سم.",
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
    title: "بازل النجمة الهندسية",
    category: "أشكال وتصاميم فنية",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "تحدي الـ Fractals ⭐",
    shortDesc: "نجمة متناظرة بقطع تتولّد رياضياً بنمط الـ Fractals لمتعة وتحدٍ غير مسبوق.",
    description: "تحدٍ بصري وذهني راقٍ للكبار ومحبي الألغاز. قطع البازل نفسها تتولّد بطريقة رياضية مبنية على مفهوم الـ Fractals لابتكار قطع هندسية مميزة، مقطوعة بدقة متناهية من خامات صلبة مقاس 40 سم.",
    image: "images/Shapes/star0005.png",
    gallery: [
      "images/Shapes/star0005.png",
      "images/Shapes/star0004.png",
      "images/Shapes/star0002.png",
      "images/Shapes/star0000.png"
    ]
  }
];

// توليد جميع الحروف الأبجدية الـ 26 (من A إلى Z) بنمط الـ Fractals
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const LETTER_PRODUCTS = ALPHABET.map((char, index) => ({
  id: 5 + index,
  title: `بازل الحروف — حرف ${char}`,
  category: "حروف بالاسم",
  price: 7,
  priceAcrylic: 10,
  dimensions: "المقاس 40 سم",
  badge: `حرف ${char} 🔤`,
  shortDesc: `حرف ${char} بقطع تتولّد بطريقة رياضية مبنية على الـ Fractals بأنماط فريدة خاصة بطلبك.`,
  description: `بازل شخصي لحرف (${char}). قطع البازل نفسها تتولّد بطريقة رياضية مبنية على مفهوم الـ Fractals لابتكار أنماط فريدة لكل زبون بحيث لا يوجد طلبان متطابقان، مع الحفاظ على الإطار الخارجي للحرف. خامات صلبة فاخرة مقاس 40 سم (خشب أو أكريليك).`,
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
