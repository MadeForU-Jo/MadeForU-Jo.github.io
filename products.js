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
      priceOffset: 4,
      badge: "أكريليك عصري 💎",
      desc: "أكريليك صلب متين بمظهر زجاجي أنيق.",
      colors: [
        { id: "clear", name: "شفاف", hex: "linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #bae6fd 100%)", border: "#93c5fd" },
        { id: "black", name: "أسود", hex: "#0a0a0a" },
        { id: "white", name: "أبيض", hex: "#ffffff", border: "#bbb" }
      ]
    }
  ]
};

// ==========================================
// 1. أقسام المتجر الرئيسية (Store Categories)
// ==========================================
const STORE_CATEGORIES = [
  {
    id: "trays",
    name: "صواني خشبية وريزن",
    fullName: "صواني خشبية وريزن ☕",
    icon: "☕",
    page: "trays.html",
    tagline: "صواني تقديم يدوية بحبوب القهوة والريزن وتفريغ البرق الكهربائي",
    badge: "جديد وحصري ✨",
    image: "images/Wood Trays/resin Coffee Bean Wood Tray 18JD/1.jpg",
    itemCount: 4
  },
  {
    id: "pendants",
    name: "قلائد وسلاسل ريزن",
    fullName: "قلائد وسلاسل ريزن 💎",
    icon: "💎",
    page: "pendants.html",
    tagline: "مجوهرات فنية فريدة مدمجة بالخشب الطبيعي والريزن الملكي المصقول",
    badge: "إصدار يدوي 💎",
    image: "images/Pendants/Black Resin Pendant 20JD/1.jpg",
    itemCount: 2
  },
  {
    id: "desk-plates",
    name: "لوحات مكتبية فاخرة",
    fullName: "لوحات مكتبية فاخرة 💼",
    icon: "💼",
    page: "desk-plates.html",
    tagline: "خشب زان طبيعي صلب وحفر ليزر مخصص للاسم والمنصب والشعار والإهداء",
    badge: "الأكثر طلباً 💼",
    image: "images/DeskPlate/deskplate2.jpg",
    itemCount: 1
  },
  {
    id: "puzzles",
    name: "أحاجي وبازل فنية",
    fullName: "أحاجي وبازل فنية 🧩",
    icon: "🧩",
    page: "puzzles.html",
    tagline: "خرائط الأردن وفلسطين وأشكال هندسية راقية من MDF والأكريليك مع حفر ليزر",
    badge: "ديكور وإهداء 🇯🇴",
    image: "images/Jordan Map Puzzle/Jordan Map render s0000.png",
    itemCount: 4
  }
];

// ==========================================
// 2. لوحات وآرمات مكتبية فاخرة (Custom Desk Name Plates)
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
    categorySlug: "desk-plates",
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
    materialInfo: "خشب زان طبيعي صلب (40×10 سم)",
    isDeskPlate: true,
    hasBackEngraving: true,
    boxFee: 3.0,
    featured: true
  }
];

