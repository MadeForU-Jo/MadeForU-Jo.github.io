// ==========================================
// MADEFORU JO - قائمة المنتجات والإعدادات
// مشغل نجارة حرفية وهدايا مخصصة — خشب زان طبيعي وحفر ليزر
// ==========================================

const STORE_CONFIG = {
  storeName: "MadeForU",
  storeTagline: "متجر ومشغل هدايا ومشغولات خشبية حرفية — تصاميم فريدة وحفر ليزر مخصص صُنعت بكل حب",
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

  // خيارات المواد الأساسية للبازل (خشب MDF صلب أو أكريليك)
  materials: [
    {
      id: "mdf",
      name: "خشب MDF صلب",
      priceOffset: 0,
      badge: "خشب MDF متين 🪵",
      desc: "خشب MDF صلب عالي الكثافة ومقاوم للكسر والتمزق، بلمسة ناعمة وأنيقة.",
      colors: [
        { id: "light-wood", name: "خشبي فاتح", hex: "#c89d7c" },
        { id: "dark-wood", name: "خشبي داكن", hex: "#5a3825" }
      ]
    },
    {
      id: "acrylic",
      name: "أكريليك عصري صلب",
      priceOffset: 3,
      badge: "أكريليك عصري 💎",
      desc: "أكريليك صلب متين بمظهر زجاجي لامع وأنيق.",
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
    id: "mfu-101",
    sku: "MFU-101",
    code: "101",
    slug: "mfu-101-desk-plate",
    aliases: ["101", "mfu-101", "desk-plate", "deskplate", "101-desk-plate", "desk-plate-101", "1"],
    title: "لوحة اسم مكتبية فاخرة — خشب زان طبيعي صلب (حفر ليزر مخصص للوجهين)",
    category: "لوحات مكتبية فاخرة 💼",
    price: 20,
    dimensions: "المقاس: 40 × 10 سم تقريباً • سماكة صلبة",
    badge: "الأكثر طلباً 💼",
    shortDesc: "لوحة اسم مكتبية مصنوعة من خشب الزان الطبيعي الصلب. احفر اسمك ووظيفتك وشعارك بالليزر، مع ميزة حفر رسالة أو إهداء خاص على الوجه الخلفي.",
    description: "لوحة اسم مكتبية راقية تضفي هيبة وفخامة استثنائية على أي مكتب! مصنوعة يدوياً من خشب الزان الطبيعي الصلب والمتين (مقاس 40 × 10 سم تقريباً). تتيح لك تخصيص كل التفاصيل بحفر ليزر دقيق وأنيق:\n\n• الوجه الأمامي: حفر الاسم، المسمى المهني أو التخصص، وشعار جهة العمل أو رمز المهنة (ميزان محاماة، شعار طبي، شعار شركة، شعار عسكري، أو صورة).\n• الوجه الخلفي: إمكانية حفر رسالة إهداء شخصية، دعاء، أو كلمة خاصة يراها صاحب المكتب وهو جالس خلف مكتبه.\n\n⚠️ سياسة تأكيد الطلب: نظراً لأن اللوحة تُفصّل خصيصاً بالاسم والبيانات، يُشترط تحويل عربون 10 دنانير على الأقل مسبقاً عبر كليك (CliQ) أو المحافظ الإلكترونية، ويدفع باقي الحساب عند الاستلام.\n📦 صندوق الإهداء اختياري بـ 3 دنانير فقط.",
    image: "images/DeskPlate/template.jpg",
    gallery: [
      "images/DeskPlate/template.jpg",
      "images/DeskPlate/deskplate2.jpg",
      "images/DeskPlate/dentist.jpg",
      "images/DeskPlate/police.jpg",
      "images/DeskPlate/deskplate1.jpg",
      "images/DeskPlate/backface.jpg",
      "images/DeskPlate/backface2.jpg"
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
    id: "mfu-201",
    sku: "MFU-201",
    code: "201",
    slug: "mfu-201-jordan-map",
    aliases: ["201", "mfu-201", "jordan-map", "jordan", "2"],
    title: "بازل خريطة الأردن الملكية الفاخرة — مقاس 40 سم",
    category: "أحاجي وبازل فنية 🧩",
    price: 7,
    dimensions: "المقاس 40 سم",
    badge: "الأكثر طلباً 🇯🇴",
    shortDesc: "قطعة فنية مميزة مقاس 40 سم من خشب MDF الصلب أو الأكريليك، تُصنع خصيصاً لك مع إمكانية حفر ليزر مخصص.",
    description: "خريطة الأردن الملكية بتصميم فني هندسي متقن. كل قطعة تُصنع بعناية وإتقان خصيصاً لك من خشب MDF الصلب المتين أو الأكريليك العصري الفاخر (مقاس 40 سم)، مع إمكانية إضافة حفر ليزر مخصص لاسمك أو إهدائك الخاص.",
    image: "images/Jordan Map Puzzle/Jordan Map render s0000.png",
    gallery: [
      "images/Jordan Map Puzzle/Jordan Map render s0000.png",
      "images/Jordan Map Puzzle/Jordan Map render s0001.png",
      "images/Jordan Map Puzzle/Jordan Map render0002.png",
      "images/Jordan Map Puzzle/Top.png"
    ]
  },
  {
    id: "mfu-202",
    sku: "MFU-202",
    code: "202",
    slug: "mfu-202-palestine-map",
    aliases: ["202", "mfu-202", "palestine-map", "palestine", "3"],
    title: "بازل خريطة فلسطين التاريخية — مقاس 40 سم",
    category: "أحاجي وبازل فنية 🧩",
    price: 7,
    dimensions: "المقاس 40 سم",
    badge: "مميز 🇵🇸",
    shortDesc: "قطعة تذكارية أصيلة تجسد خارطة فلسطين التاريخية من خشب MDF الصلب أو الأكريليك مقاس 40 سم.",
    description: "قطعة تذكارية أصيلة تجسد خارطة فلسطين التاريخية بجمال وتفاصيل هندسية دقيقة. مصنوعة من خشب MDF الصلب المتين أو الأكريليك العصري غير القابل للتلف (مقاس 40 سم)، وتُصنع خصيصاً لك مع إمكانية الحفر المخصص بالليزر.",
    image: "images/Palestine Map Puzzle/Palestine20003.png",
    gallery: [
      "images/Palestine Map Puzzle/Palestine20003.png",
      "images/Palestine Map Puzzle/Palestine20002.png",
      "images/Palestine Map Puzzle/Palestine20001.png",
      "images/Palestine Map Puzzle/Palestine20000.png"
    ]
  },
  {
    id: "mfu-203",
    sku: "MFU-203",
    code: "203",
    slug: "mfu-203-heart-puzzle",
    aliases: ["203", "mfu-203", "heart-puzzle", "heart", "4"],
    title: "بازل شكل القلب الفني الإهدائي — مقاس 40 سم",
    category: "أحاجي وبازل فنية 🧩",
    price: 7,
    dimensions: "المقاس 40 سم",
    badge: "هدية فريدة ❤️",
    shortDesc: "هدية استثنائية لمن تحب بتصميم القلب الفني، خشب MDF صلب أو أكريليك مقاس 40 سم مع إمكانية حفر إهداء خاص.",
    description: "هدية مثالية مميزة للمناسبات والأحباب. تصميم فني متداخل يجمع بين الأناقة والمتانة، مصنوع من خشب MDF الصلب أو الأكريليك بمقاس 40 سم يدوم لسنوات، مع إمكانية حفر عبارة إهداء خاصة بالليزر.",
    image: "images/Shapes/heart0005.png",
    gallery: [
      "images/Shapes/heart0005.png",
      "images/Shapes/heart0004.png",
      "images/Shapes/heart0002.png",
      "images/Shapes/heart0000.png"
    ]
  },
  {
    id: "mfu-204",
    sku: "MFU-204",
    code: "204",
    slug: "mfu-204-star-puzzle",
    aliases: ["204", "mfu-204", "star-puzzle", "star", "5"],
    title: "بازل النجمة الهندسية الفاخرة — مقاس 40 سم",
    category: "أحاجي وبازل فنية 🧩",
    price: 7,
    dimensions: "المقاس 40 سم",
    badge: "تصميم هندسي ⭐",
    shortDesc: "نجمة هندسية متناظرة بتصميم راقٍ من خشب MDF الصلب أو الأكريليك، مقطوعة بدقة ليزر مقاس 40 سم.",
    description: "تحفة هندسية متناظرة راقية للديكور والإهداء. مقطوعة بدقة متناهية من خشب MDF الصلب المتين أو الأكريليك العصري مقاس 40 سم، تُصنع وتُجهّز خصيصاً لك من مشغل MadeForU.",
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
