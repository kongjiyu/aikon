"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
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
            backgroundColor: '#2B4242',
            titleColor: '#fff',
            bodyColor: '#fff',
            padding: 10,
            cornerRadius: 8,
            displayColors: false,
            callbacks: {
                label: function (context: any) {
                    return 'RM ' + context.parsed.y + 'k';
                }
            }
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
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
            grid: {
                color: '#F3F4F6',
            },
            ticks: {
                color: '#D1D5DB',
                font: {
                    size: 11
                },
                callback: function (value: any) {
                    return 'RM ' + value + 'k';
                }
            },
            border: {
                display: false,
                dash: [4, 4]
            },
            min: 0,
            max: 60,
        },
    },
    interaction: {
        intersect: false,
        mode: 'index' as const,
    }
};

const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Sales',
            data: [15, 22, 18, 45, 25, 30, 40],
            borderColor: '#2B4242',
            backgroundColor: (context: any) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                gradient.addColorStop(0, 'rgba(43, 66, 66, 0.1)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                return gradient;
            },
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#2B4242',
            pointHoverBorderWidth: 2,
        },
    ],
};

export default function DashboardLineChart({ data: inputData }: { data?: number[] }) {
    const chartData = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Sales',
                data: inputData || [15, 22, 18, 45, 25, 30, 40],
                borderColor: '#2B4242',
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, 'rgba(43, 66, 66, 0.1)');
                    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                    return gradient;
                },
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#2B4242',
                pointHoverBorderWidth: 2,
            },
        ],
    };

    return <Line options={options} data={chartData} />;
}
