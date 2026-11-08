// ==========================================
// MADEFORU JO - قائمة المنتجات والإعدادات
// مشغل نجارة حرفية وهدايا مخصصة — مصنوعة يدوياً خصيصاً لك
// مجسمات أسلحة خشبية • أعمال ريزن • هدايا مواليد • أنتيكات • بازل • حفر ليزر CO2
// ==========================================

const STORE_CONFIG = {
  storeName: "MadeForU",
  storeTagline: "مشغل نجارة حرفية وهدايا مخصصة — مجسمات أسلحة خشبية، ريزن، هدايا مواليد، أنتيكات وبازل مع حفر ليزر CO2 مخصص",
  currency: "د.أ",
  deliveryAmman: 1.0,      // أجرة التوصيل داخل عمان: 1 دينار
  deliveryOutside: 2.0,    // أجرة التوصيل خارج عمان (باقي المحافظات): 2 دينار
  whatsappNumber: "962789423717",
  logo: "images/MadeForU Logo Trans.png",
  favicon: "images/MadeForU Logo.png",
  instagramUrl: "https://www.instagram.com/madeforu.jo/",
  facebookUrl: "https://www.facebook.com/madeforu.jo1",

  // خدمة الحفر المخصص بماكينة ليزر CO2 فائقة الدقة
  engravingFee: 3.0,       // رسم الحفر: 3 دنانير (يتم تحويله مسبقاً بالتنسيق عبر الواتساب)

  // خيارات المواد الأساسية للمنتجات
  materials: [
    {
      id: "wood",
      name: "خشب طبيعي / صلب",
      priceOffset: 0,
      badge: "يدوي الصنع 🪵",
      desc: "أخشاب صلبة مختارة (زان، جوز، سويد، MDF صلب) مشغولة يدوياً بمتانة عالية ولمسة أصيلة دافئة.",
      colors: [
        { id: "natural-wood", name: "خشب طبيعي / فاتح", hex: "#c89d7c" },
        { id: "walnut-dark", name: "جوز داكن / معتق", hex: "#5a3825" },
        { id: "rustic-black", name: "أسود معتق", hex: "#1f1f1f" },
        { id: "pure-white", name: "أبيض ناصع", hex: "#ffffff", border: "#ccc" }
      ]
    },
    {
      id: "acrylic",
      name: "أكريليك فاخر / دمج",
      priceOffset: 3,
      badge: "عصري وأنيق 💎",
      desc: "أكريليك صلب متين بمظهر زجاجي أو مدمج مع الخشب لمظهر عصري مقاوم للخدوش.",
      colors: [
        { id: "clear-glass", name: "شفاف كريستالي", hex: "linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #bae6fd 100%)", border: "#93c5fd" },
        { id: "gloss-black", name: "أسود لامع", hex: "#0a0a0a" },
        { id: "gloss-white", name: "أبيض لؤلؤي", hex: "#ffffff", border: "#bbb" },
        { id: "mirror-gold", name: "مرآة ذهبية", hex: "linear-gradient(135deg, #fef08a 0%, #d97706 100%)", border: "#ca8a04" }
      ]
    }
  ]
};

