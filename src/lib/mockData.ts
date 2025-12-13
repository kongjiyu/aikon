
import {
    Laptop,
    Smartphone,
    Tablet,
    Headphones,
    Watch,
    Gamepad2
} from 'lucide-react';

export interface ProductVariant {
    color: string;
    colorHex: string;
    storage?: string;
    ram?: string;
    price: number;
    stock: number;
}

export interface ProductSpecs {
    ram?: string;
    storage?: string;
    processor?: string;
    display?: string;
    camera?: string;
    battery?: string;
    os?: string;
    weight?: string;
    dimensions?: string;
    connectivity?: string;
    features?: string;
}

export interface Review {
    id: string;
    productId: string;
    customerId: string;
    customerName: string;
    rating: number;
    comment: string;
    date: string;
}

// Product Types
export interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    originalPrice?: number;
    stock: number;
    rating?: number;
    reviewsCount?: number;
    sales?: number;
    isSale?: boolean;
    image: string; // Primary thumbnail
    images?: string[]; // Gallery
    has3DModel?: boolean;
    modelPath?: string;
    colors?: string[]; // Hex codes
    colorNames?: string[]; // Color names corresponding to hex codes
    storageOptions?: string[]; // New: Available storage capacities
    tags?: string[]; // New: Subcategories/Tags (e.g., "Gaming Laptop", "Flagship")
    variants?: {
        color: string;
        colorHex: string;
        storage?: string;
        ram?: string;
        price: number;
        stock: number;
    }[];
    specifications?: {
        ram?: string;
        storage?: string;
        processor?: string;
        display?: string;
        camera?: string;
        battery?: string;
        os?: string;
        weight?: string;
        dimensions?: string;
        connectivity?: string;
        features?: string;
    };
    icon?: any;
    reviews?: Review[];
}

export interface Order {
    id: string;
    customerId: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    date: string;
    status: 'Delivered' | 'Pending' | 'Shipped' | 'Cancelled';
    payment: 'Paid' | 'Unpaid';
    items: {
        productId: string;
        qty: number;
        price: number;
    }[];
    total: number;
}

