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
    indexAxis: 'y' as const,
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
                label: (context: any) => `${context.formattedValue} reviews`
            }
        }
    },
    scales: {
        x: {
            display: false,
            max: 100,
            grid: { display: false }
        },
        y: {
            display: false,
            grid: { display: false }
        },
    },
    layout: {
        padding: 0
    }
};

interface ReviewsBarChartProps {
    data: number[]; // [5stars, 4stars, 3stars, 2stars, 1star] percentage
    colors: string[];
}

export default function ReviewsBarChart({ data, colors }: ReviewsBarChartProps) {

    const chartData = {
        labels: ['5', '4', '3', '2', '1'],
        datasets: [{
            data: data,
            backgroundColor: colors,
            barThickness: 8,
            borderRadius: 4,
            borderSkipped: false,
        }]
    };

    return <Bar options={options} data={chartData} />;
}
