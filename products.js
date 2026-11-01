// ==========================================
// PUZZLEME JO - قائمة المنتجات والإعدادات
// تقنية بازل الفركتال الهندسي (Fractal Puzzles)
// قطع فريدة لكل زبون • خامات صلبة (خشب وأكريليك) وليست ورقية
// ==========================================

const STORE_CONFIG = {
  storeName: "PuzzleMe JO",
  storeTagline: "أحاجي وبازل الفركتال الهندسية — نمط فريد لا يتكرر لكل زبون",
  currency: "د.أ",
  deliveryAmman: 1.0,      // أجرة التوصيل داخل عمان: 1 دينار
  deliveryOutside: 2.0,    // أجرة التوصيل خارج عمان (باقي المحافظات): 2 دينار
  whatsappNumber: "962789423717",
  logo: "images/Logo/puzzleme logo.png",
  appUrl: "https://play.google.com/store/apps/details?id=com.ZaytuneGames.Puzzleme&hl=en",

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
    title: "بازل فركتال خريطة الأردن الملكية",
    category: "خرائط جغرافية",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "الأكثر طلباً 🇯🇴",
    shortDesc: "أحجية فركتال خشبية بقطع هندسية متشابكة فريدة. كل طلب يُقص بنمط لا يتكرر أبداً!",
    description: "خريطة الأردن بتصميم الفركتال الهندسي المبتكر. ليست بازل ورقية عادية، بل قطعة صلبة وفاخرة تتداخل منحنياتها الفركتالية بانسيابية متناهية. كل قطعة بازل يتم توليد نمط تقطيعها عشوائياً لكل طلب ليحصل كل زبون على بازل فريد خاص به وحده.",
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
    title: "بازل فركتال خريطة فلسطين التاريخية",
    category: "خرائط جغرافية",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "مميز 🇵🇸",
    shortDesc: "خارطة فلسطين بتصميم الفركتال المستمر. خامات صلبة ومتينة بنمط قَص حصري.",
    description: "أحجية فركتال خالدة تجسد خارطة فلسطين. تعتمد على خطوط ومنحنيات فركتالية دقيقة لا تنتهي، ومصنوعة من خامات صلبة غير قابلة للتمزق أو الاهتراء. نمط تقطيع حصري لا يتطابق فيه أي بازلان في العالم.",
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
    title: "بازل فركتال شكل القلب الفني",
    category: "أشكال وتصاميم فنية",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "هدية فريدة ❤️",
    shortDesc: "قلب بتعقيدات الفركتال الهندسية. تجربة تركيب ممتعة وتحدٍ ذهني استثنائي.",
    description: "هدية مثالية للتعبير عن المشاعر بأسلوب مبتكر. تعتمد على خوارزمية الفركتال لتوليد قطع هندسية متداخلة مستمرة. خامات صلبة ومتينة بألوان نقية تدوم لسنوات.",
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
    title: "بازل فركتال النجمة الهندسية",
    category: "أشكال وتصاميم فنية",
    price: 7,
    priceAcrylic: 10,
    dimensions: "المقاس 40 سم",
    badge: "تحدي الفركتال ⭐",
    shortDesc: "نجمة متناظرة بتشعبات فركتالية ذكية تجمع بين الجمالية ومتعة التركيب.",
    description: "تحدٍ بصري وذهني راقٍ للكبار ومحبي الألغاز. تصميم هندسي يستغل تكرار الأشكال الفركتالية لتشكيل قطع غير تقليدية، مقطوعة بدقة متناهية من خامات صلبة.",
    image: "images/Shapes/star0005.png",
    gallery: [
      "images/Shapes/star0005.png",
      "images/Shapes/star0004.png",
      "images/Shapes/star0002.png",
      "images/Shapes/star0000.png"
    ]
  }
];

// توليد جميع الحروف الأبجدية الـ 26 (من A إلى Z) بنمط الفركتال
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const LETTER_PRODUCTS = ALPHABET.map((char, index) => ({
  id: 5 + index,
  title: `بازل فركتال الحروف — حرف ${char}`,
  category: "حروف بالاسم",
  price: 7,
  priceAcrylic: 10,
  dimensions: "المقاس 40 سم",
  badge: `حرف ${char} 🔤`,
  shortDesc: `حرف ${char} بنمط فركتال هندسي فريد خاص بطلبك، مقطوع من خامات صلبة فاخرة.`,
  description: `بازل شخصي لحرف (${char}) بتصميم الفركتال الهندسي المستمر. ليس ورقة أو كرتوناً عادياً، بل قطعة صلبة مقاس 40 سم بنمط تقطيع فريد تماماً لكل زبون، مع الحفاظ على الإطار الخارجي للحرف. متوفر بخيارات خشب صلب أو أكريليك صلب.`,
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