// Mock Data
export const mockProducts: Product[] = [
    {
        id: '1',
        name: 'ASUS TUF Gaming A15',
        description: 'Powerful gaming laptop with Ryzen 7 and RTX 3050. Built for durability and high-performance gaming on the go.',
        category: 'Laptop',
        tags: ['Gaming Laptop', 'TUF Gaming', 'High Performance'],
        price: 3499,
        originalPrice: 3999,
        stock: 50,
        rating: 4.8,
        reviewsCount: 120,
        sales: 450,
        isSale: true,
        image: '/images/homePage/asustufgaminga15.webp',
        specifications: {
            processor: 'AMD Ryzen 7 6800H',
            ram: '16GB DDR5',
            storage: '512GB NVMe SSD',
            display: '15.6" FHD 144Hz',
            battery: '90Wh',
            os: 'Windows 11 Home',
            weight: '2.20 kg'
        },
        colors: ['#2B2B2B'],
        icon: Laptop
    },
    {
        id: '2',
        name: 'iPhone 17 Pro Max',
        description: 'The ultimate iPhone with titanium design, A18 Pro chip, and advanced camera system.',
        category: 'Phone',
        tags: ['Apple', 'Flagship', 'iPhone 15 Pro', 'Smartphones'],
        price: 6999,
        originalPrice: 7299,
        stock: 25,
        rating: 4.9,
        reviewsCount: 350,
        sales: 1200,
        image: '/images/iphone17promax/9265d76e-7acd-4d42-becf-4537a5be56f9.webp', // Assuming this is the main one based on size/name or just picking first
        images: [
            '/images/iphone17promax/9265d76e-7acd-4d42-becf-4537a5be56f9.webp',
            '/images/iphone17promax/3f2c4b0a-e4b1-4b3f-b868-d02eb476c578.webp',
            '/images/iphone17promax/7727a4c0-b3f3-4927-9127-ca3ade840991.webp',
            '/images/iphone17promax/affb820b-5ce6-43eb-aecf-f19e46b36e17.webp',
            '/images/iphone17promax/8f616c17-f68d-4a29-a6cd-1e3058f09e6c.webp',
            '/images/iphone17promax/953eba60-7c22-4db0-a5a4-eca118d3e080.webp',
            '/images/iphone17promax/6316cc1d-f74b-4c1e-b71c-fb7033320fa7.webp',
            '/images/iphone17promax/d9ee9184-ea8a-43f4-b328-42dca1c4fa12.webp'
        ],
        specifications: {
            processor: 'A18 Pro chip',
            ram: '8GB',
            storage: '256GB',
            display: '6.7" Super Retina XDR',
            camera: '48MP Main | Ultra Wide | Telephoto',
            battery: '4422 mAh',
            os: 'iOS 18',
            weight: '221 g'
        },
        colors: ['#E87D3E', '#E2E4E1', '#1B2F4B'], // Cosmic Orange, Silver, Deep Blue
        colorNames: ['Cosmic Orange', 'Silver', 'Deep Blue'],
        storageOptions: ['256GB', '512GB', '1TB', '2TB'],
        icon: Smartphone,
        has3DModel: true,
        modelPath: '/iphone-17-pro-max-model/source/iphne Model.glb'
    },
    {
        id: '3',
        name: 'Samsung Galaxy Tab S9',
        description: 'Premium Android tablet with Dynamic AMOLED 2X display and S Pen included.',
        category: 'Tablets',
        tags: ['Samsung', 'Android Tablets', 'High Performance'],
        price: 3299,
        stock: 40,
        rating: 4.7,
        reviewsCount: 85,
        image: '/images/homePage/lenovoIdeaTabTB-336fu.png', // Using existing placeholder
        specifications: {
            processor: 'Snapdragon 8 Gen 2',
            ram: '12GB',
            storage: '256GB',
            display: '11" Dynamic AMOLED 2X',
            battery: '8400 mAh',
            os: 'Android 13'
        },
        colors: ['#E3E3E3', '#2C2C2C'],
        icon: Tablet
    },
    {
        id: '4',
        name: 'Sony WH-1000XM5',
        description: 'Industry-leading noise canceling headphones with exceptional sound quality.',
        category: 'Accessories',
        tags: ['Audio', 'Wireless Headsets', 'Noise Cancelling'],
        price: 1399,
        stock: 60,
        rating: 4.8,
        reviewsCount: 210,
        image: '/images/homePage/harmanKardonAuraStudio4.png', // Placeholder
        specifications: {
            connectivity: 'Bluetooth 5.2',
            battery: '30 Hours',
            features: 'ANC, Multipoint connection',
            weight: '250 g'
        },
        colors: ['#000000', '#F5F5F0'],
        icon: Headphones
    },
    {
        id: '5',
        name: 'ROG Strix G16',
        description: 'Dominating eSports dominance with i9-13980HX and RTX 4080.',
        category: 'Laptop',
        tags: ['Gaming Laptop', 'ROG - Republic of Gamers', 'High Performance'],
        price: 8999,
        stock: 15,
        rating: 4.9,
        reviewsCount: 45,
        image: '/images/homePage/acerAspireGo14.png', // Placeholder
        specifications: {
            processor: 'Intel Core i9-13980HX',
            ram: '32GB DDR5',
            storage: '1TB PCIe 4.0 NVMe',
            display: '16" QHD+ 240Hz',
            os: 'Windows 11 Pro'
        },
        colors: ['#0E0E0E'],
        icon: Laptop
    },
    {
        id: '6',
        name: 'Apple iMac 24"',
        description: 'Supercharged by M3 chip. The world’s best all-in-one computer.',
        category: 'Personal Computer',
        tags: ['All-in-One PCs', 'Apple Mac', 'Desktops'],
        price: 5999,
        stock: 30,
        rating: 4.8,
        reviewsCount: 90,
        image: '/images/homePage/appleimac2023.png',
        specifications: {
            processor: 'Apple M3',
            ram: '8GB Unified',
            storage: '256GB SSD',
            display: '24" 4.5K Retina',
            features: '1080p FaceTime HD camera'
        },
        colors: ['#3A84C3', '#E04F47', '#EED859', '#4EAB5D'],
        icon: Gamepad2
    },
    {
        id: '7',
        name: 'Xiaomi 15T Pro',
        description: 'Co-engineered with Leica for professional photography.',
        category: 'Phone',
        tags: ['Xiaomi', 'Smartphones', 'Flagship'],
        price: 2999,
        stock: 100,
        rating: 4.6,
        reviewsCount: 150,
        sales: 500,
        image: '/images/homePage/xiaomi15tpro.webp',
        specifications: {
            processor: 'Dimensity 9300+',
            camera: 'Leica Summilux lens',
            battery: '5000 mAh',
            display: '144Hz CrystalRes AMOLED'
        },
        colors: ['#000000', '#365D8B', '#A7A7A7'],
        icon: Smartphone
    },
    {
        id: '8',
        name: 'Logitech MX Master 3S',
        description: 'Performance wireless mouse with ultrafast scrolling and 8K DPI.',
        category: 'Accessories',
        tags: ['Mice and Mouse Pads', 'Ergonomic Mice', 'Peripherals'],
        price: 449,
        stock: 80,
        rating: 4.9,
        reviewsCount: 400,
        image: '/images/homePage/appleIphoneFineWovenWallet.png', // Placeholder
        specifications: {
            connectivity: 'Bluetooth + Bolt Receiver',
            battery: '70 Days',
            features: 'MagSpeed Wheel, Quiet Clicks'
        },
        colors: ['#1A1A1A', '#E6E6E6'],
        icon: Gamepad2
    }
];