// ==========================================
// 1. مجسمات وأسلحة خشبية تذكارية (Wooden Weapon Props)
// ==========================================
const WEAPON_PRODUCTS = [
  {
    id: 101,
    title: "مجسم بندقية كلاشينكوف خشبية فاخرة مع ستاند وحفر ليزر",
    category: "أسلحة ومجسمات خشبية ⚔️",
    price: 18,
    dimensions: "الطول 85 سم (حجم واقعي)",
    badge: "الأكثر طلباً ⚔️",
    shortDesc: "مجسم بندقية مصنوعة يدوياً من الخشب الصلب مع قاعدة عرض فاخرة وإمكانية حفر ليزر مخصص للاسم أو الرتبة أو الإهداء.",
    description: "تحفة يدوية مميزة لعشاق التذكارات والمقتنيات العسكرية والتراثية. صُنعت يدوياً في مشغلنا بحرفية عالية ودقة متناهية من الخشب الصلب الفاخر (زان/سويد) مع تشطيب يدوي معتق، وتأتي مع ستاند خشبي مخصص لحمل البندقية. يمكنك عبر ليزر CO2 حفر اسمك، رتبتك، تاريخك الخاص أو إهداء مميز على جسم البندقية أو لوحة الستاند.",
    image: "images/Crafts/wooden-rifle.svg",
    gallery: [
      "images/Crafts/wooden-rifle.svg",
      "images/Crafts/wooden-pistol.svg"
    ]
  },
  {
    id: 102,
    title: "مجسم مسدس كلاسيكي يدوي الصنع مع قاعدة عرض محفورة",
    category: "أسلحة ومجسمات خشبية ⚔️",
    price: 12,
    dimensions: "المقاس 22 سم",
    badge: "إهداء مميز 🎯",
    shortDesc: "مجسم مسدس خشبي مشغول يدوياً مع قاعدة عرض مخصصة وحفر الاسم والشعار بالليزر.",
    description: "مجسم تذكاري فاخر لمسدس كلاسيكي منحوت بدقة من الخشب الصلب بتفاصيل متقنة. خيار استثنائي للإهداء في المناسبات الرسمية، التخرج، والترقيات. يشمل قاعدة عرض خشبية مع حفر ليزر مخصص لأي اسم أو شعار.",
    image: "images/Crafts/wooden-pistol.svg",
    gallery: [
      "images/Crafts/wooden-pistol.svg",
      "images/Crafts/wooden-rifle.svg"
    ]
  },
  {
    id: 103,
    title: "خنجر وسيف تراثي خشبي يدوي بنقوش ليزرية وزخارف",
    category: "أسلحة ومجسمات خشبية ⚔️",
    price: 14,
    dimensions: "الطول 40 سم",
    badge: "تراث وأصالة 🗡️",
    shortDesc: "خنجر تراثي خشبي يدوي الصنع بزخارف مفرغة بالليزر وقاعدة عرض وحفر إهداء خاص.",
    description: "قطعة تراثية أصيلة تجسد عراقة الخنجر العربي. صُنع يدوياً من الخشب الطبيعي مع غمد منقوش بدقة ليزر CO2 وزخارف عربية مذهبة. هدية تراثية فاخرة للمجالس والمكاتب مع إمكانية حفر بيت شعري أو إهداء شخصي.",
    image: "images/Crafts/wooden-dagger.svg",
    gallery: [
      "images/Crafts/wooden-dagger.svg"
    ]
  }
];

// ==========================================
// 2. أعمال الخشب والريزن الفنية (Wood & Resin Crafts)
// ==========================================
const RESIN_PRODUCTS = [
  {
    id: 201,
    title: "صينية تقديم فاخرة — دمج خشب الجوز الطبيعي والريزن البحري",
    category: "أعمال الخشب والريزن 🌊",
    price: 16,
    dimensions: "المقاس 45 × 30 سم",
    badge: "تحفة فنية 🌊",
    shortDesc: "صينية تقديم فاخرة تجمع بين عراقة خشب الجوز وجمال ريزن الإيبوكسي الأزرق الشفاف مع مقابض ذهبية وحفر ليزر مخصص.",
    description: "كل قطعة هي لوحة فنية فريدة لا تتكرر! صُنعت من قطع خشب الجوز الطبيعي ذات الحواف الحية (Live Edge) ومصبوبة يدوياً بريزن إيبوكسي كريستالي مقاوم للحرارة والخدوش بتدرجات أمواج البحر الزرقاء. مزودة بمقابض معدنية ذهبية أنيقة، مع إمكانية حفر ليزر دقيق لاسم العائلة أو عبارة ترحيبية على جزء الخشب.",
    image: "images/Crafts/resin-tray.svg",
    gallery: [
      "images/Crafts/resin-tray.svg",
      "images/Crafts/resin-coasters.svg"
    ]
  },
  {
    id: 202,
    title: "طقم كوسترات وقواعد أكواب خشب طبيعي وريزن إيبوكسي (طقم 4 قطع)",
    category: "أعمال الخشب والريزن 🌊",
    price: 8,
    dimensions: "المقاس 10 × 10 سم لكل قطعة",
    badge: "طقم أنيق ☕",
    shortDesc: "طقم 4 قواعد أكواب فخمة دمج خشب الزيتون/الجوز والريزن الملون مع إمكانية حفر الأحرف والشعارات بالليزر.",
    description: "أضف لمسة راقية لطاولتك أو أهدِ أحبابك طقماً استثنائياً. طقم مكون من 4 كوسترات دمج خشب طبيعي مع ريزن ملون، محمي بطبقة عازلة للمشروبات الساخنة والباردة. يمكن حفر حرفين أو شعار خاص بالليزر على كل قطعة.",
    image: "images/Crafts/resin-coasters.svg",
    gallery: [
      "images/Crafts/resin-coasters.svg",
      "images/Crafts/resin-tray.svg"
    ]
  }
];

