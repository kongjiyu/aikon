// Mock Data for AIKON E-commerce Platform

// Order Status Type
export type OrderStatus = 'delivered' | 'cancelled' | 'pending';

// Order Interface
export interface Order {
  id: string;
  productName: string;
  productImage: string;
  miniImage: string;
  color: string;
  storage?: string;
  price: number;
  quantity: number;
  date: string;
  status: OrderStatus;
}

// Mock Orders Data
export const mockOrders: Order[] = [
  {
    id: '1',
    productName: 'AirPods Max',
    productImage: '/images/myOrder3.png',
    miniImage: '/images/myOrder3.png',
    color: 'Space Gray',
    price: 2599.00,
    quantity: 1,
    date: '01-01-2025',
    status: 'delivered',
  },
  {
    id: '2',
    productName: 'Asus vivobook Pro 16X',
    productImage: '/images/myOrder5.png',
    miniImage: '/images/myOrder5.png',
    color: 'Pure Green',
    storage: '320GB',
    price: 4875.00,
    quantity: 1,
    date: '01-01-2025',
    status: 'cancelled',
  },
  {
    id: '3',
    productName: 'Ipad 2035',
    productImage: '/images/myOrder4.png',
    miniImage: '/images/myOrder4.png',
    color: 'Pure Black',
    storage: '320GB',
    price: 2035.00,
    quantity: 1,
    date: '01-01-2025',
    status: 'pending',
  },
  {
    id: '4',
    productName: 'iPhone 19 Pro Plus',
    productImage: '/images/orderPhone.jpg',
    miniImage: '/images/myOrder1.png',
    color: 'Orange',
    storage: '250GB',
    price: 3475.04,
    quantity: 1,
    date: '01-01-2025',
    status: 'delivered',
  },
  {
    id: '5',
    productName: 'Apex Fox Mouse',
    productImage: '/images/myOrder2.png',
    miniImage: '/images/myOrder2.png',
    color: 'Light Green',
    price: 2599.00,
    quantity: 1,
    date: '01-01-2025',
    status: 'delivered',
  },
];

// Product Interface
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  brand?: string;
  inStock: boolean;
  rating?: number;
  reviews?: number;
}

// Mock Products Data
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'AirPods Max',
    price: 2599.00,
    image: '/images/myOrder3.png',
    category: 'Audio',
    brand: 'Apple',
    inStock: true,
    rating: 4.5,
    reviews: 120,
  },
  {
    id: '2',
    name: 'Asus vivobook Pro 16X',
    price: 4875.00,
    image: '/images/myOrder5.png',
    category: 'Laptops',
    brand: 'Asus',
    inStock: true,
    rating: 4.7,
    reviews: 85,
  },
  {
    id: '3',
    name: 'Ipad 2035',
    price: 2035.00,
    image: '/images/myOrder4.png',
    category: 'Tablets',
    brand: 'Apple',
    inStock: false,
    rating: 4.8,
    reviews: 200,
  },
  {
    id: '4',
    name: 'iPhone 18 Pro Plus',
    price: 3475.04,
    image: '/images/myOrder1.png',
    category: 'Smartphones',
    brand: 'Apple',
    inStock: true,
    rating: 4.9,
    reviews: 350,
  },
  {
    id: '5',
    name: 'Apex Fox Mouse',
    price: 2599.00,
    image: '/images/myOrder2.png',
    category: 'Accessories',
    brand: 'Apex',
    inStock: true,
    rating: 4.3,
    reviews: 75,
  },
];

// User Interface
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

// Mock User Data
export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+60 12-345 6789',
  address: '123 Tech Street',
  city: 'Kuala Lumpur',
  state: 'Federal Territory',
  zipCode: '50000',
  country: 'Malaysia',
};

// Category Interface
export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  productCount?: number;
}

// Mock Categories Data
export const mockCategories: Category[] = [
  { id: '1', name: 'Smartphones', slug: 'smartphones', productCount: 45 },
  { id: '2', name: 'Laptops', slug: 'laptops', productCount: 32 },
  { id: '3', name: 'Tablets', slug: 'tablets', productCount: 28 },
  { id: '4', name: 'Audio', slug: 'audio', productCount: 67 },
  { id: '5', name: 'Accessories', slug: 'accessories', productCount: 120 },
  { id: '6', name: 'Smart Home', slug: 'smart-home', productCount: 54 },
  { id: '7', name: 'Wearables', slug: 'wearables', productCount: 38 },
  { id: '8', name: 'Gaming', slug: 'gaming', productCount: 92 },
];

