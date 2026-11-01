// ==========================================
// PUZZLEME JO - قائمة المنتجات والإعدادات
// خيارات الخامات: خشب MDF صلب (7 د.أ) • أكريليك صلب فاخر (10 د.أ)
// ألوان متعددة مع عينات لونية تفاعلية
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

const PRODUCTS = [
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
  },
  {
    id: 5,
    title: "بازل الحروف المخصصة — حرف A",
    category: "حروف بالاسم",
    price: 7,
    priceAcrylic: 10,
    dimensions: "الارتفاع 40 سم",
    badge: "حسب طلبك 🔤",
    shortDesc: "حرف A كبير بحجم 40 سم وبقصة بازل فريدة. متوفر بخشب MDF أو أكريليك!",
    description: "بازل شخصي مميز للأطفال وغرف النوم أو المكاتب. حجم كبير بارتفاع 40 سم. اختر الخامة المفضلة (خشب MDF أو أكريليك) واللون المطلوب. كل حرف يتم تفصيل قطعه الداخلية بنمط مميز لا يشبه أي حرف آخر.",
    image: "images/Letters/A0003.png",
    gallery: [
      "images/Letters/A0003.png",
      "images/Letters/A0002.png",
      "images/Letters/A0001.png",
      "images/Letters/A0000.png"
    ]
  },
  {
    id: 6,
    title: "بازل الحروف المخصصة — حرف B",
    category: "حروف بالاسم",
    price: 7,
    priceAcrylic: 10,
    dimensions: "الارتفاع 40 سم",
    badge: "حسب طلبك 🔤",
    shortDesc: "حرف B كبير 40 سم. نمط القطع الداخلي فريد وحصري لكل طلب.",
    description: "احصل على الحرف الأول من اسمك أو اسم من تحب كأحجية فاخرة. اختر بين خشب MDF الصلب (5 ملم) أو الأكريليك الصلب بالألوان المتعددة.",
    image: "images/Letters/B0003.png",
    gallery: [
      "images/Letters/B0003.png",
      "images/Letters/B0002.png",
      "images/Letters/B0001.png",
      "images/Letters/B0000.png"
    ]
  },
  {
    id: 7,
    title: "بازل الحروف المخصصة — حرف C",
    category: "حروف بالاسم",
    price: 7,
    priceAcrylic: 10,
    dimensions: "الارتفاع 40 سم",
    badge: "حسب طلبك 🔤",
    shortDesc: "حرف C كبير 40 سم. خامات قوية ومظهر أنيق بلونك المفضل.",
    description: "تصميم أنيق لحرف C يجمع بين الديكور المودرن والتسلية الهادفة. متوفر بخيارات خشب MDF أو أكريليك فاخر مع قصة ليزر فريدة تمنح كل قطعة هويتها المستقلة.",
    image: "images/Letters/C0003.png",
    gallery: [
      "images/Letters/C0003.png",
      "images/Letters/C0002.png",
      "images/Letters/C0001.png",
      "images/Letters/C0000.png"
    ]
  },
  {
    id: 8,
    title: "بازل الحروف المخصصة — حرف D",
    category: "حروف بالاسم",
    price: 7,
    priceAcrylic: 10,
    dimensions: "الارتفاع 40 سم",
    badge: "حسب طلبك 🔤",
    shortDesc: "حرف D بارتفاع 40 سم. يمكنك كتابة أي حرف مطلوب في الملاحظات عند الطلب!",
    description: "قطعة فنية بارتفاع 40 سم. متوفرة بخشب MDF صلب (7 د.أ) أو أكريليك صلب (10 د.أ) بالألوان المتعددة. كل قطعة مقصوصة بتقنية فريدة تضمن عدم تكرار التشكيل الداخلي مع أي شخص آخر.",
    image: "images/Letters/D0003.png",
    gallery: [
      "images/Letters/D0003.png",
      "images/Letters/D0002.png",
      "images/Letters/D0001.png",
      "images/Letters/D0000.png"
    ]
  }
];
