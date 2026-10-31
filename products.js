// ==========================================
// WOODWORKING PRODUCTS CATALOG
// You can easily add, edit, or remove items here!
// Just copy an item block and change the details.
// ==========================================

const STORE_CONFIG = {
  storeName: "Timber & Grain",
  tagline: "Handcrafted Artisan Woodwork",
  currency: "$",
  // Put your phone number here with country code (no + or spaces) for WhatsApp orders:
  // e.g. "1234567890" or "447123456789"
  whatsappNumber: "1234567890",
  // Optional email address for orders
  contactEmail: "woodworking@example.com"
};

const PRODUCTS = [
  {
    id: 1,
    title: "Handmade End-Grain Walnut Cutting Board",
    category: "Kitchen & Dining",
    price: 85,
    woodType: "Black Walnut & Hard Maple",
    dimensions: "16\" x 12\" x 1.75\"",
    badge: "Bestseller",
    shortDesc: "Durable, knife-friendly cutting board treated with food-grade mineral oil and organic beeswax.",
    description: "Crafted with precision from premium kiln-dried American Black Walnut and Canadian Hard Maple. The end-grain construction preserves your knife's edge and heals itself from light knife marks. Features juice grooves and carved handle grips.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Rustic Live-Edge Coffee Table",
    category: "Living Room",
    price: 320,
    woodType: "Salvaged English Oak",
    dimensions: "42\" L x 22\" W x 18\" H",
    badge: "Unique Piece",
    shortDesc: "Natural live-edge slab preserving organic tree contours with matte black steel hairpin legs.",
    description: "Every table is one-of-a-kind. Hand-finished with four coats of natural hard-wax oil for lasting spill resistance while maintaining the authentic texture and warmth of natural oak.",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Artisan Turned Salad Bowl",
    category: "Kitchen & Dining",
    price: 65,
    woodType: "Cherry Wood",
    dimensions: "10\" Diameter x 4\" Deep",
    badge: "Popular",
    shortDesc: "Hand-lathed from a single piece of solid cherry with a warm, rich natural luster.",
    description: "Turned by hand on a traditional lathe from responsibly sourced cherry log blocks. Smooth to the touch, deep enough for large family salads, and finished with organic food-safe oil.",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Geometric Floating Wall Shelves (Set of 3)",
    category: "Home Decor",
    price: 110,
    woodType: "White Ash",
    dimensions: "18\", 24\", 30\" Lengths (6\" Deep)",
    badge: "New",
    shortDesc: "Minimalist hidden-bracket shelves with clean chamfered edges for plants, books, and decor.",
    description: "Modern minimalist floating shelves built with solid American White Ash. Includes concealed heavy-duty steel mounting brackets and hardware suitable for drywall or masonry walls.",
    image: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Magnetic Wooden Knife Rack",
    category: "Kitchen & Dining",
    price: 45,
    woodType: "Smoked Oak",
    dimensions: "18\" x 2.5\" x 0.8\"",
    badge: "",
    shortDesc: "Ultra-strong neodymium magnets recessed behind solid wood to safeguard knife blades.",
    description: "Keep your kitchen counters clear and show off your cutlery. Powerful hidden magnets securely hold up to 6 chef knives without scratching metal blades. Keyhole slots on the back make wall mounting flush and simple.",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Mid-Century Plant Stand with Ceramic Pot",
    category: "Home Decor",
    price: 55,
    woodType: "Teak Wood",
    dimensions: "Fits 8\" to 10\" Pots",
    badge: "",
    shortDesc: "Interlocking cross-lap joint plant stand that elevates indoor greenery with timeless style.",
    description: "Features traditional mortise and lap joints with no visible screws. Naturally water-resistant teak finish makes it perfect for indoor plants, patios, or living room corners.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Carved Bedside Catchall & Valet Tray",
    category: "Accessories",
    price: 38,
    woodType: "Mahogany",
    dimensions: "11\" x 7\" x 1\"",
    badge: "Gift Idea",
    shortDesc: "Elegantly routed tray for watches, keys, coins, and phone with a dedicated cable groove.",
    description: "Machined and hand-sanded to a glass-smooth finish. Designed with rounded compartments to scoop out coins and keys effortlessly. Lined with optional wool felt bases for scratch protection.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Custom Wooden Coaster Set (Pack of 6)",
    category: "Home Decor",
    price: 30,
    woodType: "Mixed Hardwoods (Maple, Walnut, Padauk)",
    dimensions: "4\" x 4\" x 0.4\" each",
    badge: "",
    shortDesc: "Stunning striped coaster set with matching wooden holder box and cork base pads.",
    description: "Composed of laminated hardwood offcuts, celebrating zero-waste craftsmanship. Each coaster has waterproof heat-resistant polyurethane coating to withstand icy cold and steaming hot drinks.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
  }
];
