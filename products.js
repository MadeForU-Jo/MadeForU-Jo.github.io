// ==========================================
// MADEFORU JO - قائمة المنتجات والإعدادات
// مشغل نجارة حرفية وهدايا مخصصة — خشب زان طبيعي وحفر ليزر CO2
// ==========================================

const STORE_CONFIG = {
  storeName: "MadeForU",
  storeTagline: "مشغل نجارة حرفية وهدايا مخصصة — لوحات مكتبية خشب زان طبيعي صلب وأحاجي فنية مع حفر ليزر CO2 مخصص",
  currency: "د.أ",
  deliveryAmman: 1.0,      // أجرة التوصيل داخل عمان: 1 دينار
  deliveryOutside: 2.0,    // أجرة التوصيل خارج عمان (باقي المحافظات): 2 دينار
  whatsappNumber: "962789423717",
  logo: "images/MadeForU Logo Trans.png",
  favicon: "images/MadeForU Logo.png",
  instagramUrl: "https://www.instagram.com/madeforu.jo/",
  facebookUrl: "https://www.facebook.com/madeforu.jo1",

  // رسم صندوق الإهداء الفاخر
  boxFee: 3.0,

  // رسم حفر الليزر العادي للبازل
  engravingFee: 3.0,

  // خيارات المواد الأساسية
  materials: [
    {
      id: "beech-wood",
      name: "خشب زان طبيعي صلب",
      priceOffset: 0,
      badge: "خشب زان طبيعي 100% 🪵",
      desc: "خشب زان طبيعي صلب وسميك، مشغول يدوياً بمتانة عالية وتشطيب ناعم وأنيق.",
      colors: [
        { id: "natural-beech", name: "زان طبيعي أصيل", hex: "#d8a878" }
      ]
    },
    {
      id: "acrylic",
      name: "أكريليك عصري صلب",
      priceOffset: 3,
      badge: "عصري 💎",
      desc: "أكريليك صلب متين بمظهر زجاجي أنيق (متوفر للبازل).",
      colors: [
        { id: "clear-glass", name: "شفاف كريستالي", hex: "linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #bae6fd 100%)", border: "#93c5fd" },
        { id: "gloss-black", name: "أسود لامع", hex: "#0a0a0a" },
        { id: "gloss-white", name: "أبيض ناصع", hex: "#ffffff", border: "#bbb" }
      ]
    }
  ]
};

// ==========================================
// 1. لوحات وآرمات مكتبية فاخرة (Custom Desk Name Plates)
// ==========================================
const DESK_PRODUCTS = [
  {
    id: 1,
    title: "لوحة اسم مكتبية فاخرة — خشب زان طبيعي صلب (حفر ليزر مخصص للوجهين)",
    category: "لوحات مكتبية فاخرة 💼",
    price: 12,
    dimensions: "المقاس: 40 × 10 سم تقريباً • سماكة صلبة",
    badge: "الأكثر طلباً 💼",
    shortDesc: "لوحة اسم مكتبية مصنوعة من خشب الزان الطبيعي الصلب والسميك. تخصيص كامل للاسم، الوظيفة، الشعار، وإمكانية حفر رسالة إهداء خاصة على الوجه الخلفي.",
    description: "لوحة اسم مكتبية فاخرة تضفي هيبة وفخامة استثنائية على أي مكتب! مصنوعة يدوياً من خشب الزان الطبيعي الصلب والسميك (approx 40x10 cm). تتيح لك حرية التخصيص الكاملة بماكينة ليزر CO2 فائقة الدقة:\n\n• الوجه الأمامي: حفر الاسم ببنط عريض، المسمى الوظيفي أو التخصص، وشعار شركتك أو رمز مهنتك (ميزان محاماة، شعار طبي، شعار شركة، شعار عسكري، أو صورة مخصصة).\n• الوجه الخلفي: ميزة استثنائية لحفر رسالة إهداء شخصية أو دعاء وتاريخ يراه الشخص وهو جالس خلف المكتب.\n\n⚠️ سياسة الطلب والتصنيع: نظراً لأن اللوحة تُصنع خصيصاً بالاسم والبيانات، يُشترط تحويل نصف المبلغ (50% على الأقل) كعربون مسبق عبر CliQ أو المحافظ الإلكترونية، بينما يُدفع الباقي وأجرة التوصيل كاش عند الاستلام.\n📦 الصندوق الفاخر غير مشمول تلقائياً، ويمكن إضافته كخيار (+3 دنانير).",
    image: "images/DeskPlate/template.jpg",
    gallery: [
      "images/DeskPlate/template.jpg",
      "images/DeskPlate/deskplate2.jpg",
      "images/DeskPlate/deskplate3.jpg",
      "images/DeskPlate/deskplate1.jpg"
    ],
    isDeskPlate: true,
    hasBackEngraving: true,
    boxFee: 3.0
  }
];

