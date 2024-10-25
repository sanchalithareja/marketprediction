import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './stockgraph.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function generateStockData() {
  const dataPoints = [];
  let value = 100;

  for (let i = 0; i < 100; i++) {
    let change = Math.random() * 40 - 20;

    if (Math.random() < 0.1) {
      change *= Math.random() * 3 - 1.5;
    }

    value = Math.max(0, value + change);
    dataPoints.push(value);
  }

  return dataPoints;
}

function stockGraph({
  data = generateStockData(),
  labels = Array.from({ length: 100 }, (_, i) => `Day ${i + 1}`)
}) {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Simulated Stock Data',
        data: data,
        fill: true,
        backgroundColor: 'rgba(0, 128, 255, 0.1)',
        borderColor: 'rgba(0, 128, 255, 0.8)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to expand to its container
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#ffffff',
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff',
        },
      },
    },
  };

  return (
    <div className="graph-container" style={{ width: '100%', height: '500px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default stockGraph;
