// ==========================================
// PUZZLEME JO - قائمة المنتجات الكاملة
// يشمل جميع الحروف الأبجدية من A إلى Z (104 زاوية)
// خيارات الخامات: خشب MDF صلب (7 د.أ) • أكريليك صلب فاخر (10 د.أ)
// ==========================================

const STORE_CONFIG = {
  storeName: "PuzzleMe JO",
  storeTagline: "أحاجي وبازل خشبية وأكريليك فريدة — قصة حصرية لكل طلب",
  currency: "د.أ",
  deliveryAmman: 1.0,      // أجرة التوصيل داخل عمان: 1 دينار
  deliveryOutside: 2.0,    // أجرة التوصيل خارج عمان (باقي المحافظات): 2 دينار
  whatsappNumber: "962789423717",
  logo: "images/Logo/puzzleme logo.png",

  // خيارات المواد والألوان والأسعار
  materials: [
    {
      id: "mdf",
      name: "خشب MDF صلب (5 ملم)",
      price: 7,
      badge: "الأكثر طلباً 🪵",
      desc: "خشب MDF صلب عالي الكثافة بسماكة 5 ملم، متين ومقاوم للكسر والتمزق.",
      colors: [
        { id: "light-wood", name: "خشب فاتح", hex: "#c89d7c" },
        { id: "dark-wood", name: "خشب داكن", hex: "#5a3825" },
        { id: "black-wood", name: "أسود نقي", hex: "#1f1f1f" },
        { id: "white-wood", name: "أبيض نقي", hex: "#ffffff", border: "#ccc" }
      ]
    },
    {
      id: "acrylic",
      name: "أكريليك صلب فاخر (Acrylic)",
      price: 10,
      badge: "مظهر زجاجي عصري 💎",
      desc: "مادة أكريليك صلبة وفاخرة بلمعان جذاب ومقاومة عالية، لمظهر ديكوري مودرن.",
      colors: [
        { id: "clear", name: "شفاف كريستال", hex: "linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #bae6fd 100%)", border: "#93c5fd" },
        { id: "white-acrylic", name: "أبيض ملكي", hex: "#ffffff", border: "#bbb" },
        { id: "black-acrylic", name: "أسود فاخر لامع", hex: "#0a0a0a" }
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
    dimensions: "الطول 40 سم",
    badge: "الأكثر طلباً 🇯🇴",
    shortDesc: "خريطة الأردن بتصميم ثلاثي الأبعاد مقصوص بدقة متناهية. كل قطعة بقصة فريدة لا تتكرر!",
    description: "أحجية خريطة المملكة الأردنية الهاشمية متوفرة بخشب MDF صلب بسماكة 5 ملم أو مادة الأكريليك الصلبة الفاخرة. تدوم لسنوات طويلة دون اهتراء أو تمزق. يتميز كل بازل بنمط تقطيع هندسي داخلي فريد وخاص بكل طلب، مع الحفاظ على الإطار الجغرافي الخارجي المتقن.",
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
    dimensions: "الطول 40 سم",
    badge: "مميز 🇵🇸",
    shortDesc: "خارطة فلسطين من النهر إلى البحر بنقوش عميقة وقطع متداخلة فريدة لكل طلب.",
    description: "تحفة فنية تروي قصة الأرض والهوية. متوفرة بخشب MDF صلب 5 ملم عالي الكثافة أو مادة الأكريليك الفاخرة ليمنحك صلابة استثنائية ولمسة فنية أصيلة عند التركيب. مثالية للعرض كلوحة جدارية أو إهدائها كرمز خالد.",
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
    title: "بازل شكل القلب الرومانسي",
    category: "أشكال وتصاميم فنية",
    price: 7,
    priceAcrylic: 10,
    dimensions: "العرض 40 سم",
    badge: "هدية مميزة ❤️",
    shortDesc: "بازل فني على شكل قلب بقطع متداخلة معقدة وفريدة تجعل تركيبها تجربة لا تُنسى.",
    description: "هدية استثنائية للأحباب والأصدقاء. قلب متقن الصنع بمقاس 40 سم متوفر بخشب MDF صلب أو أكريليك فاخر بمختلف الألوان. كل طلب يحصل على نمط قَص عشوائي فريد تماماً داخل القلب بحيث لا يوجد قلب مطابق لقلب آخر على الإطلاق!",
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
    title: "بازل النجمة الذهبية الفنية",
    category: "أشكال وتصاميم فنية",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "تحدي هندسي ⭐",
    shortDesc: "نجمة متناظرة بقطع معقدة تجمع بين الهندسة الدقيقة ومتعة التفكير البصري.",
    description: "تحدٍ ذهني أنيق بتصميم نجمة خماسية الأبعاد متوفرة بخشب MDF صلب 5 ملم أو أكريليك صلب. قطعها ذات ملمس ناعم وحواف مقطوعة بالليزر بدقة فائقة لتركيب سلس يدوم لأجيال.",
    image: "images/Shapes/star0005.png",
    gallery: [
      "images/Shapes/star0005.png",
      "images/Shapes/star0004.png",
      "images/Shapes/star0002.png",
      "images/Shapes/star0000.png"
    ]
  }
];

// توليد جميع الحروف الأبجدية الـ 26 (من A إلى Z) تلقائياً
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const LETTER_PRODUCTS = ALPHABET.map((char, index) => ({
  id: 5 + index,
  title: `بازل الحروف المخصصة — حرف ${char}`,
  category: "حروف بالاسم",
  price: 7,
  priceAcrylic: 10,
  dimensions: "الارتفاع 40 سم",
  badge: `حرف ${char} 🔤`,
  shortDesc: `حرف ${char} بارتفاع 40 سم. نمط القطع الداخلي فريد وحصري لكل طلب.`,
  description: `بازل الحرف الشخصي (${char}) بمقاس كبير 40 سم. متوفر بخيارين: خشب MDF صلب 5 ملم (7 د.أ) أو أكريليك صلب فاخر (10 د.أ) بمختلف الألوان الفاتحة والداكنة. كل حرف مقصوص بنمط ليزر فريد لا يتكرر أبداً.`,
  image: `images/Letters/${char}0003.png`,
  gallery: [
    `images/Letters/${char}0003.png`,
    `images/Letters/${char}0002.png`,
    `images/Letters/${char}0001.png`,
    `images/Letters/${char}0000.png`
  ]
}));

// دمج كافة المنتجات في قائمة موحدة (إجمالي 30 منتجاً)
const PRODUCTS = [...BASE_PRODUCTS, ...LETTER_PRODUCTS];