// ==========================================
// 3. صواني تقديم خشبية فاخرة وريزن (Handmade Wooden & Resin Trays)
// ==========================================
const TRAY_PRODUCTS = [
  {
    id: "mfu-401",
    sku: "MFU-401",
    code: "401",
    slug: "mfu-401-lightning-wood-tray",
    aliases: ["401", "mfu-401", "lightning-wood-tray", "lightning-tray", "401-lightning-tray"],
    title: "صينية خشب طبيعي بتقنية التفريغ الكهربائي (Lightning Wood Tray)",
    category: "صواني خشبية وريزن ☕",
    categorySlug: "trays",
    price: 15,
    dimensions: "صناعة يدوية متقنة • خشب طبيعي معالج بمقابض متينة",
    badge: "تصميم البرق الفريد ⚡",
    shortDesc: "صينية تقديم خشبية يدوية بنقوش البرق الطبيعية بتقنية التفريغ الكهربائي ومقابض متينة لضيافة استثنائية.",
    description: "صينية تقديم خشبية فاخرة مشغولة يدوياً بنقوش البرق الكهربائي الطبيعية (Lichtenberg Fractal Figures). كل قطعة تتميز بنقوش خشبية فريدة يستحيل تكرارها، مدهونة ومحمية بأجود أنواع الزيوت والورنيش المقاوم للحرارة والرطوبة، ومزودة بمقابض معدنية أنيقة لحمل سهل وتقديم راقٍ في مناسباتك وضيافتك اليومية.\n\n✨ إمكانية إضافة حفر ليزر مخصص للاسم أو الإهداء اختياري بـ 3 دنانير فقط.",
    image: "images/Wood Trays/Lightning Wood tray 15JD/1.jpg",
    gallery: [
      "images/Wood Trays/Lightning Wood tray 15JD/1.jpg",
      "images/Wood Trays/Lightning Wood tray 15JD/2.jpg",
      "images/Wood Trays/Lightning Wood tray 15JD/3.jpg",
      "images/Wood Trays/Lightning Wood tray 15JD/4.jpg"
    ],
    materialInfo: "خشب طبيعي صلب معالج ومحمي ضد الحرارة والرطوبة",
    isTray: true,
    hasLaserOption: true,
    featured: false
  },
  {
    id: "mfu-402",
    sku: "MFU-402",
    code: "402",
    slug: "mfu-402-coffee-bean-resin-tray",
    aliases: ["402", "mfu-402", "coffee-bean-tray", "resin-coffee-bean-tray", "402-coffee-bean-tray"],
    title: "صينية قهوة خشبية فاخرة بحبوب البن الطبيعية وريزن الإيبوكسي الشفاف",
    category: "صواني خشبية وريزن ☕",
    categorySlug: "trays",
    price: 18,
    dimensions: "صناعة يدوية متقنة • خشب طبيعي وريزن إيبوكسي صلب",
    badge: "عشاق القهوة ☕",
    shortDesc: "صينية تقديم ملكية مرصعة بحبوب بن طبيعية حقيقية مغمورة بطبقة ريزن إيبوكسي شفاف كريستالي فائق المتانة.",
    description: "القطعة المثالية لعشاق القهوة وركن الكوفي (Coffee Corner)! صينية تقديم خشبية يدوية الصنع تجمع بين ديمومة الخشب الطبيعي وجمال حبوب القهوة الحقيقية المصبوبة بعناية تحت طبقة ريزن إيبوكسي شفاف زجاجي لامع ومقاوم للخدش والحرارة. مقابض معدنية عصرية متينة لإضفاء فخامة استثنائية على طقوس قهوتك اليومية.\n\n✨ إمكانية إضافة حفر ليزر مخصص اختياري بـ 3 دنانير فقط.",
    image: "images/Wood Trays/resin Coffee Bean Wood Tray 18JD/1.jpg",
    gallery: [
      "images/Wood Trays/resin Coffee Bean Wood Tray 18JD/1.jpg",
      "images/Wood Trays/resin Coffee Bean Wood Tray 18JD/2.jpg",
      "images/Wood Trays/resin Coffee Bean Wood Tray 18JD/3.jpg",
      "images/Wood Trays/resin Coffee Bean Wood Tray 18JD/4.jpg",
      "images/Wood Trays/resin Coffee Bean Wood Tray 18JD/5.jpg"
    ],
    materialInfo: "خشب طبيعي وحبوب بن أصلية مع ريزن إيبوكسي صلب",
    isTray: true,
    hasLaserOption: true,
    featured: true
  },
  {
    id: "mfu-403",
    sku: "MFU-403",
    code: "403",
    slug: "mfu-403-resin-coffee-wood-tray",
    aliases: ["403", "mfu-403", "resin-coffee-tray", "403-resin-coffee-tray"],
    title: "صينية خشب وريزن بتصميم ركن القهوة والضيافة الفاخرة",
    category: "صواني خشبية وريزن ☕",
    categorySlug: "trays",
    price: 15,
    dimensions: "صناعة يدوية متقنة • خشب طبيعي وريزن",
    badge: "ضيافة مميزة ✨",
    shortDesc: "صينية تقديم خشبية بحرفية يدوية وتطعيم ريزن أنيق مخصصة لتقديم القهوة والشاي والمشروبات الدافئة.",
    description: "صينية ضيافة خشبية أنيقة مصنوعة يدوياً بتشطيب عالي الجودة ومطعمة بلمسات ريزن فنية ساحرة. مثالية لتقديم القهوة والشاي في الجلسات العائلية والمناسبات وتزيين طاولات الضيافة وركن القهوة. مزودة بمقابض متينة ومقاومة للحرارة والرطوبة لتدوم طويلاً.\n\n✨ إمكانية إضافة حفر ليزر مخصص اختياري بـ 3 دنانير فقط.",
    image: "images/Wood Trays/Resin Coffee Wood tray 15JD/c1.jpg",
    gallery: [
      "images/Wood Trays/Resin Coffee Wood tray 15JD/c1.jpg",
      "images/Wood Trays/Resin Coffee Wood tray 15JD/c2.jpg",
      "images/Wood Trays/Resin Coffee Wood tray 15JD/c3.jpg",
      "images/Wood Trays/Resin Coffee Wood tray 15JD/c4.jpg"
    ],
    materialInfo: "خشب طبيعي مصقول وريزن إيبوكسي متين",
    isTray: true,
    hasLaserOption: true,
    featured: false
  },
  {
    id: "mfu-404",
    sku: "MFU-404",
    code: "404",
    slug: "mfu-404-roses-wood-tray",
    aliases: ["404", "mfu-404", "roses-tray", "roses-wood-tray", "404-roses-tray"],
    title: "صينية خشب طبيعي بنقوش الورود والأزهار بحفر ليزر متقن",
    category: "صواني خشبية وريزن ☕",
    categorySlug: "trays",
    price: 15,
    dimensions: "صناعة يدوية متقنة • خشب طبيعي بمقابض ذهبية",
    badge: "حفر ليزر فني 🌹",
    shortDesc: "صينية تقديم خشبية راقية مزينة بزخارف الورود والأزهار المحفورة بالليزر بدقة متناهية مع مقابض ذهبية فخمة.",
    description: "تحفة فنية تجمع بين أصالة الخشب الطبيعي وجمال نقوش الورود المحفورة بالليزر بدقة فائقة. مطلية بطبقات حماية عازلة للحرارة والرطوبة ومزودة بمقابض أنيقة باللون الذهبي الراقي، لتكون قطعة ضيافة وهدية منزلية فاخرة تعبر عن الذوق الرفيع.\n\n✨ إمكانية إضافة حفر ليزر مخصص للاسم أو الإهداء اختياري بـ 3 دنانير فقط.",
    image: "images/Wood Trays/Roses Wood Tray Laser Engraved 15JD/1.jpg",
    gallery: [
      "images/Wood Trays/Roses Wood Tray Laser Engraved 15JD/1.jpg",
      "images/Wood Trays/Roses Wood Tray Laser Engraved 15JD/2.jpg",
      "images/Wood Trays/Roses Wood Tray Laser Engraved 15JD/3.jpg",
      "images/Wood Trays/Roses Wood Tray Laser Engraved 15JD/4.jpg"
    ],
    materialInfo: "خشب طبيعي صلب بحفر ليزر ومقابض معدنية ذهبية",
    isTray: true,
    hasLaserOption: true,
    featured: false
  }
];

