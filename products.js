// ==========================================
// PUZZLEME JO - قائمة المنتجات الحقيقية
// خشب MDF صلب 5 ملم • مقاس 40 سم • نمط تقطيع فريد لكل طلب
// عرض الزاوية الأخيرة أولاً كصورة معاينة رئيسية
// ==========================================

const STORE_CONFIG = {
  storeName: "PuzzleMe JO",
  storeTagline: "أحاجي وبازل خشبية فريدة من خشب MDF الصلب (5 ملم)",
  currency: "د.أ",
  deliveryAmman: 1.0,      // أجرة التوصيل داخل عمان: 1 دينار
  deliveryOutside: 2.0,    // أجرة التوصيل خارج عمان (باقي المحافظات): 2 دينار
  whatsappNumber: "962789423717",
  logo: "images/Logo/puzzleme logo.png"
};

const PRODUCTS = [
  {
    id: 1,
    title: "بازل خريطة الأردن الخشبية الملكية",
    category: "خرائط جغرافية",
    price: 10,
    material: "خشب MDF صلب سماكة 5 ملم (مقاوم للكسر والتمزق)",
    dimensions: "الطول 40 سم",
    badge: "الأكثر طلباً 🇯🇴",
    shortDesc: "خريطة الأردن بتصميم خشبي ثلاثي الأبعاد مقصوص بدقة متناهية. كل قطعة بقصة فريدة لا تتكرر!",
    description: "أحجية خريطة المملكة الأردنية الهاشمية المصنوعة من خشب MDF الصلب بسماكة 5 ملم متينة تدوم لسنوات طويلة دون اهتراء أو تمزق كالكرتون العادي. يتميز كل بازل بنمط تقطيع هندسي داخلي فريد وخاص بكل طلب، مع الحفاظ على الإطار الجغرافي الخارجي المتقن.",
    image: "images/Jordan Map Puzzle/Jordan Map render0002.png",
    gallery: [
      "images/Jordan Map Puzzle/Jordan Map render0002.png",
      "images/Jordan Map Puzzle/Jordan Map render0001.png",
      "images/Jordan Map Puzzle/Jordan Map render0000.png",
      "images/Jordan Map Puzzle/Top.png"
    ]
  },
  {
    id: 2,
    title: "بازل خريطة فلسطين الخشبية التاريخية",
    category: "خرائط جغرافية",
    price: 10,
    material: "خشب MDF صلب سماكة 5 ملم (مقاوم للكسر والتمزق)",
    dimensions: "الطول 40 سم",
    badge: "مميز 🇵🇸",
    shortDesc: "خارطة فلسطين من النهر إلى البحر بنقوش خشبية عميقة وقطع متداخلة فريدة لكل طلب.",
    description: "تحفة فنية تروي قصة الأرض والهوية. مصنوعة من خشب MDF الصلب عالي الكثافة بسماكة 5 ملم ليمنحك صلابة استثنائية ولمسة فنية أصيلة عند التركيب. مثالية للعرض كلوحة جدارية أو إهدائها كرمز خالد.",
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
    title: "بازل شكل القلب الرومانسي الخشبي",
    category: "أشكال وتصاميم فنية",
    price: 10,
    material: "خشب MDF صلب سماكة 5 ملم (مقاوم للكسر والتمزق)",
    dimensions: "العرض 40 سم",
    badge: "هدية مميزة ❤️",
    shortDesc: "بازل فني على شكل قلب بقطع متداخلة معقدة وفريدة تجعل تركيبها تجربة لا تُنسى.",
    description: "هدية استثنائية للأحباب والأصدقاء. قلب خشبي متقن الصنع بسماكة 5 ملم من خشب MDF الفاخر. كل طلب يحصل على نمط قَص عشوائي فريد تماماً داخل القلب بحيث لا يوجد قلب مطابق لقلب آخر على الإطلاق!",
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
    title: "بازل النجمة الذهبية الخشبية",
    category: "أشكال وتصاميم فنية",
    price: 10,
    material: "خشب MDF صلب سماكة 5 ملم (مقاوم للكسر والتمزق)",
    dimensions: "المقاس 40 سم",
    badge: "تحدي هندسي ⭐",
    shortDesc: "نجمة خشبية متناظرة بقطع معقدة تجمع بين الهندسة الدقيقة ومتعة التفكير البصري.",
    description: "تحدٍ ذهني أنيق بتصميم نجمة خشبية خماسية الأبعاد مصنوعة من ألواح MDF صلبة سماكة 5 ملم. قطعها ذات ملمس ناعم وحواف مقطوعة بالليزر بدقة فائقة لتركيب سلس يدوم لأجيال.",
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
    title: "بازل الحروف الخشبية المخصصة — حرف A",
    category: "حروف خشبية بالاسم",
    price: 10,
    material: "خشب MDF صلب سماكة 5 ملم (مقاوم للكسر والتمزق)",
    dimensions: "الارتفاع 40 سم",
    badge: "حسب طلبك 🔤",
    shortDesc: "حرف A خشبي كبير بحجم 40 سم وبقصة بازل فريدة. يمكنك طلب أي حرف من الألف إلى الياء!",
    description: "بازل شخصي مميز للأطفال وغرف النوم أو المكاتب. حجم كبير بارتفاع 40 سم وسماكة 5 ملم من خشب MDF المتين. كل حرف يتم تفصيل قطعه الداخلية بنمط مميز لا يشبه أي حرف آخر.",
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
    title: "بازل الحروف الخشبية المخصصة — حرف B",
    category: "حروف خشبية بالاسم",
    price: 10,
    material: "خشب MDF صلب سماكة 5 ملم (مقاوم للكسر والتمزق)",
    dimensions: "الارتفاع 40 سم",
    badge: "حسب طلبك 🔤",
    shortDesc: "حرف B خشبي كبير 40 سم. نمط القطع الداخلي فريد وحصري لكل طلب.",
    description: "احصل على الحرف الأول من اسمك أو اسم من تحب كأحجية خشبية فاخرة. مصنوعة من خشب MDF الصلب بسماكة 5 ملم المقاوم للكسر.",
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
    title: "بازل الحروف الخشبية المخصصة — حرف C",
    category: "حروف خشبية بالاسم",
    price: 10,
    material: "خشب MDF صلب سماكة 5 ملم (مقاوم للكسر والتمزق)",
    dimensions: "الارتفاع 40 سم",
    badge: "حسب طلبك 🔤",
    shortDesc: "حرف C خشبي 40 سم بسماكة 5 ملم. قطع خشبية قوية لا تتمزق.",
    description: "تصميم أنيق لحرف C يجمع بين الديكور المودرن والتسلية الهادفة. خشب قوي بسماكة 5 ملم مع قصة ليزر فريدة تمنح كل قطعة هويتها المستقلة.",
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
    title: "بازل الحروف الخشبية المخصصة — حرف D",
    category: "حروف خشبية بالاسم",
    price: 10,
    material: "خشب MDF صلب سماكة 5 ملم (مقاوم للكسر والتمزق)",
    dimensions: "الارتفاع 40 سم",
    badge: "حسب طلبك 🔤",
    shortDesc: "حرف D خشبي بارتفاع 40 سم. يمكنك أيضاً كتابة أي حرف مطلوب في الملاحظات عند الطلب!",
    description: "قطعة فنية بارتفاع 40 سم من خشب MDF المتين (5 ملم). كل قطعة مقصوصة بتقنية فريدة تضمن عدم تكرار التشكيل الداخلي مع أي شخص آخر.",
    image: "images/Letters/D0003.png",
    gallery: [
      "images/Letters/D0003.png",
      "images/Letters/D0002.png",
      "images/Letters/D0001.png",
      "images/Letters/D0000.png"
    ]
  }
];