export const mockOrders: Order[] = [
    {
        id: 'ORD0001',
        customerId: 'CUST001',
        customerName: 'John Doe',
        customerEmail: 'john.doe@example.com',
        customerPhone: '+1 234 567 890',
        date: '01-01-2025',
        status: 'Delivered',
        payment: 'Paid',
        items: [
            { productId: '5', qty: 1, price: 350.00 }
        ],
        total: 350.00
    },
    {
        id: 'ORD0002',
        customerId: 'CUST002',
        customerName: 'Jane Smith',
        customerEmail: 'jane.smith@example.com',
        customerPhone: '+1 987 654 321',
        date: '01-01-2025',
        status: 'Pending',
        payment: 'Unpaid',
        items: [
            { productId: '1', qty: 1, price: 1199.00 }
        ],
        total: 1199.00
    },
    {
        id: 'ORD0003',
        customerId: 'CUST003',
        customerName: 'Robert Johnson',
        customerEmail: 'robert.j@example.com',
        customerPhone: '+1 555 0123',
        date: '01-01-2025',
        status: 'Delivered',
        payment: 'Paid',
        items: [
            { productId: '2', qty: 1, price: 1299.00 }
        ],
        total: 1299.00
    },
    {
        id: 'ORD0004',
        customerId: 'CUST004',
        customerName: 'Emily Davis',
        customerEmail: 'emily.d@example.com',
        customerPhone: '+1 555 0124',
        date: '01-01-2025',
        status: 'Shipped',
        payment: 'Paid',
        items: [
            { productId: '6', qty: 1, price: 799.00 }
        ],
        total: 799.00
    },
    {
        id: 'ORD0005',
        customerId: 'CUST001',
        customerName: 'John Doe',
        customerEmail: 'john.doe@example.com',
        customerPhone: '+1 234 567 890',
        date: '01-01-2025',
        status: 'Pending',
        payment: 'Unpaid',
        items: [
            { productId: '7', qty: 1, price: 69.00 }
        ],
        total: 69.00
    },
    {
        id: 'ORD0006',
        customerId: 'CUST005',
        customerName: 'Michael Wilson',
        customerEmail: 'm.wilson@example.com',
        customerPhone: '+1 555 0199',
        date: '01-01-2025',
        status: 'Cancelled',
        payment: 'Unpaid',
        items: [
            { productId: '3', qty: 1, price: 1299.00 }
        ],
        total: 1299.00
    },
    {
        id: 'ORD0007',
        customerId: 'CUST002',
        customerName: 'Jane Smith',
        customerEmail: 'jane.smith@example.com',
        customerPhone: '+1 987 654 321',
        date: '01-01-2025',
        status: 'Delivered',
        payment: 'Paid',
        items: [
            { productId: '4', qty: 1, price: 1099.00 }
        ],
        total: 1099.00
    },
    {
        id: 'ORD0008',
        customerId: 'CUST003',
        customerName: 'Robert Johnson',
        customerEmail: 'robert.j@example.com',
        customerPhone: '+1 555 0123',
        date: '01-01-2025',
        status: 'Delivered',
        payment: 'Paid',
        items: [
            { productId: '8', qty: 1, price: 249.00 }
        ],
        total: 249.00
    }
];

export interface CartItem {
    id: string;
    productId: string;
    variant: string;
    storage: string;
    qty: number;
    checked: boolean;
}

export const initialCartItems: CartItem[] = [
    {
        id: 'cart-1',
        productId: '2',
        variant: 'Cosmic Orange',
        storage: '512GB',
        qty: 1,
        checked: true
    },
    {
        id: 'cart-2',
        productId: '7',
        variant: 'Default',
        storage: '256GB',
        qty: 1,
        checked: true
    }
];