// ==========================================
// 3. هدايا المواليد والأطفال المخصصة (Baby & Nursery Keepsakes)
// ==========================================
const BABY_PRODUCTS = [
  {
    id: 301,
    title: "لوحة تذكار المولود الخشبية الفاخرة — حفر تفاصيل الولادة بالليزر",
    category: "هدايا المواليد والأطفال 👶",
    price: 9,
    dimensions: "قطر 40 سم أو 30 سم",
    badge: "أكثر الهدايا طلباً 👶",
    shortDesc: "لوحة دائرية من الخشب الصلب مع اسم المولود مجسم 3D وحفر ليزر دقيق للتاريخ، ساعة الولادة، الوزن، والطول.",
    description: "الهدية الأجمل والأكثر تأثيراً لاستقبال المواليد الجدد! لوحة خشبية دائرية فاخرة مقاس 40 سم تحمل اسم طفلك بحروف بارزة ملونة، مع حفر ليزر تفصيلي باليوم وتاريخ الميلاد، ساعة وسنة الولادة، وزن الطفل وطوله، بالإضافة لعبارة إهداء ودعاء تذكاري يدوم مدى الحياة.",
    image: "images/Crafts/baby-plaque.svg",
    gallery: [
      "images/Crafts/baby-plaque.svg",
      "images/Crafts/baby-puzzle.svg"
    ]
  },
  {
    id: 302,
    title: "أحجية وبازل اسم الطفل الخشبية المجسمة — لعبة تعليمية وتذكار",
    category: "هدايا المواليد والأطفال 👶",
    price: 8,
    dimensions: "المقاس 35 × 15 سم",
    badge: "تذكار وتعليم 🧸",
    shortDesc: "لوح بازل خشبي لحروف اسم الطفل بألوان زاهية آمنة مع حفر عبارة إهداء خاصة بالليزر على القاعدة.",
    description: "لعبة خشبية تعليمية فريدة وتذكار لغرفة الطفل في آن واحد. يتم تفصيل حروف اسم طفلك ثلاثية الأبعاد بقطع خشبية ناعمة وآمنة 100% ليقوم الطفل بتركيبها، مع حفر ليزر مخصص لإهداء الوالدين أو الأقارب على خلفية القاعدة الخشبية.",
    image: "images/Crafts/baby-puzzle.svg",
    gallery: [
      "images/Crafts/baby-puzzle.svg",
      "images/Crafts/baby-plaque.svg"
    ]
  }
];

