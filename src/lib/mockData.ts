
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
        colors: ['#2E2E30', '#E3E4E5', '#F0E5D3'],
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
        colors: ['#000000', '#F5F5F5', '#FFD700', '#800080'],
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
        icon: Watch
    },
    {
        id: 'PROD007',
        name: 'PS5 Controller',
        description: 'Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands.',
        category: 'Gaming',
        price: 69.00,
        stock: 85,
        image: 'https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/1.png',
        images: [
            'https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/1.png'
        ],
        colors: ['#FFFFFF', '#000000', '#FF0000', '#0000FF'],
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
        icon: Headphones
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