// ==========================================
// 4. قلائد وسلاسل ريزن وخشب طبيعي (Resin & Wood Pendants)
// ==========================================
const PENDANT_PRODUCTS = [
  {
    id: "mfu-501",
    sku: "MFU-501",
    code: "501",
    slug: "mfu-501-black-resin-pendant",
    aliases: ["501", "mfu-501", "black-resin-pendant", "black-pendant", "501-black-pendant"],
    title: "قلادة فنية يدوية من خشب البورل والريزن الأسود الملكي مع حبل جلدي أنيق",
    category: "قلائد وسلاسل ريزن 💎",
    categorySlug: "pendants",
    price: 20,
    dimensions: "قطعة يدوية فريدة • ريزن وخشب طبيعي صلب بحبل جلدي مريح",
    badge: "قطعة فريدة لا تتكرر 🖤",
    shortDesc: "قلادة ساحرة مصنوعة يدوياً من تداخل الخشب الطبيعي والريزن الأسود الملكي الشفاف مع حبل جلدي متين وقابل للتعديل.",
    description: "كل قطعة من هذه القلائد هي تحفة فنية فريدة بنسبة 100% لا يمكن تكرار شكلها أبداً! مشغولة يدوياً من اندماج الخشب الطبيعي الصلب مع ريزن الإيبوكسي الأسود الملكي المصقول بدقة فائقة إلى أقصى درجات اللمعان والنعومة كالأحجار الكريمة. تأتي مع حبل جلدي أسود أنيق ومريح في الارتداء، لتكون هدية استثنائية راقية تعبر عن التفرد والتميز.\n\n📦 علبة إهداء فاخرة اختيارية بـ 3 دنانير فقط.",
    image: "images/Pendants/Black Resin Pendant 20JD/1.jpg",
    gallery: [
      "images/Pendants/Black Resin Pendant 20JD/1.jpg",
      "images/Pendants/Black Resin Pendant 20JD/2.jpg",
      "images/Pendants/Black Resin Pendant 20JD/3.jpg",
      "images/Pendants/Black Resin Pendant 20JD/4.jpg",
      "images/Pendants/Black Resin Pendant 20JD/5.jpg"
    ],
    materialInfo: "خشب طبيعي صلب وريزن إيبوكسي مصقول كالأحجار الكريمة",
    isPendant: true,
    hasBoxOption: true,
    boxFee: 3.0,
    featured: true
  },
  {
    id: "mfu-502",
    sku: "MFU-502",
    code: "502",
    slug: "mfu-502-blue-resin-pendant",
    aliases: ["502", "mfu-502", "blue-resin-pendant", "blue-pendant", "502-blue-pendant"],
    title: "قلادة فنية يدوية من خشب الطبيعي والريزن الأزرق المحيطي الكريستالي",
    category: "قلائد وسلاسل ريزن 💎",
    categorySlug: "pendants",
    price: 20,
    dimensions: "قطعة يدوية فريدة • ريزن وخشب طبيعي بحبل جلدي أنيق",
    badge: "زرقة المحيط 💙",
    shortDesc: "قلادة فنية يدوية الصنع تجمع بين دفء الخشب وأمواج الريزن الأزرق المحيطي الساحر مع حبل جلدي أنيق.",
    description: "قطعة مجوهرات فنية مصنوعة يدوياً بحرفية استثنائية! تجمع بين تشكيلات عروق الخشب الطبيعي وتدرجات زرقة المحيط الساحرة في ريزن كريستالي مصقول كالألماس. خفيفة ومريحة، وتأتي مع حبل جلدي أنيق، لتكون هدية ذات طابع شخصي وفني لا مثيل له.\n\n📦 علبة إهداء فاخرة اختيارية بـ 3 دنانير فقط.",
    image: "images/Pendants/Blue Resin Pendant 20JD/1.jpg",
    gallery: [
      "images/Pendants/Blue Resin Pendant 20JD/1.jpg",
      "images/Pendants/Blue Resin Pendant 20JD/2.jpg",
      "images/Pendants/Blue Resin Pendant 20JD/3.jpg"
    ],
    materialInfo: "خشب طبيعي صلب وريزن إيبوكسي أزرق كريستالي",
    isPendant: true,
    hasBoxOption: true,
    boxFee: 3.0,
    featured: false
  }
];

// ==========================================
// 5. أحاجي وبازل فنية (Artistic Puzzles)
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
    price: 8,
    dimensions: "المقاس 40 سم",
    badge: "الأكثر طلباً 🇯🇴",
    categorySlug: "puzzles",
    isPuzzle: true,
    featured: true,
    materialInfo: "خشب MDF صلب أو أكريليك عصري",
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
    categorySlug: "puzzles",
    isPuzzle: true,
    price: 8,
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
    categorySlug: "puzzles",
    isPuzzle: true,
    price: 8,
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
    categorySlug: "puzzles",
    isPuzzle: true,
    price: 8,
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

// دمج جميع منتجات المتجر
const PRODUCTS = [
  ...DESK_PRODUCTS,
  ...TRAY_PRODUCTS,
  ...PENDANT_PRODUCTS,
  ...PUZZLE_PRODUCTS
];