// Voucher Interface
export interface Voucher {
  id: string;
  code: string;
  discount: number;
  discountType: 'percentage' | 'fixed';
  minPurchase?: number;
  maxDiscount?: number;
  expiryDate: string;
  isActive: boolean;
}

// Mock Vouchers Data
export const mockVouchers: Voucher[] = [
  {
    id: '1',
    code: 'WELCOME10',
    discount: 10,
    discountType: 'percentage',
    minPurchase: 100,
    maxDiscount: 50,
    expiryDate: '2025-12-31',
    isActive: true,
  },
  {
    id: '2',
    code: 'SAVE20',
    discount: 20,
    discountType: 'fixed',
    minPurchase: 200,
    expiryDate: '2025-06-30',
    isActive: true,
  },
  {
    id: '3',
    code: 'NEWUSER',
    discount: 15,
    discountType: 'percentage',
    minPurchase: 50,
    maxDiscount: 100,
    expiryDate: '2025-12-31',
    isActive: true,
  },
];

// Product Comparison Interfaces
export interface ComparisonProduct {
  id: string;
  category: 'phone' | 'laptop' | 'tablet' | 'accessory';
  brand: string;
  model: string;
  name: string;
  image: string;
  price: number;
  colors: string[];
  specifications: {
    // Display
    display?: {
      size: string;
      type: string;
      resolution: string;
      brightness?: string;
      refreshRate?: string;
      features?: string[];
    };
    // Chip & Performance
    chip?: {
      name: string;
      cpu: string;
      gpu: string;
      neuralEngine?: string;
    };
    // Camera
    camera?: {
      main?: string;
      ultraWide?: string;
      telephoto?: string;
      front?: string;
      features?: string[];
      videoRecording?: string[];
    };
    // Battery & Charging
    battery?: {
      videoPlayback: string;
      audioPlayback?: string;
      charging?: string[];
    };
    // Storage Options
    storage?: string[];
    // Memory
    memory?: string;
    // Connectivity
    connectivity?: string[];
    // Dimensions & Weight
    dimensions?: {
      height: string;
      width: string;
      depth: string;
      weight: string;
    };
    // Operating System
    os?: string;
    // Processor (for laptops)
    processor?: {
      name: string;
      cores: string;
      speed: string;
    };
    // Graphics (for laptops)
    graphics?: string;
    // Ports
    ports?: string[];
    // Keyboard & Input
    keyboard?: string;
    trackpad?: string;
    // Audio
    audio?: string[];
    // Security
    security?: string[];
    // Additional Features
    additionalFeatures?: string[];
  };
}

