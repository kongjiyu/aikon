
import {
    Laptop,
    Smartphone,
    Tablet,
    Headphones,
    Watch,
    Gamepad2
} from 'lucide-react';

export interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    stock: number;
    image: string; // Primary thumbnail
    images: string[]; // Gallery
    colors: string[]; // Hex codes
    colorNames?: string[]; // Color names corresponding to hex codes
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
    };
    icon?: any;
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

export const mockProducts: Product[] = [
    {
        id: 'PROD001',
        name: 'iPhone 15 Pro Max',
        description: 'Titanium design, A17 Pro chip, 48MP Main camera, and USB-C.',
        category: 'Smartphones',
        price: 1199.00,
        stock: 45,
        image: 'https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/1.png',
        images: [
            'https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/1.png',
            'https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/2.png',
            'https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/3.png'
        ],
        colors: ['#3C3C3D', '#F2F1ED', '#2F4F4F', '#4A4A4A'],
        colorNames: ['Natural Titanium', 'White Titanium', 'Blue Titanium', 'Black Titanium'],
        variants: [
            { color: 'Natural Titanium', colorHex: '#3C3C3D', storage: '256GB', ram: '8GB', price: 1199.00, stock: 15 },
            { color: 'Natural Titanium', colorHex: '#3C3C3D', storage: '512GB', ram: '8GB', price: 1399.00, stock: 12 },
            { color: 'Natural Titanium', colorHex: '#3C3C3D', storage: '1TB', ram: '8GB', price: 1599.00, stock: 8 },
            { color: 'White Titanium', colorHex: '#F2F1ED', storage: '256GB', ram: '8GB', price: 1199.00, stock: 10 },
        ],
        specifications: {
            ram: '8GB',
            storage: '256GB / 512GB / 1TB',
            processor: 'A17 Pro chip',
            display: '6.7" Super Retina XDR display with ProMotion',
            camera: '48MP Main | 12MP Ultra Wide | 12MP 2x Telephoto | 12MP 5x Telephoto',
            battery: 'Up to 29 hours video playback',
            os: 'iOS 17',
            weight: '221g',
            dimensions: '159.9 x 76.7 x 8.25 mm'
        },
        icon: Smartphone
    },
    {
        id: 'PROD002',
        name: 'MacBook Air 15" M3',
        description: 'Supercharged by M3, the 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.',
        category: 'Laptops',
        price: 1299.00,
        stock: 28,
        image: 'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png',
        images: [
            'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png',
            'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png'
        ],
        colors: ['#2E2E30', '#E3E4E5', '#F0E5D3', '#1A1A1A'],
        colorNames: ['Space Gray', 'Silver', 'Starlight', 'Midnight'],
        variants: [
            { color: 'Space Gray', colorHex: '#2E2E30', storage: '256GB SSD', ram: '8GB', price: 1299.00, stock: 10 },
            { color: 'Space Gray', colorHex: '#2E2E30', storage: '512GB SSD', ram: '8GB', price: 1499.00, stock: 8 },
            { color: 'Space Gray', colorHex: '#2E2E30', storage: '512GB SSD', ram: '16GB', price: 1699.00, stock: 5 },
            { color: 'Silver', colorHex: '#E3E4E5', storage: '256GB SSD', ram: '8GB', price: 1299.00, stock: 5 },
        ],
        specifications: {
            ram: '8GB / 16GB / 24GB unified memory',
            storage: '256GB / 512GB / 1TB / 2TB SSD',
            processor: 'Apple M3 chip (8-core CPU, 10-core GPU)',
            display: '15.3" Liquid Retina display (2880 x 1864)',
            camera: '1080p FaceTime HD camera',
            battery: 'Up to 18 hours battery life',
            os: 'macOS Sonoma',
            weight: '1.51 kg',
            dimensions: '340.4 x 237.4 x 11.5 mm'
        },
        icon: Laptop
    },
    {
        id: 'PROD003',
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Unleash new ways to create, connect and play with Galaxy AI.',
        category: 'Smartphones',
        price: 1299.00,
        stock: 32,
        image: 'https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/1.png',
        images: [
            'https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/1.png',
            'https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/2.png'
        ],
        colors: ['#000000', '#F5F5F5', '#F4E5C2', '#800080'],
        colorNames: ['Titanium Black', 'Titanium Gray', 'Titanium Violet', 'Titanium Yellow'],
        variants: [
            { color: 'Titanium Black', colorHex: '#000000', storage: '256GB', ram: '12GB', price: 1299.00, stock: 12 },
            { color: 'Titanium Black', colorHex: '#000000', storage: '512GB', ram: '12GB', price: 1419.00, stock: 10 },
            { color: 'Titanium Black', colorHex: '#000000', storage: '1TB', ram: '12GB', price: 1659.00, stock: 5 },
            { color: 'Titanium Gray', colorHex: '#F5F5F5', storage: '256GB', ram: '12GB', price: 1299.00, stock: 5 },
        ],
        specifications: {
            ram: '12GB',
            storage: '256GB / 512GB / 1TB',
            processor: 'Snapdragon 8 Gen 3 for Galaxy',
            display: '6.8" Dynamic AMOLED 2X (3120 x 1440)',
            camera: '200MP Wide | 12MP Ultra Wide | 10MP Telephoto (3x) | 50MP Periscope Telephoto (5x)',
            battery: '5000mAh with 45W fast charging',
            os: 'Android 14 with One UI 6.1',
            weight: '232g',
            dimensions: '162.3 x 79 x 8.6 mm'
        },
        icon: Smartphone
    },
    {
        id: 'PROD004',
        name: 'iPad Pro 12.9" (M2)',
        description: 'Astonishing performance. Incredibly advanced displays. Superfast wireless connectivity.',
        category: 'Tablets',
        price: 1099.00,
        stock: 15,
        image: 'https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/1.png',
        images: [
            'https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/1.png',
            'https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/2.png'
        ],
        colors: ['#808080', '#C0C0C0'],
        colorNames: ['Space Gray', 'Silver'],
        variants: [
            { color: 'Space Gray', colorHex: '#808080', storage: '128GB', ram: '8GB', price: 1099.00, stock: 8 },
            { color: 'Space Gray', colorHex: '#808080', storage: '256GB', ram: '8GB', price: 1299.00, stock: 4 },
            { color: 'Silver', colorHex: '#C0C0C0', storage: '128GB', ram: '8GB', price: 1099.00, stock: 3 },
        ],
        specifications: {
            ram: '8GB / 16GB',
            storage: '128GB / 256GB / 512GB / 1TB / 2TB',
            processor: 'Apple M2 chip (8-core CPU, 10-core GPU)',
            display: '12.9" Liquid Retina XDR display (2732 x 2048)',
            camera: '12MP Wide | 10MP Ultra Wide | 12MP TrueDepth front',
            battery: 'Up to 10 hours battery life',
            os: 'iPadOS 17',
            weight: '682g (Wi-Fi model)',
            dimensions: '280.6 x 214.9 x 6.4 mm'
        },
        icon: Tablet
    },
    {
        id: 'PROD005',
        name: 'Sony WH-1000XM5',
        description: 'Industry-leading noise cancellation, exceptional sound quality, and crystal-clear calls.',
        category: 'Audio',
        price: 350.00,
        stock: 50,
        image: 'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png',
        images: [
            'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png',
            'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png'
        ],
        colors: ['#000000', '#F5F5DC'],
        colorNames: ['Black', 'Silver'],
        variants: [
            { color: 'Black', colorHex: '#000000', price: 350.00, stock: 30 },
            { color: 'Silver', colorHex: '#F5F5DC', price: 350.00, stock: 20 },
        ],
        specifications: {
            processor: 'Integrated Processor V1',
            battery: 'Up to 30 hours with ANC on, 40 hours with ANC off',
            weight: '250g',
            dimensions: 'Folded: 165 x 254 x 80 mm'
        },
        icon: Headphones
    },
    {
        id: 'PROD006',
        name: 'Apple Watch Ultra 2',
        description: 'The most rugged and capable Apple Watch. Designed for outdoor adventure and supercharged workouts.',
        category: 'Wearables',
        price: 799.00,
        stock: 12,
        image: 'https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png',
        images: [
            'https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png',
            'https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/2.png'
        ],
        colors: ['#C0C0C0'],
        colorNames: ['Titanium'],
        variants: [
            { color: 'Titanium', colorHex: '#C0C0C0', storage: '64GB', price: 799.00, stock: 12 },
        ],
        specifications: {
            storage: '64GB',
            processor: 'S9 SiP with 64-bit dual-core processor',
            display: '1.92" Retina LTPO OLED Always-On display (502 x 410)',
            battery: 'Up to 36 hours normal use, 72 hours Low Power Mode',
            os: 'watchOS 10',
            weight: '61.4g (without band)',
            dimensions: '49mm case'
        },
        icon: Watch
    },
    {
        id: 'PROD007',
        name: 'PS5 DualSense Controller',
        description: 'Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands.',
        category: 'Gaming',
        price: 69.00,
        stock: 85,
        image: 'https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/1.png',
        images: [
            'https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/1.png'
        ],
        colors: ['#FFFFFF', '#000000', '#FF0000', '#0000FF', '#FF1493'],
        colorNames: ['White', 'Midnight Black', 'Cosmic Red', 'Starlight Blue', 'Nova Pink'],
        variants: [
            { color: 'White', colorHex: '#FFFFFF', price: 69.00, stock: 30 },
            { color: 'Midnight Black', colorHex: '#000000', price: 69.00, stock: 25 },
            { color: 'Cosmic Red', colorHex: '#FF0000', price: 74.00, stock: 15 },
            { color: 'Starlight Blue', colorHex: '#0000FF', price: 74.00, stock: 10 },
            { color: 'Nova Pink', colorHex: '#FF1493', price: 74.00, stock: 5 },
        ],
        specifications: {
            battery: 'Built-in rechargeable battery',
            dimensions: '160 x 66 x 106 mm',
            weight: '280g'
        },
        icon: Gamepad2
    },
    {
        id: 'PROD008',
        name: 'AirPods Pro 2',
        description: 'Reengineered sound. Next-level Active Noise Cancellation and Adaptive Transparency.',
        category: 'Audio',
        price: 249.00,
        stock: 8,
        image: 'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png',
        images: [
            'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png'
        ],
        colors: ['#FFFFFF'],
        colorNames: ['White'],
        variants: [
            { color: 'White', colorHex: '#FFFFFF', price: 249.00, stock: 8 },
        ],
        specifications: {
            processor: 'Apple H2 chip',
            battery: 'Up to 6 hours listening time (ANC on), Up to 30 hours with charging case',
            weight: '5.3g per earbud, 50.8g charging case',
            dimensions: 'Earbuds: 30.9 x 21.8 x 24.0 mm, Case: 45.2 x 60.6 x 21.7 mm'
        },
        icon: Headphones
    },
    {
        id: 'PROD009',
        name: 'iPhone 18 Pro',
        description: 'Next-generation A19 Pro chip with advanced AI capabilities, periscope telephoto camera system, and all-day battery life.',
        category: 'Smartphones',
        price: 1399.00,
        stock: 35,
        image: '/images/myOrder1.png',
        images: [
            '/images/myOrder1.png',
            '/images/myOrder1.png',
            '/images/myOrder1.png'
        ],
        colors: ['#2C2C2E', '#E8E8ED', '#B8A890', '#1C3D5A'],
        colorNames: ['Deep Space', 'Starlight', 'Desert Titanium', 'Pacific Blue'],
        variants: [
            { color: 'Deep Space', colorHex: '#2C2C2E', storage: '256GB', ram: '8GB', price: 1399.00, stock: 12 },
            { color: 'Deep Space', colorHex: '#2C2C2E', storage: '512GB', ram: '8GB', price: 1599.00, stock: 10 },
            { color: 'Deep Space', colorHex: '#2C2C2E', storage: '1TB', ram: '8GB', price: 1799.00, stock: 6 },
            { color: 'Starlight', colorHex: '#E8E8ED', storage: '256GB', ram: '8GB', price: 1399.00, stock: 7 },
        ],
        specifications: {
            ram: '8GB',
            storage: '256GB / 512GB / 1TB',
            processor: 'A19 Pro chip with Neural Engine',
            display: '6.3" Super Retina XDR display with ProMotion (120Hz)',
            camera: '48MP Fusion | 12MP Ultra Wide | 12MP 3x Telephoto | 12MP 5x Periscope Telephoto',
            battery: 'Up to 27 hours video playback',
            os: 'iOS 18',
            weight: '199g',
            dimensions: '146.6 x 70.6 x 8.25 mm'
        },
        icon: Smartphone
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
            { productId: 'PROD005', qty: 1, price: 350.00 }
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
            { productId: 'PROD001', qty: 1, price: 1199.00 }
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
            { productId: 'PROD002', qty: 1, price: 1299.00 }
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
            { productId: 'PROD006', qty: 1, price: 799.00 }
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
            { productId: 'PROD007', qty: 1, price: 69.00 }
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
            { productId: 'PROD003', qty: 1, price: 1299.00 }
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
            { productId: 'PROD004', qty: 1, price: 1099.00 }
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
            { productId: 'PROD008', qty: 1, price: 249.00 }
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
        productId: 'PROD009',
        variant: 'Deep Space',
        storage: '512GB',
        qty: 1,
        checked: false
    },
    {
        id: 'cart-2',
        productId: 'PROD002',
        variant: 'Space Gray',
        storage: '8GB RAM',
        qty: 1,
        checked: false
    },
    {
        id: 'cart-3',
        productId: 'PROD001',
        variant: 'Natural Titanium',
        storage: '256GB',
        qty: 2,
        checked: false
    }
];
