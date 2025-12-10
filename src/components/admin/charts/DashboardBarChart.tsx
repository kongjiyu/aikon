"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
            backgroundColor: '#2B4242',
            titleColor: '#fff',
            bodyColor: '#fff',
            padding: 8,
            cornerRadius: 6,
            displayColors: false,
            callbacks: {
                title: (context: any) => context[0].label,
                label: (context: any) => `Visitors: ${context.parsed.y}`
            }
        }
    },
    scales: {
        x: {
            display: false,
            grid: { display: false }
        },
        y: {
            display: false,
            grid: { display: false },
            min: 0,
            max: 100
        },
    },
    animation: {
        duration: 0
    }
};

// Generate time labels (e.g., 08:00, 09:00...) for the last 25 hours or data points
const labels = Array.from({ length: 25 }, (_, i) => {
    const hour = (new Date().getHours() - (24 - i) + 24) % 24;
    return `${hour.toString().padStart(2, '0')}:00`;
});

// Deterministic mock data to avoid hydration mismatch
const mockData = Array.from({ length: 25 }, (_, i) => ({
    val: ((i * 37 + 19) % 80) + 20,
    color: i % 5 === 0 ? '#2B4242' : '#E5E7EB'
}));

const data = {
    labels,
    datasets: [
        {
            data: mockData.map(d => d.val),
            backgroundColor: mockData.map(d => d.color),
            borderRadius: 2,
            barThickness: 'flex' as const,
            maxBarThickness: 12,
        },
    ],
};

export default function DashboardBarChart() {
    return <Bar options={options} data={data} />;
}