// iPhone Comparison Data
export const iPhoneModels: ComparisonProduct[] = [
  {
    id: 'iphone-16-pro-max',
    category: 'phone',
    brand: 'Apple',
    model: 'iPhone 16 Pro Max',
    name: 'iPhone 16 Pro Max',
    image: '/images/iphone-16-pro-max.png',
    price: 5499.00,
    colors: ['Black Titanium', 'White Titanium', 'Natural Titanium', 'Desert Titanium'],
    specifications: {
      display: {
        size: '6.9-inch',
        type: 'Super Retina XDR display with ProMotion',
        resolution: '2868 x 1320 pixels at 460 ppi',
        brightness: '2000 nits peak brightness (outdoor)',
        refreshRate: '1-120Hz adaptive',
        features: [
          'Always-On display',
          'Dynamic Island',
          'HDR display',
          'True Tone',
          'Wide color (P3)',
          'Haptic Touch',
          'Ceramic Shield front',
        ],
      },
      chip: {
        name: 'A18 Pro chip',
        cpu: '6-core CPU with 2 performance and 4 efficiency cores',
        gpu: '6-core GPU',
        neuralEngine: '16-core Neural Engine',
      },
      camera: {
        main: '48MP Fusion: 24mm, ƒ/1.78 aperture, sensor-shift OIS',
        ultraWide: '48MP Ultra Wide: 13mm, ƒ/2.2 aperture',
        telephoto: '12MP 5x Telephoto: 120mm, ƒ/2.8 aperture',
        front: '12MP TrueDepth front camera with ƒ/1.9 aperture',
        features: [
          'Night mode',
          'Deep Fusion',
          'Smart HDR 5',
          'Photographic Styles',
          'ProRAW',
          'ProRes',
          'Macro photography',
          'Portrait mode with Focus and Depth Control',
          'Portrait Lighting',
          'LiDAR Scanner',
        ],
        videoRecording: [
          '4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps',
          '1080p HD video recording at 25 fps, 30 fps, or 60 fps',
          'ProRes video recording up to 4K at 60 fps',
          'Cinematic mode up to 4K HDR at 30 fps',
          'Action mode up to 2.8K at 60 fps',
          'Dolby Vision HDR video recording',
        ],
      },
      battery: {
        videoPlayback: 'Up to 33 hours',
        audioPlayback: 'Up to 105 hours',
        charging: [
          'Fast charging (50% in 30 minutes with 20W adapter)',
          'MagSafe wireless charging up to 25W',
          'Qi2 wireless charging up to 15W',
          'Qi wireless charging up to 7.5W',
        ],
      },
      storage: ['256GB', '512GB', '1TB'],
      connectivity: [
        '5G (sub‑6 GHz and mmWave)',
        'Gigabit LTE',
        'Wi‑Fi 7 (802.11be)',
        'Bluetooth 5.3',
        'Ultra Wideband 2',
        'NFC with reader mode',
        'Satellite',
      ],
      dimensions: {
        height: '163.0 mm',
        width: '77.6 mm',
        depth: '8.25 mm',
        weight: '227 g',
      },
      os: 'iOS 18',
      security: [
        'Face ID',
        'Emergency SOS via satellite',
        'Crash Detection',
        'Roadside Assistance via satellite',
      ],
      additionalFeatures: [
        'Titanium design',
        'Grade 5 titanium (aerospace-grade)',
        'IP68 water resistance (6 meters for 30 minutes)',
        'Action button',
        'Camera Control',
      ],
    },
  },
  {
    id: 'iphone-16-pro',
    category: 'phone',
    brand: 'Apple',
    model: 'iPhone 16 Pro',
    name: 'iPhone 16 Pro',
    image: '/images/iphone-16-pro.png',
    price: 4899.00,
    colors: ['Black Titanium', 'White Titanium', 'Natural Titanium', 'Desert Titanium'],
    specifications: {
      display: {
        size: '6.3-inch',
        type: 'Super Retina XDR display with ProMotion',
        resolution: '2622 x 1206 pixels at 460 ppi',
        brightness: '2000 nits peak brightness (outdoor)',
        refreshRate: '1-120Hz adaptive',
        features: [
          'Always-On display',
          'Dynamic Island',
          'HDR display',
          'True Tone',
          'Wide color (P3)',
          'Haptic Touch',
          'Ceramic Shield front',
        ],
      },
      chip: {
        name: 'A18 Pro chip',
        cpu: '6-core CPU with 2 performance and 4 efficiency cores',
        gpu: '6-core GPU',
        neuralEngine: '16-core Neural Engine',
      },
      camera: {
        main: '48MP Fusion: 24mm, ƒ/1.78 aperture, sensor-shift OIS',
        ultraWide: '48MP Ultra Wide: 13mm, ƒ/2.2 aperture',
        telephoto: '12MP 5x Telephoto: 120mm, ƒ/2.8 aperture',
        front: '12MP TrueDepth front camera with ƒ/1.9 aperture',
        features: [
          'Night mode',
          'Deep Fusion',
          'Smart HDR 5',
          'Photographic Styles',
          'ProRAW',
          'ProRes',
          'Macro photography',
          'Portrait mode with Focus and Depth Control',
          'Portrait Lighting',
          'LiDAR Scanner',
        ],
        videoRecording: [
          '4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps',
          '1080p HD video recording at 25 fps, 30 fps, or 60 fps',
          'ProRes video recording up to 4K at 60 fps',
          'Cinematic mode up to 4K HDR at 30 fps',
          'Action mode up to 2.8K at 60 fps',
          'Dolby Vision HDR video recording',
        ],
      },
      battery: {
        videoPlayback: 'Up to 27 hours',
        audioPlayback: 'Up to 85 hours',
        charging: [
          'Fast charging (50% in 30 minutes with 20W adapter)',
          'MagSafe wireless charging up to 25W',
          'Qi2 wireless charging up to 15W',
          'Qi wireless charging up to 7.5W',
        ],
      },
      storage: ['128GB', '256GB', '512GB', '1TB'],
      connectivity: [
        '5G (sub‑6 GHz and mmWave)',
        'Gigabit LTE',
        'Wi‑Fi 7 (802.11be)',
        'Bluetooth 5.3',
        'Ultra Wideband 2',
        'NFC with reader mode',
        'Satellite',
      ],
      dimensions: {
        height: '149.6 mm',
        width: '71.5 mm',
        depth: '8.25 mm',
        weight: '199 g',
      },
      os: 'iOS 18',
      security: [
        'Face ID',
        'Emergency SOS via satellite',
        'Crash Detection',
        'Roadside Assistance via satellite',
      ],
      additionalFeatures: [
        'Titanium design',
        'Grade 5 titanium (aerospace-grade)',
        'IP68 water resistance (6 meters for 30 minutes)',
        'Action button',
        'Camera Control',
      ],
    },
  },
  {
    id: 'iphone-16',
    category: 'phone',
    brand: 'Apple',
    model: 'iPhone 16',
    name: 'iPhone 16',
    image: '/images/iphone-16.png',
    price: 3899.00,
    colors: ['Black', 'White', 'Pink', 'Teal', 'Ultramarine'],
    specifications: {
      display: {
        size: '6.1-inch',
        type: 'Super Retina XDR display',
        resolution: '2556 x 1179 pixels at 460 ppi',
        brightness: '2000 nits peak brightness (outdoor)',
        refreshRate: '60Hz',
        features: [
          'Dynamic Island',
          'HDR display',
          'True Tone',
          'Wide color (P3)',
          'Haptic Touch',
          'Ceramic Shield front',
        ],
      },
      chip: {
        name: 'A18 chip',
        cpu: '6-core CPU with 2 performance and 4 efficiency cores',
        gpu: '5-core GPU',
        neuralEngine: '16-core Neural Engine',
      },
      camera: {
        main: '48MP Fusion: 26mm, ƒ/1.6 aperture, sensor-shift OIS',
        ultraWide: '12MP Ultra Wide: 13mm, ƒ/2.4 aperture',
        front: '12MP TrueDepth front camera with ƒ/1.9 aperture',
        features: [
          'Night mode',
          'Deep Fusion',
          'Smart HDR 5',
          'Photographic Styles',
          'Macro photography',
          'Portrait mode with Focus and Depth Control',
          'Portrait Lighting',
        ],
        videoRecording: [
          '4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps',
          '1080p HD video recording at 25 fps, 30 fps, or 60 fps',
          'Cinematic mode up to 4K HDR at 30 fps',
          'Action mode up to 2.8K at 60 fps',
          'Dolby Vision HDR video recording',
        ],
      },
      battery: {
        videoPlayback: 'Up to 22 hours',
        audioPlayback: 'Up to 80 hours',
        charging: [
          'Fast charging (50% in 30 minutes with 20W adapter)',
          'MagSafe wireless charging up to 25W',
          'Qi2 wireless charging up to 15W',
          'Qi wireless charging up to 7.5W',
        ],
      },
      storage: ['128GB', '256GB', '512GB'],
      connectivity: [
        '5G (sub‑6 GHz and mmWave)',
        'Gigabit LTE',
        'Wi‑Fi 7 (802.11be)',
        'Bluetooth 5.3',
        'Ultra Wideband 2',
        'NFC with reader mode',
        'Satellite',
      ],
      dimensions: {
        height: '147.6 mm',
        width: '71.6 mm',
        depth: '7.80 mm',
        weight: '170 g',
      },
      os: 'iOS 18',
      security: [
        'Face ID',
        'Emergency SOS via satellite',
        'Crash Detection',
        'Roadside Assistance via satellite',
      ],
      additionalFeatures: [
        'Aerospace-grade aluminum',
        'Color-infused glass back',
        'IP68 water resistance (6 meters for 30 minutes)',
        'Action button',
        'Camera Control',
      ],
    },
  },
  {
    id: 'iphone-15',
    category: 'phone',
    brand: 'Apple',
    model: 'iPhone 15',
    name: 'iPhone 15',
    image: '/images/iphone-15.png',
    price: 3299.00,
    colors: ['Black', 'Blue', 'Green', 'Yellow', 'Pink'],
    specifications: {
      display: {
        size: '6.1-inch',
        type: 'Super Retina XDR display',
        resolution: '2556 x 1179 pixels at 460 ppi',
        brightness: '2000 nits peak brightness (outdoor)',
        refreshRate: '60Hz',
        features: [
          'Dynamic Island',
          'HDR display',
          'True Tone',
          'Wide color (P3)',
          'Haptic Touch',
          'Ceramic Shield front',
        ],
      },
      chip: {
        name: 'A16 Bionic chip',
        cpu: '6-core CPU with 2 performance and 4 efficiency cores',
        gpu: '5-core GPU',
        neuralEngine: '16-core Neural Engine',
      },
      camera: {
        main: '48MP Main: 26mm, ƒ/1.6 aperture, sensor-shift OIS',
        ultraWide: '12MP Ultra Wide: 13mm, ƒ/2.4 aperture',
        front: '12MP TrueDepth front camera with ƒ/1.9 aperture',
        features: [
          'Night mode',
          'Deep Fusion',
          'Smart HDR 4',
          'Photographic Styles',
          'Portrait mode with Focus and Depth Control',
          'Portrait Lighting',
        ],
        videoRecording: [
          '4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps',
          '1080p HD video recording at 25 fps, 30 fps, or 60 fps',
          'Cinematic mode up to 4K HDR at 30 fps',
          'Action mode up to 2.8K at 60 fps',
          'Dolby Vision HDR video recording',
        ],
      },
      battery: {
        videoPlayback: 'Up to 20 hours',
        audioPlayback: 'Up to 80 hours',
        charging: [
          'Fast charging (50% in 30 minutes with 20W adapter)',
          'MagSafe wireless charging up to 15W',
          'Qi wireless charging up to 7.5W',
        ],
      },
      storage: ['128GB', '256GB', '512GB'],
      connectivity: [
        '5G (sub‑6 GHz and mmWave)',
        'Gigabit LTE',
        'Wi‑Fi 6 (802.11ax)',
        'Bluetooth 5.3',
        'Ultra Wideband',
        'NFC with reader mode',
        'Satellite',
      ],
      dimensions: {
        height: '147.6 mm',
        width: '71.6 mm',
        depth: '7.80 mm',
        weight: '171 g',
      },
      os: 'iOS 17 (upgradable to iOS 18)',
      security: [
        'Face ID',
        'Emergency SOS via satellite',
        'Crash Detection',
        'Roadside Assistance via satellite',
      ],
      additionalFeatures: [
        'Aerospace-grade aluminum',
        'Color-infused glass back',
        'IP68 water resistance (6 meters for 30 minutes)',
        'USB-C connector',
      ],
    },
  },
];

