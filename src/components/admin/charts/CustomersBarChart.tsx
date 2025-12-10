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
                title: () => '',
                label: (context: any) => `Visitors: ${context.parsed.y}k`
            }
        }
    },
    scales: {
        x: {
            grid: { display: false },
            ticks: {
                color: '#9CA3AF',
                font: {
                    size: 11
                }
            },
            border: {
                display: false
            }
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
    },
    barPercentage: 0.6,
    categoryPercentage: 0.8
};

const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Mock data to match the visual style
const data = {
    labels,
    datasets: [
        {
            data: [40, 60, 45, 70, 50, 80, 65],
            backgroundColor: '#0D9488', // Teal-ish color matching design
            borderRadius: 4,
            borderSkipped: false,
        },
    ],
};

export default function CustomersBarChart() {
    return <Bar options={options} data={data} />;
}
