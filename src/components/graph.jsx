import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './graph.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function DynamicGraph({ data = [10, 15, 8, 12, 5, 7, 14], labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] }) {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Sample Data',
        data: data,
        fill: true,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light background for the line area
        borderColor: 'rgba(255, 255, 255, 0.8)', // Light line color for visibility
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#ffffff', // White text for the legend
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff', // White text for x-axis labels
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff', // White text for y-axis labels
        },
      },
    },
  };

  return (
    <div className="graph-container">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default DynamicGraph;