// Laptop Comparison Data
export const laptopModels: ComparisonProduct[] = [
  {
    id: 'macbook-pro-16-m3-max',
    category: 'laptop',
    brand: 'Apple',
    model: 'MacBook Pro 16" M3 Max',
    name: 'MacBook Pro 16-inch M3 Max',
    image: '/images/macbook-pro-16.png',
    price: 11999.00,
    colors: ['Space Black', 'Silver'],
    specifications: {
      display: {
        size: '16.2-inch',
        type: 'Liquid Retina XDR display',
        resolution: '3456 x 2234 pixels (254 ppi)',
        brightness: '1600 nits peak brightness (HDR)',
        refreshRate: '120Hz ProMotion',
        features: [
          'XDR (Extreme Dynamic Range)',
          'P3 wide color gamut',
          'True Tone technology',
          '1,000,000:1 contrast ratio',
        ],
      },
      chip: {
        name: 'Apple M3 Max chip',
        cpu: '16-core CPU (12 performance, 4 efficiency)',
        gpu: 'Up to 40-core GPU',
        neuralEngine: '16-core Neural Engine',
      },
      memory: 'Up to 128GB unified memory',
      storage: ['512GB', '1TB', '2TB', '4TB', '8TB'],
      battery: {
        videoPlayback: 'Up to 22 hours',
        audioPlayback: 'Up to 22 hours wireless web',
        charging: ['MagSafe 3 charging port', '140W USB-C Power Adapter'],
      },
      ports: [
        'Three Thunderbolt 4 (USB-C) ports',
        'HDMI port',
        'SDXC card slot',
        'MagSafe 3 port',
        '3.5 mm headphone jack',
      ],
      connectivity: [
        'Wi-Fi 6E (802.11ax)',
        'Bluetooth 5.3',
      ],
      keyboard: 'Backlit Magic Keyboard with Touch ID',
      trackpad: 'Force Touch trackpad',
      audio: [
        'Six-speaker sound system with force-cancelling woofers',
        'Wide stereo sound',
        'Spatial audio support',
        'Studio-quality three-mic array',
      ],
      camera: {
        front: '1080p FaceTime HD camera',
      },
      dimensions: {
        height: '1.68 cm',
        width: '35.57 cm',
        depth: '24.81 cm',
        weight: '2.16 kg (M3 Max)',
      },
      os: 'macOS Sonoma',
      security: ['Touch ID', 'Apple T2 Security Chip'],
      additionalFeatures: [
        'Space Black finish with breakthrough chemistry',
        'Up to 8TB SSD',
        'Support for up to four external displays',
      ],
    },
  },
  {
    id: 'macbook-air-15-m3',
    category: 'laptop',
    brand: 'Apple',
    model: 'MacBook Air 15" M3',
    name: 'MacBook Air 15-inch M3',
    image: '/images/macbook-air-15.png',
    price: 5999.00,
    colors: ['Midnight', 'Starlight', 'Space Gray', 'Silver'],
    specifications: {
      display: {
        size: '15.3-inch',
        type: 'Liquid Retina display',
        resolution: '2880 x 1864 pixels (224 ppi)',
        brightness: '500 nits brightness',
        features: [
          'P3 wide color gamut',
          'True Tone technology',
          '1 billion colors',
        ],
      },
      chip: {
        name: 'Apple M3 chip',
        cpu: '8-core CPU (4 performance, 4 efficiency)',
        gpu: 'Up to 10-core GPU',
        neuralEngine: '16-core Neural Engine',
      },
      memory: 'Up to 24GB unified memory',
      storage: ['256GB', '512GB', '1TB', '2TB'],
      battery: {
        videoPlayback: 'Up to 18 hours',
        audioPlayback: 'Up to 18 hours wireless web',
        charging: ['MagSafe 3 charging port', '70W USB-C Power Adapter'],
      },
      ports: [
        'Two Thunderbolt / USB 4 ports',
        'MagSafe 3 charging port',
        '3.5 mm headphone jack',
      ],
      connectivity: [
        'Wi-Fi 6E (802.11ax)',
        'Bluetooth 5.3',
      ],
      keyboard: 'Backlit Magic Keyboard with Touch ID',
      trackpad: 'Force Touch trackpad',
      audio: [
        'Six-speaker sound system with force-cancelling woofers',
        'Wide stereo sound',
        'Spatial audio support',
        'Three-mic array with directional beamforming',
      ],
      camera: {
        front: '1080p FaceTime HD camera',
      },
      dimensions: {
        height: '1.15 cm',
        width: '34.04 cm',
        depth: '23.76 cm',
        weight: '1.51 kg',
      },
      os: 'macOS Sonoma',
      security: ['Touch ID'],
      additionalFeatures: [
        'Fanless design',
        'Incredibly thin at 11.5 mm',
        'Support for up to two external displays',
      ],
    },
  },
  {
    id: 'asus-vivobook-pro-16x',
    category: 'laptop',
    brand: 'ASUS',
    model: 'Vivobook Pro 16X',
    name: 'ASUS Vivobook Pro 16X OLED',
    image: '/images/myOrder5.png',
    price: 4875.00,
    colors: ['Quiet Blue', 'Cool Silver'],
    specifications: {
      display: {
        size: '16-inch',
        type: '4K OLED NanoEdge display',
        resolution: '3840 x 2400 pixels (283 ppi)',
        brightness: '400 nits',
        refreshRate: '60Hz',
        features: [
          '100% DCI-P3 color gamut',
          'PANTONE Validated',
          'VESA DisplayHDR True Black 500',
          '0.2ms response time',
        ],
      },
      processor: {
        name: 'AMD Ryzen 9 5900HX',
        cores: '8-core, 16-thread',
        speed: 'Up to 4.6 GHz',
      },
      graphics: 'NVIDIA GeForce RTX 3050 Ti Laptop GPU (4GB GDDR6)',
      memory: 'Up to 32GB DDR4 3200MHz',
      storage: ['512GB', '1TB PCIe 3.0 NVMe M.2 SSD'],
      battery: {
        videoPlayback: 'Up to 7 hours',
        charging: ['90W power adapter', 'USB-C fast charging support'],
      },
      ports: [
        '1x USB 3.2 Gen 1 Type-C',
        '1x USB 3.2 Gen 1 Type-A',
        '2x USB 2.0 Type-A',
        '1x HDMI 2.1',
        '1x 3.5mm combo audio jack',
        '1x MicroSD card reader',
      ],
      connectivity: [
        'Wi-Fi 6 (802.11ax)',
        'Bluetooth 5.1',
      ],
      keyboard: 'Backlit chiclet keyboard with NumberPad 2.0',
      trackpad: 'Precision touchpad',
      audio: [
        'Built-in speaker',
        'Built-in array microphone',
        'Harman Kardon certified audio',
      ],
      camera: {
        front: '720p HD webcam',
      },
      dimensions: {
        height: '1.99 cm',
        width: '35.99 cm',
        depth: '25.50 cm',
        weight: '1.95 kg',
      },
      os: 'Windows 11 Home',
      security: ['Fingerprint sensor', 'Windows Hello support'],
      additionalFeatures: [
        'DialPad for creative control',
        'ASUS IceCool Plus thermal technology',
        'MyASUS software suite',
      ],
    },
  },
  {
    id: 'dell-xps-15',
    category: 'laptop',
    brand: 'Dell',
    model: 'XPS 15',
    name: 'Dell XPS 15',
    image: '/images/dell-xps-15.png',
    price: 7999.00,
    colors: ['Platinum Silver', 'Graphite'],
    specifications: {
      display: {
        size: '15.6-inch',
        type: 'InfinityEdge OLED display',
        resolution: '3456 x 2160 pixels (282 ppi)',
        brightness: '400 nits',
        refreshRate: '60Hz',
        features: [
          '100% DCI-P3 color gamut',
          'Dolby Vision',
          'VESA DisplayHDR 500',
          'Touch screen option',
        ],
      },
      processor: {
        name: 'Intel Core i7-13700H',
        cores: '14-core (6P + 8E)',
        speed: 'Up to 5.0 GHz',
      },
      graphics: 'NVIDIA GeForce RTX 4050 (6GB GDDR6)',
      memory: 'Up to 64GB DDR5 4800MHz',
      storage: ['512GB', '1TB', '2TB PCIe 4.0 NVMe M.2 SSD'],
      battery: {
        videoPlayback: 'Up to 13 hours',
        charging: ['130W power adapter', 'Express Charge'],
      },
      ports: [
        '2x Thunderbolt 4 (USB-C)',
        '1x USB-C 3.2',
        '1x SD card reader (SD 7.0)',
        '1x 3.5mm headphone/microphone combo jack',
      ],
      connectivity: [
        'Wi-Fi 6E (802.11ax)',
        'Bluetooth 5.2',
      ],
      keyboard: 'Backlit keyboard',
      trackpad: 'Precision touchpad',
      audio: [
        'Quad speaker design (2x 2W woofer + 2x 2W tweeter)',
        'Waves Nx 3D audio',
        'Dual-array microphones',
      ],
      camera: {
        front: '720p HD RGB + IR camera with Windows Hello',
      },
      dimensions: {
        height: '1.80 cm',
        width: '34.40 cm',
        depth: '23.00 cm',
        weight: '1.92 kg',
      },
      os: 'Windows 11 Pro',
      security: ['Fingerprint reader', 'IR camera for Windows Hello', 'TPM 2.0'],
      additionalFeatures: [
        'CNC machined aluminum chassis',
        'Carbon fiber palm rest',
        'Dell Optimizer with ExpressConnect',
      ],
    },
  },
];

// All comparison products
export const allComparisonProducts: ComparisonProduct[] = [
  ...iPhoneModels,
  ...laptopModels,
];