// ==========================================
// 4. أنتيكات وديكورات يدوية (Antiques & Handcrafted Decor)
// ==========================================
const ANTIQUE_PRODUCTS = [
  {
    id: 401,
    title: "صندوق أنتيك خشبي فاخر للهدايا والمجوهرات بنقش مفرغ بالليزر",
    category: "أنتيكات وديكورات يدوية 🏺",
    price: 11,
    dimensions: "المقاس 25 × 18 × 12 سم",
    badge: "معتق فاخر 🏺",
    shortDesc: "صندوق خشب معتق بنقوش إسلامية مفرغة بدقة ليزر CO2 مع قفل معدني نحاسي وحفر إهداء داخلي أو خارجي.",
    description: "صندوق خشبي أنتيك بتشطيب يدوي معتق مستوحى من الصناديق التراثية القديمة. الغطاء مزين بنقوش هندسية دقيقة مفرغة بالليزر، مزود بإكسسوارات وقفل نحاسي عتيق. مثالي لحفظ المجوهرات، الساعات، أو كصندوق لتقديم الهدايا الفاخرة مع حفر ليزر مخصص للاسم.",
    image: "images/Crafts/antique-box.svg",
    gallery: [
      "images/Crafts/antique-box.svg",
      "images/Crafts/wooden-quran-stand.svg"
    ]
  },
  {
    id: 402,
    title: "حامل مصحف وكتب خشبي فاخر قابل للطي — نقش ليزري إسلامي",
    category: "أنتيكات وديكورات يدوية 🏺",
    price: 10,
    dimensions: "المقاس 35 × 20 سم",
    badge: "إهداء قرآني 📖",
    shortDesc: "ستاند خشبي مفرغ بنقوش إسلامية دقيقة قابل للطي، هدية مباركة مع إمكانية حفر الاسم أو الدعاء.",
    description: "ستاند مصحف خشبي فاخر مصنوع من الخشب الصلب ومقطع هندسياً ليتداخل ويفتح ويغلق بانسيابية تامة. مزين بنقوش إسلامية مفرغة بالليزر مع إمكانية حفر اسم المهدى إليه أو صدقة جارية بالليزر.",
    image: "images/Crafts/wooden-quran-stand.svg",
    gallery: [
      "images/Crafts/wooden-quran-stand.svg",
      "images/Crafts/antique-box.svg"
    ]
  },
  {
    id: 403,
    title: "ساعة حائط خشبية هندسية يدوية الصنع مقاس 40 سم (ماكينة صامتة)",
    category: "أنتيكات وديكورات يدوية 🏺",
    price: 15,
    dimensions: "القطر 40 سم",
    badge: "ديكور جداري ⏰",
    shortDesc: "ساعة جدارية فنية مقاس 40 سم من الخشب الصلب مع أرقام رومانية وحفر اسم العائلة بالليزر وماكينة صامتة تماماً.",
    description: "أضف لمسة دفء وأناقة لأي جدار في منزلك أو مكتبك. ساعة جدارية دائرية مقاس 40 سم مصنوعة من خشب صلب معتق، مقطوعة بحرفية عالية مع عقارب ذهبية وماكينة كوارتز صامتة بدون صوت تكة. يمكنك حفر اسم العائلة أو تاريخ الزواج في المنتصف بالليزر.",
    image: "images/Crafts/wooden-clock.svg",
    gallery: [
      "images/Crafts/wooden-clock.svg"
    ]
  }
];

// ==========================================
// 5. أحاجي وبازل هندسية فنية (Artistic Puzzles)
// ==========================================
const PUZZLE_PRODUCTS = [
  {
    id: 501,
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
    id: 502,
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
    id: 503,
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
    id: 504,
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

// ==========================================
// 6. حروف وأسماء شخصية مخصصة (Personalized Letters)
// ==========================================
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const LETTER_PRODUCTS = ALPHABET.map((char, index) => ({
  id: 601 + index,
  title: `حرف شخصي مخصص — حرف ${char}`,
  category: "حروف وأسماء شخصية 🔤",
  price: 7,
  dimensions: "المقاس 40 سم",
  badge: `حرف ${char} 🔤`,
  shortDesc: `حرف (${char}) مخصص ومصنوع خصيصاً لك من خامات صلبة فاخرة مع إمكانية حفر إهداء خاص.`,
  description: `تصميم شخصي فاخر لحرف (${char}). يُصنع خصيصاً لك بحرفية عالية من خامات صلبة مقاس 40 سم (خشب صلب متين أو أكريليك عصري)، ويمكن إضافة حفر ليزر مخصص للاسم أو التاريخ على القاعدة.`,
  image: `images/Letters/${char}0003.png`,
  gallery: [
    `images/Letters/${char}0003.png`,
    `images/Letters/${char}0002.png`,
    `images/Letters/${char}0001.png`,
    `images/Letters/${char}0000.png`
  ]
}));

// دمج كافة المنتجات في قائمة واحدة منظمة حسب الأقسام
const PRODUCTS = [
  ...WEAPON_PRODUCTS,
  ...RESIN_PRODUCTS,
  ...BABY_PRODUCTS,
  ...ANTIQUE_PRODUCTS,
  ...PUZZLE_PRODUCTS,
  ...LETTER_PRODUCTS
];
