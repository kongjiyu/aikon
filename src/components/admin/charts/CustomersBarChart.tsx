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

// Mock data for different time ranges
const dataMap = {
    'thisWeek': [40, 60, 45, 70, 50, 80, 65],
    'lastWeek': [55, 40, 60, 50, 75, 55, 45]
};

export default function CustomersBarChart({ timeRange = 'thisWeek' }: { timeRange?: 'thisWeek' | 'lastWeek' }) {
    const data = {
        labels,
        datasets: [
            {
                data: dataMap[timeRange] || dataMap['thisWeek'],
                backgroundColor: '#E5E7EB',
                hoverBackgroundColor: '#2B4242',
                borderRadius: 4,
                barThickness: 'flex' as const,
                maxBarThickness: 40,
                barPercentage: 0.7,
                borderSkipped: false,
            },
        ],
    };

    return <Bar options={options} data={data} />;
}