// ==========================================
// 2. أحاجي وبازل فنية (Artistic Puzzles)
// ==========================================
const PUZZLE_PRODUCTS = [
  {
    id: 2,
    title: "بازل خريطة الأردن الملكية الفاخرة — مقاس 40 سم",
    category: "أحاجي وبازل فنية 🧩",
    price: 7,
    dimensions: "المقاس 40 سم",
    badge: "الأكثر طلباً 🇯🇴",
    shortDesc: "قطعة فنية مميزة مقاس 40 سم من الخشب الصلب أو الأكريليك، تُصنع خصيصاً لك مع إمكانية حفر ليزر مخصص.",
    description: "خريطة الأردن الملكية بتصميم فني هندسي متقن. كل قطعة تُصنع بعناية وإتقان خصيصاً لك من خامات صلبة فاخرة مقاس 40 سم (خشب صلب متين أو أكريليك عصري)، مع إمكانية إضافة حفر ليزر مخصص لاسمك أو إهدائك الخاص.",
    image: "images/Jordan Map Puzzle/Jordan Map render s0000.png",
    gallery: [
      "images/Jordan Map Puzzle/Jordan Map render s0000.png",
      "images/Jordan Map Puzzle/Jordan Map render s0001.png",
      "images/Jordan Map Puzzle/Jordan Map render0002.png",
      "images/Jordan Map Puzzle/Top.png"
    ]
  },
  {
    id: 3,
    title: "بازل خريطة فلسطين التاريخية — مقاس 40 سم",
    category: "أحاجي وبازل فنية 🧩",
    price: 7,
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
    id: 4,
    title: "بازل شكل القلب الفني الإهدائي — مقاس 40 سم",
    category: "أحاجي وبازل فنية 🧩",
    price: 7,
    dimensions: "المقاس 40 سم",
    badge: "هدية فريدة ❤️",
    shortDesc: "هدية استثنائية لمن تحب بتصميم القلب الفني، خامات صلبة مقاس 40 سم مع إمكانية حفر إهداء خاص.",
    description: "هدية مثالية مميزة للمناسبات والأحباب. تصميم فني متداخل يجمع بين الأناقة والمتانة، مصنوع من خشب صلب أو أكريليك بمقاس 40 سم يدوم لسنوات، مع إمكانية حفر عبارة إهداء خاصة.",
    image: "images/Shapes/heart0005.png",
    gallery: [
      "images/Shapes/heart0005.png",
      "images/Shapes/heart0004.png",
      "images/Shapes/heart0002.png",
      "images/Shapes/heart0000.png"
    ]
  },
  {
    id: 5,
    title: "بازل النجمة الهندسية الفاخرة — مقاس 40 سم",
    category: "أحاجي وبازل فنية 🧩",
    price: 7,
    dimensions: "المقاس 40 سم",
    badge: "تصميم هندسي ⭐",
    shortDesc: "نجمة هندسية متناظرة بتصميم راقٍ، مقطوعة بدقة ليزر متناهية مقاس 40 سم.",
    description: "تحفة هندسية متناظرة راقية للديكور والإهداء. مقطوعة بدقة متناهية من خامات صلبة متينة مقاس 40 سم، تُصنع وتُجهّز خصيصاً لك من مشغل MadeForU.",
    image: "images/Shapes/star0005.png",
    gallery: [
      "images/Shapes/star0005.png",
      "images/Shapes/star0004.png",
      "images/Shapes/star0002.png",
      "images/Shapes/star0000.png"
    ]
  }
];

// دمج المنتجات: اللوحات المكتبية والبازل
const PRODUCTS = [...DESK_PRODUCTS, ...PUZZLE_PRODUCTS];
