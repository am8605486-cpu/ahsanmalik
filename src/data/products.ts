import { Product } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_shalwar_kameez_1792394426422.jpg';

export const PRODUCTS: Product[] = [
  // 1. UNSTITCHED SUIT BOX - ROYAL GOLD EGYPTIAN COTTON
  {
    id: 'ahc-001',
    name: 'AL HAFIZ Royal Gold Egyptian Cotton Unstitched Suit Box',
    slug: 'al-hafiz-royal-gold-egyptian-cotton-unstitched-suit-box',
    category: 'unstitched',
    categoryName: "Men's Unstitched Fabric",
    price: 13500,
    originalPrice: 16000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.98,
    reviewCount: 114,
    inStock: true,
    stockCount: 15,
    shortDescription: 'Signature 4.5 meters luxury Egyptian Giza cotton unstitched fabric with woven gold selvedge border, engraved brass buttons, spool, and rigid collector presentation box.',
    description: 'The crowning glory of AL HAFIZ COLLECTION. Woven from 140/2 double-twisted extra-long staple Egyptian Giza cotton. Boasts an ultra-fine soft hand, natural lustrous sheen, and exceptional breathability tailored for Pakistani climates. Packaged in our signature navy-and-gold rigid heirloom presentation box with custom metallic collar buttons, silk embroidery spool, tape, and woven authenticity labels.',
    fabric: '100% Superfine Long-Staple Egyptian Giza Combed Cotton (Latha Finish)',
    origin: 'Woven in Como & Hand-Finished in Lahore Atelier, Pakistan',
    fit: 'Unstitched 4.5 Meters (Generous 54-inch width cut for full Shalwar Kameez)',
    careInstructions: [
      'Machine wash gentle cold or hand wash in cold water with mild detergent',
      'Do not bleach or dry in direct harsh sunlight',
      'Iron with medium-high steam for crisp razor-sharp creases'
    ],
    features: [
      'Full 4.5 meters length (54-inch wide width) for any height and build',
      'Continuous woven gold selvedge: AL HAFIZ ROYAL GOLD EGYPTIAN COTTON',
      'Includes 8 custom brass AL HAFIZ monogram collar and cuff buttons',
      'Includes matching silk thread spool, measuring tape & official woven tag',
      'Packaged in an embossed rigid luxury magnetic box'
    ],
    colors: [
      { name: 'Midnight Navy Blue', hex: '#1C2951' },
      { name: 'Royal Ivory Cream', hex: '#FAF6EE' },
      { name: 'Crisp Snow White', hex: '#FFFFFF' },
      { name: 'Obsidian Black', hex: '#0D0D10' }
    ],
    sizes: ['4.5 Meters (Standard Cut)', '5.0 Meters (Extra Large / Tall)'],
    images: [
      '/src/assets/images/product_unstitched_navy_1792395667369.jpg',
      '/src/assets/images/product_unstitched_latha_box_1792395474989.jpg'
    ]
  },

  // 2. UNSTITCHED SUIT BOX - MUGHAL KARANDI WINTER SUIT
  {
    id: 'ahc-002',
    name: 'Mughal Karandi Handwoven Winter Unstitched Suit Box',
    slug: 'mughal-karandi-handwoven-winter-unstitched-suit-box',
    category: 'unstitched',
    categoryName: "Men's Unstitched Fabric",
    price: 11500,
    originalPrice: 14000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.96,
    reviewCount: 88,
    inStock: true,
    stockCount: 12,
    shortDescription: 'Pure handwoven winter Karandi unstitched fabric in warm fawn camel tone, presented in matte black & gold gift box with mother-of-pearl buttons.',
    description: 'A timeless Pakistani winter heritage fabric. Handwoven from textured cotton-silk Karandi yarn that offers rich tactile warmth, organic textured slubs, and exceptional structural fall. Each suit comes packed in a collector black-and-gold presentation box with mother-of-pearl buttons and woven selvedge crest.',
    fabric: 'Handwoven Textured Silk-Cotton Winter Karandi (Heavy Weight)',
    origin: 'Woven in Haripur & Finished in Lahore Atelier, Pakistan',
    fit: 'Unstitched 4.0 Meters (Full cut for Shalwar Kameez or Kurta Pajama)',
    careInstructions: [
      'Gentle cold water hand wash or specialist dry clean',
      'Line dry flat in shade to protect woven texture',
      'Iron inside-out with steam while fabric is slightly damp'
    ],
    features: [
      'Heavy-density handloom Karandi weave for cozy winter elegance',
      'Authentic gold selvedge border reading: MUGHAL KARANDI WINTER SUIT',
      'Includes set of 8 genuine mother-of-pearl buttons on craft card',
      'Official AL HAFIZ COLLECTION embroidered collar brand tag',
      'Luxury rigid gold-embossed presentation box'
    ],
    colors: [
      { name: 'Fawn Camel', hex: '#B8860B' },
      { name: 'Mocha Walnut', hex: '#5C4033' },
      { name: 'Pewter Charcoal', hex: '#373A40' },
      { name: 'Off-White Karandi', hex: '#FDFBF7' }
    ],
    sizes: ['4.0 Meters (Standard Suit)', '4.5 Meters (Tall Cut)'],
    images: [
      '/src/assets/images/product_karandi_suit_1792395633176.jpg',
      '/src/assets/images/product_unstitched_wash_wear_1792395476923.jpg'
    ]
  },

  // 3. UNSTITCHED SUIT - 8-POUND PURE BOSKI SILK
  {
    id: 'ahc-003',
    name: 'The Royal Sovereign 8-Pound Pure Boski Silk Unstitched Fabric',
    slug: 'royal-sovereign-8-pound-pure-boski-silk-unstitched-fabric',
    category: 'unstitched',
    categoryName: "Men's Unstitched Fabric",
    price: 24500,
    originalPrice: 28000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 94,
    inStock: true,
    stockCount: 8,
    shortDescription: 'Original imported 8-Pound pure spun Chinese mulberry Boski silk (4.0 Meters) with signature gold woven selvedge border and engraved collar buttons in luxury rigid box.',
    description: 'The supreme gold standard of traditional Pakistani gentleman attire. 100% pure spun mulberry Boski silk weighing genuine 8 pounds, celebrated for its buttery fluid drape, natural thermal cooling, and soft golden luster. Accompanied by original woven selvedge hallmark, signature collar tag, and authentic mother-of-pearl buttons in a collector presentation case.',
    fabric: '100% Pure Mulberry Boski Silk (Genuine 8-Pound Weight)',
    origin: 'Imported Pure Chinese Boski, Hand-Finished in Lahore',
    fit: 'Unstitched 4.0 Meters (Ample fabric for Shalwar Kameez or Kurta Pajama for up to 6ft 4in height)',
    careInstructions: [
      'Specialist dry clean only or gentle cold water hand wash with mild baby shampoo',
      'Never wring or twist; shade dry flat to preserve natural silk fiber strength',
      'Press with warm iron inside-out while damp using a protective cotton cloth'
    ],
    features: [
      'Authentic woven gold selvedge reading: ORIGINAL 8-POUND BOSKI SILK',
      'Includes set of 8 custom mother-of-pearl collar & cuff buttons',
      'Includes official AL HAFIZ COLLECTION embroidered collar brand tag',
      'Packaged in a luxury magnetic-clasp gold-embossed presentation gift box'
    ],
    colors: [
      { name: 'Original Boski Cream', hex: '#FAF6EE' },
      { name: 'Pure White Silk', hex: '#FFFFFF' },
      { name: 'Soft Butter Ivory', hex: '#FFF8DC' }
    ],
    sizes: ['4.0 Meters (Standard Suit)', '4.5 Meters (Extra Large / Tall)'],
    images: [
      '/src/assets/images/product_unstitched_boski_silk_1792395475722.jpg',
      '/src/assets/images/hero_shalwar_kameez_1792394426422.jpg'
    ]
  },

  // 4. UNSTITCHED SUIT - EGYPTIAN GIZA LATHA
  {
    id: 'ahc-004',
    name: 'Imperial Egyptian Giza Cotton Latha Unstitched Suit Box',
    slug: 'imperial-egyptian-giza-cotton-latha-unstitched-suit-box',
    category: 'unstitched',
    categoryName: "Men's Unstitched Fabric",
    price: 9800,
    originalPrice: 12000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.97,
    reviewCount: 92,
    inStock: true,
    stockCount: 18,
    shortDescription: 'Extra-long staple Egyptian Giza 45 combed cotton unstitched latha fabric (4.5 Meters) with ultra-soft luster, golden ribbon, and horn buttons.',
    description: 'The definitive summer and festive luxury fabric. Woven from 120/2 double-ply long-staple Egyptian cotton with a luminous latha finish that remains crisp, cool, and breathable through the warmest gatherings. Packaged in a velvet-lined matte black presentation case with gold seal ribbon, woven tags, and engraved mother-of-pearl buttons.',
    fabric: '100% Long-Staple Egyptian Giza 45 Combed Cotton (Mercerized Latha Finish)',
    origin: 'Woven in Faisalabad & Como, Italy',
    fit: 'Unstitched 4.5 Meters (Full cut for traditional Shalwar Kameez)',
    careInstructions: [
      'Machine wash gentle cold or hand wash in mild detergent',
      'Do not bleach or dry in direct harsh sunlight',
      'Warm iron with light water spray for crisp razor-sharp creases'
    ],
    features: [
      'Full 4.5 meters length (54-inch wide width)',
      'High-twist Egyptian yarn resistant to pilling and shrinkage',
      'Includes 8 engraved mother-of-pearl buttons & metallic collar tab',
      'Luxury gift presentation box with gold satin ribbon'
    ],
    colors: [
      { name: 'Crisp Snow White', hex: '#FFFFFF' },
      { name: 'Off-White Ivory', hex: '#FAF9F6' },
      { name: 'Light Cream Latha', hex: '#FDFBF7' }
    ],
    sizes: ['4.5 Meters (Standard Cut)'],
    images: [
      '/src/assets/images/product_unstitched_latha_box_1792395474989.jpg',
      '/src/assets/images/product_ivory_shalwar_kameez_1792394426969.jpg'
    ]
  },

  // 5. UNSTITCHED SUIT - WRINKLE FREE WASH & WEAR
  {
    id: 'ahc-005',
    name: 'Nocturne Wrinkle-Free Micro-Twill Wash & Wear Unstitched Fabric',
    slug: 'nocturne-wrinkle-free-wash-and-wear-unstitched-fabric',
    category: 'unstitched',
    categoryName: "Men's Unstitched Fabric",
    price: 6800,
    originalPrice: 8500,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.93,
    reviewCount: 67,
    inStock: true,
    stockCount: 22,
    shortDescription: 'High-density Japanese micro-twill 4.5 meters unstitched suit fabric in midnight slate with wrinkle-resistant drape and custom brass buttons.',
    description: 'Designed for daily executive elegance and effortless maintenance. This high-density micro-twill fabric provides an impeccable fluid drape with built-in wrinkle resistance, remaining sharp throughout demanding workdays and travel. Features signature woven selvedge lettering and custom antique brass buttons.',
    fabric: 'High-Density Japanese Micro-Twill (Wrinkle-Free Wash & Wear)',
    origin: 'Imported Japanese Yarn, Finished in Karachi',
    fit: 'Unstitched 4.5 Meters (Suitable for all heights and builds)',
    careInstructions: [
      'Machine wash cold on standard cycle',
      'Hang to dry immediately; almost zero ironing needed',
      'Steam press on medium if razor-sharp creases are desired'
    ],
    features: [
      'Wrinkle-recovery technology that retains crispness all day',
      'Continuous woven selvedge: AL HAFIZ LUXURY SUITING 4.5M',
      'Includes set of 8 custom antique cast brass crested buttons',
      'Includes woven chest pocket and collar identification tags'
    ],
    colors: [
      { name: 'Slate Steel Grey', hex: '#4B5563' },
      { name: 'Midnight Charcoal', hex: '#1F242D' },
      { name: 'Deep Olive Green', hex: '#374133' },
      { name: 'Jet Obsidian Black', hex: '#0D0D10' }
    ],
    sizes: ['4.5 Meters (Standard Cut)'],
    images: [
      '/src/assets/images/product_unstitched_wash_wear_1792395476923.jpg',
      '/src/assets/images/product_black_designer_kurta_1792394427923.jpg'
    ]
  },

  // 6. SHALWAR KAMEEZ - CHARCOAL GREY DESIGNER SUIT
  {
    id: 'ahc-006',
    name: 'Executive Charcoal Wash & Wear Shalwar Kameez Suit',
    slug: 'executive-charcoal-wash-and-wear-shalwar-kameez-suit',
    category: 'shalwar-kameez',
    categoryName: 'Luxury Shalwar Kameez',
    price: 9900,
    originalPrice: 12500,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.95,
    reviewCount: 79,
    inStock: true,
    stockCount: 14,
    shortDescription: 'Impeccably tailored charcoal grey wash-and-wear designer shalwar kameez with stiff ban collar, straight sleeves, and matching pleated shalwar.',
    description: 'The epitome of modern Eastern executive style. Tailored with single-needle precision in high-density Japanese micro-twill that is naturally wrinkle-resistant and breathable. Features our master-fused Ban mandarin collar that retains its crispness from morning meetings to evening dinners, French cuffs, and a full-cut pleated shalwar.',
    fabric: 'High-Density Japanese Micro-Twill (Wrinkle-Free Wash & Wear)',
    origin: 'Handcrafted in Lahore Atelier, Pakistan',
    fit: 'Executive Tailored Fit — Structured shoulders and crisp vertical fall',
    careInstructions: [
      'Machine wash gentle cold or hand wash',
      'Line dry on padded hanger; minimal ironing needed',
      'Medium steam press for razor sharp ban collar'
    ],
    features: [
      'German stiff interlining Ban mandarin collar',
      'Reinforced side pockets & internal smartphone pouch',
      'Matching full-pleat shalwar with reinforced waistband',
      'Concealed placket with smoke-grey mother-of-pearl buttons'
    ],
    colors: [
      { name: 'Charcoal Grey', hex: '#373A40' },
      { name: 'Midnight Navy', hex: '#161B26' },
      { name: 'Steel Slate', hex: '#4B5563' }
    ],
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    images: [
      '/src/assets/images/product_charcoal_suit_1792395650852.jpg',
      '/src/assets/images/hero_shalwar_kameez_1792394426422.jpg'
    ]
  },

  // 7. SHALWAR KAMEEZ - IMPERIAL EMBROIDERED BAN SUIT
  {
    id: 'ahc-007',
    name: 'Imperial Embroidered Ban Shalwar Kameez Suit',
    slug: 'imperial-embroidered-ban-shalwar-kameez-suit',
    category: 'shalwar-kameez',
    categoryName: 'Luxury Shalwar Kameez',
    price: 14500,
    originalPrice: 17500,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.96,
    reviewCount: 48,
    inStock: true,
    stockCount: 8,
    shortDescription: 'Tailored from 100% Egyptian Giza combed cotton with delicate self-thread embroidery along the mandarin Ban collar and French mitered cuffs.',
    description: 'The pinnacle of traditional Pakistani menswear sophistication. Crafted from hand-combed Egyptian Giza cotton with an exceptionally soft, breathable handfeel and crisp drape. Adorned with delicate tone-on-tone geometric thread embroidery on the stiff ban collar, concealed front placket, and cuffs, finished with genuine mother-of-pearl buttons.',
    fabric: '100% Superfine Egyptian Giza 45 Combed Cotton (Latha Finish)',
    origin: 'Handcrafted in Lahore Atelier, Pakistan',
    fit: 'Classic Tailored Fit — Refined chest with comfortable fluid drape',
    careInstructions: [
      'Hand wash in cold water or specialist gentle dry clean',
      'Use mild detergent; do not bleach or tumble dry',
      'Warm iron with light steam while slightly damp'
    ],
    features: [
      'Stiff-fused Ban mandarin collar with micro-embroidered border',
      'Hand-attached mother-of-pearl buttons on concealed placket',
      'Dual reinforced side pockets & concealed mobile pocket',
      'Traditional loose-cut pleated matching shalwar with drawstring closure'
    ],
    colors: [
      { name: 'Ivory Cream', hex: '#FDFBF7' },
      { name: 'Pearl White', hex: '#FAF9F6' },
      { name: 'Desert Sand', hex: '#E6D7C3' },
      { name: 'Charcoal Grey', hex: '#33373B' }
    ],
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    images: [
      '/src/assets/images/product_ivory_shalwar_kameez_1792394426969.jpg',
      '/src/assets/images/hero_shalwar_kameez_1792394426422.jpg'
    ]
  },

  // 8. KURTA - NOCTURNE JET BLACK DESIGNER KURTA
  {
    id: 'ahc-008',
    name: 'Nocturne Jet Black Designer Kurta',
    slug: 'nocturne-jet-black-designer-kurta',
    category: 'kurta',
    categoryName: 'Designer Kurtas',
    price: 8800,
    originalPrice: 10500,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.92,
    reviewCount: 76,
    inStock: true,
    stockCount: 16,
    shortDescription: 'Premium wrinkle-free wash-and-wear designer kurta with signature geometric chevron embroidery on the placket.',
    description: 'An essential staple for festive Jummah, evening soirees, and Eid celebrations. Crafted in high-density Japanese wash-and-wear fabric that resists wrinkles throughout the day while offering supreme thermal comfort. Features an exquisite geometric chevron motif embroidered with matte charcoal silk thread.',
    fabric: 'High-Density Japanese Micro-Twill (Wrinkle-Free Wash & Wear)',
    origin: 'Crafted in Karachi Atelier, Pakistan',
    fit: 'Slim Sartorial Cut — Structured shoulders and straight hem',
    careInstructions: [
      'Machine wash gentle cold or hand wash',
      'Line dry in shade; minimal ironing required',
      'Iron inside-out over embroidered chest placket'
    ],
    features: [
      'Signature geometric needlework chevron placket',
      'Stand Ban collar with metal concealed snap-lock buttons',
      'Straight sleeves with embroidered cuffs',
      'Double side vents with bar-tack reinforcement'
    ],
    colors: [
      { name: 'Jet Black', hex: '#0D0D0E' },
      { name: 'Midnight Navy', hex: '#161B26' },
      { name: 'Slate Steel', hex: '#4B5563' }
    ],
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    images: [
      '/src/assets/images/product_black_designer_kurta_1792394427923.jpg',
      '/src/assets/images/hero_shalwar_kameez_1792394426422.jpg'
    ]
  },

  // 9. WAISTCOAT - ROYAL NAVY JAMAWAR SILK
  {
    id: 'ahc-009',
    name: 'Royal Navy Textured Jamawar Silk Waistcoat',
    slug: 'royal-navy-textured-jamawar-silk-waistcoat',
    category: 'waistcoats',
    categoryName: 'Premium Waistcoats',
    price: 12500,
    originalPrice: 15000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.98,
    reviewCount: 52,
    inStock: true,
    stockCount: 7,
    shortDescription: 'Woven from pure Banarasi Jamawar silk with tonal paisley brocade and antique cast brass crest buttons.',
    description: 'Transform any kurta shalwar into a statement of regal nobility. Handwoven on traditional jacquard looms with intricate tonal paisley motifs that shimmer subtly under chandeliers. Styled with a crisp stand Ban collar, welted chest pocket for silk pocket squares, and antique gold crested buttons.',
    fabric: 'Pure Jamawar Silk with Metallic Zari Weft',
    origin: 'Woven in Multan, Tailored in Lahore',
    fit: 'Tailored Waistcoat Cut — Contoured waist and structured chest',
    careInstructions: [
      'Dry clean only by silk specialists',
      'Store on wide wooden hanger inside provided dust bag',
      'Steam gently; never press hot iron directly on silk zari'
    ],
    features: [
      'Intricate tonal paisley Jamawar weave',
      'Custom cast antique brass crest buttons',
      'Dual lower flap pockets and welt chest pocket',
      'Bemberg cupro satin lining with interior pocket'
    ],
    colors: [
      { name: 'Royal Navy Blue', hex: '#1C2951' },
      { name: 'Charcoal Brocade', hex: '#2B2B33' },
      { name: 'Champagne Gold', hex: '#C5A880' }
    ],
    sizes: ['38R', '40R', '42R', '44R', '46R'],
    images: [
      '/src/assets/images/product_jamawar_waistcoat_1792394428976.jpg',
      '/src/assets/images/hero_shalwar_kameez_1792394426422.jpg'
    ]
  },

  // 10. FOOTWEAR - KAPTAAN PESHAWARI CHAPPAL
  {
    id: 'ahc-010',
    name: 'Handcrafted Burnished Cognac Kaptaan Peshawari Chappal',
    slug: 'handcrafted-burnished-cognac-kaptaan-peshawari-chappal',
    category: 'footwear',
    categoryName: 'Artisanal Footwear',
    price: 9500,
    originalPrice: 11500,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.95,
    reviewCount: 63,
    inStock: true,
    stockCount: 12,
    shortDescription: 'Authentic Kaptaan-cut Peshawari chappal hand-stitched from full-grain cowhide leather with Goodyear tire tread sole.',
    description: 'The defining footwear of Pakistani heritage. Hand-crafted by master cobblers in Peshawar using full-grain vegetable-tanned cowhide leather. Each pair features hand-burnished cognac patina, perforated brogue detailing along the cross-straps, memory foam cushioned footbed, and durable recycled tire rubber soles built to last a lifetime.',
    fabric: '100% Full-Grain Vegetable Tanned Leather with Tyre Rubber Sole',
    origin: 'Handmade in Namak Mandi, Peshawar',
    fit: 'True to Pakistani/European footwear sizing with adjustable heel buckle',
    careInstructions: [
      'Apply natural beeswax leather cream monthly',
      'Keep away from prolonged soaking water',
      'Store in dry place with provided shoe trees or paper padding'
    ],
    features: [
      'Traditional Kaptaan wide cross-strap front design',
      'Heavy-duty hand-stitched nylon thread detailing',
      'Dual-density cushioned arch support inner sole',
      'Adjustable brass heel strap buckle for custom grip'
    ],
    colors: [
      { name: 'Burnished Cognac', hex: '#8B4513' },
      { name: 'Mustard Tan', hex: '#B8860B' },
      { name: 'Midnight Black', hex: '#161616' }
    ],
    sizes: ['40 (7 UK)', '41 (8 UK)', '42 (9 UK)', '43 (10 UK)', '44 (11 UK)', '45 (12 UK)'],
    images: [
      '/src/assets/images/product_peshawari_chappal_1792394429333.jpg'
    ]
  },

  // 11. CEREMONIAL - GROOM SHERWANI
  {
    id: 'ahc-011',
    name: 'The Emerald Sultan Hand-Embroidered Groom Sherwani',
    slug: 'emerald-sultan-hand-embroidered-groom-sherwani',
    category: 'ceremonial',
    categoryName: 'Royal Sherwanis & Prince Coats',
    price: 85000,
    originalPrice: 98000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 39,
    inStock: true,
    stockCount: 3,
    shortDescription: 'Regal bridal sherwani in pure emerald raw silk with over 120 hours of hand-done antique gold zardozi, tilla, and dabka work.',
    description: 'A masterpiece created for the discerning groom. Tailored from heavy handloom emerald green raw silk, featuring opulent Mughal floral paisleys embroidered by master zardozi artisans using antique matte gold bullion, French knots, and tilla thread. Accompanied by matching churidar pajama and complimentary brocade stole.',
    fabric: 'Pure Handloom Raw Silk with Antique Gold Zardozi Bullion Wire',
    origin: 'Master Atelier in Lahore & Islamabad',
    fit: 'Regal Royal Fit — Contoured waistline with structured flared skirt',
    careInstructions: [
      'Specialist dry clean only; protect hand metallic embroidery',
      'Store in padded velvet garment carrier with moisture absorbers',
      'Never spray direct perfume on metallic embroidery'
    ],
    features: [
      'Over 120 hours of authentic artisanal zardozi hand embroidery',
      'Mandarin stand collar with antique jewel crest buttons',
      'Includes matching ivory raw silk churidar and handcrafted stole',
      'Pure silk satin interior lining with personalized initials embroidery'
    ],
    colors: [
      { name: 'Emerald Green', hex: '#0F3826' },
      { name: 'Royal Ivory Gold', hex: '#F4E8C1' },
      { name: 'Midnight Velvet Noir', hex: '#111218' }
    ],
    sizes: ['38R', '40R', '42R', '44R', '46R'],
    images: [
      '/src/assets/images/product_royal_groom_sherwani_1792394429377.jpg',
      '/src/assets/images/hero_shalwar_kameez_1792394426422.jpg'
    ]
  },

  // 12. CEREMONIAL - VELVET PRINCE COAT
  {
    id: 'ahc-012',
    name: 'Imperial Velvet Embroidered Prince Coat',
    slug: 'imperial-velvet-embroidered-prince-coat',
    category: 'ceremonial',
    categoryName: 'Royal Sherwanis & Prince Coats',
    price: 38000,
    originalPrice: 45000,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.94,
    reviewCount: 35,
    inStock: true,
    stockCount: 5,
    shortDescription: 'Regal micro-velvet Prince Coat with antique gold zardozi shoulder epaulettes and crest buttons.',
    description: 'A majestic fusion of royal court attire and modern tailored silhouette. Cut from imported German micro-velvet with hand-embroidered antique gold bullion embroidery along the collar, shoulders, and cuffs. Perfect for Barat, Walima, and festive gala evenings.',
    fabric: '100% German Silk Micro-Velvet with Gold Tilla Thread',
    origin: 'Crafted in Lahore, Pakistan',
    fit: 'Structured Prince Coat — High stand collar, structured chest',
    careInstructions: [
      'Dry clean only by velvet specialists',
      'Always store in breathable cotton dust cover',
      'Never press iron directly onto velvet pile'
    ],
    features: [
      'Ornate zardozi embroidery on mandarin collar and shoulders',
      'Cast antique brass buttons with AL HAFIZ monogram crest',
      'Silk satin lining with interior chest pockets',
      'Includes matching pocket square'
    ],
    colors: [
      { name: 'Imperial Emerald', hex: '#0B3B24' },
      { name: 'Royal Midnight Black', hex: '#111217' },
      { name: 'Maroon Burgundy', hex: '#4A0E17' }
    ],
    sizes: ['38R', '40R', '42R', '44R', '46R'],
    images: [
      '/src/assets/images/product_regal_bandhgala_1792393305011.jpg',
      '/src/assets/images/hero_shalwar_kameez_1792394426422.jpg'
    ]
  },

  // 13. ACCESSORIES - GOLD CUFFLINKS & POCKET SQUARE
  {
    id: 'ahc-013',
    name: 'Hand-Chased 18k Gold Plated Royal Cufflinks & Silk Pocket Square',
    slug: 'hand-chased-gold-cufflinks-pocket-square',
    category: 'accessories',
    categoryName: 'Fine Accessories',
    price: 6500,
    originalPrice: 7800,
    isNew: false,
    isBestSeller: true,
    isFeatured: false,
    rating: 4.9,
    reviewCount: 58,
    inStock: true,
    stockCount: 20,
    shortDescription: 'Hand-engraved brass cufflinks with 18k champagne gold finish paired with a pure mulberry silk jacquard pocket square.',
    description: 'The ultimate royal accessory set for kurtas, waistcoats, and prince coats. Hand-chased by master silversmiths with arabesque Mughal filigree motifs. Accompanied by a pure woven silk pocket square in rich black and gold.',
    fabric: 'Solid Brass with 18k Champagne Gold Plating & 100% Mulberry Silk',
    origin: 'Handcrafted in Peshawar & Lahore',
    fit: 'Universal fit for all French cuffs and kurta placket rings',
    careInstructions: [
      'Wipe with soft jewelry microfiber cloth after wear',
      'Keep away from water, colognes, and harsh chemicals',
      'Store in provided velvet jewelry box'
    ],
    features: [
      'Hand-chased floral arabesque engraving',
      'Heavy gold plating designed to resist tarnishing',
      'Includes 100% woven mulberry silk formal pocket square',
      'Luxury presentation velvet box with gold logo stamping'
    ],
    colors: [
      { name: '18k Champagne Gold', hex: '#D4AF37' },
      { name: 'Antique Silver Rhodium', hex: '#C0C0C0' }
    ],
    sizes: ['One Size'],
    images: [
      '/src/assets/images/product_gold_cufflinks_1792393304755.jpg'
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Collections', description: 'The complete archive of luxury Men\'s Unstitched Fabrics, Shalwar Kameez, Kurtas, Waistcoats & Sherwanis' },
  { id: 'unstitched', name: 'Unstitched Fabrics', description: 'Pure 8-Pound Boski silk, Egyptian Giza cotton latha, Mughal Karandi, and Japanese wash & wear suits' },
  { id: 'shalwar-kameez', name: 'Luxury Shalwar Kameez', description: 'Stitched Egyptian Giza cotton, wash & wear, and raw silk suits with stiff Ban collars' },
  { id: 'waistcoats', name: 'Premium Waistcoats (Waskat)', description: 'Jamawar silk, jacquard brocade, and tailored festive waistcoats' },
  { id: 'kurta', name: 'Designer Kurtas', description: 'Wrinkle-free wash & wear and embroidered festive kurtas' },
  { id: 'ceremonial', name: 'Sherwanis & Prince Coats', description: 'Groom sherwanis and zardozi embroidered velvet prince coats' },
  { id: 'footwear', name: 'Artisanal Footwear', description: 'Handcrafted Kaptaan Peshawari chappals and royal khussas' },
  { id: 'accessories', name: 'Fine Accessories', description: '18k gold cufflinks, silk shawls, and pocket squares' },
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Malik Hamza Tariq',
    role: 'Managing Director, Lahore',
    rating: 5,
    date: 'October 2026',
    verified: true,
    title: 'Unstitched suit packaging and fabric quality is unmatched in Pakistan',
    comment: 'I ordered the AL HAFIZ Royal Gold Egyptian Cotton unstitched box. The rigid box, the gold selvedge border, the buttons, and thread spool were pure luxury. The tailor said it was the finest latha he had stitched in years. Received in Lahore in 24 hours!',
    productName: 'AL HAFIZ Royal Gold Egyptian Cotton Unstitched Suit Box'
  },
  {
    id: 'rev-2',
    author: 'Chaudhry Bilal Warraich',
    role: 'Advocate High Court, Karachi',
    rating: 5,
    date: 'September 2026',
    verified: true,
    title: 'Executive Charcoal Shalwar Kameez has the perfect ban collar fall',
    comment: 'The ban collar on this charcoal suit is razor sharp and comfortable around the neck. The wash-and-wear fabric does not wrinkle even after a full day in court and travel. Worth every Rupee.',
    productName: 'Executive Charcoal Wash & Wear Shalwar Kameez Suit'
  },
  {
    id: 'rev-3',
    author: 'Syed Zeeshan Ali',
    role: 'Groom & Creative Director, Islamabad',
    rating: 5,
    date: 'August 2026',
    verified: true,
    title: 'Original 8-Pound Boski silk is genuine pure luxury',
    comment: 'Finding authentic 8-pound Boski with real woven hallmark in Pakistan is difficult, but AL HAFIZ delivered the real deal. Buttery smooth fall and pristine cream luster. 10/10.',
    productName: 'The Royal Sovereign 8-Pound Pure Boski Silk Unstitched Fabric'
  }
];

export const BOUTIQUES = [
  {
    city: 'Lahore',
    address: 'MM Alam Road, Gulberg III, Lahore',
    phone: '+92 42 3575 8890',
    hours: 'Mon – Sat: 11:00 – 22:00',
    type: 'Flagship Atelier & Master Bespoke Lounge'
  },
  {
    city: 'Karachi',
    address: 'Zamzama Commercial, Phase V, DHA, Karachi',
    phone: '+92 21 3587 4421',
    hours: 'Mon – Sun: 12:00 – 23:00',
    type: 'Luxury Bridal & Bespoke Salon'
  },
  {
    city: 'Islamabad',
    address: 'Beverly Centre, Blue Area, Islamabad',
    phone: '+92 51 282 3311',
    hours: 'Mon – Sat: 11:00 – 22:00',
    type: 'Executive Menswear Boutique'
  },
  {
    city: 'Dubai',
    address: 'Fashion Avenue, The Dubai Mall, Downtown Dubai',
    phone: '+971 4 362 7500',
    hours: 'Mon – Sun: 10:00 – 23:00',
    type: 'International Heritage Suite'
  }
];
