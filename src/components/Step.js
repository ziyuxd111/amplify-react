import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components we will use from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7','Aug 8', 'Aug 9', 'Aug 10',
  'Aug 11', 'Aug 12', 'Aug 13', 'Aug 14', 'Aug 15', 'Aug 16', 'Aug 17', 'Aug 18', 'Aug 19', 'Aug 20'
  , 'Aug 21', 'Aug 22', 'Aug 23', 'Aug 24', 'Aug 25', 'Aug 26', 'Aug 27', 'Aug 28', 'Aug 29', 'Aug 30'],
  datasets: [
    {
      label: 'Steps',
      data: [25, 25, 26, 25, 26, 27, 26, 27, 27, 27, 28, 28, 28, 28, 29, 29, 28, 29, 30, 30, 28, 29, 30, 30, 30, 31, 30, 31, 30, 30, 31, 32],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)', // More vibrant line color
      borderWidth: 4, // Thicker line
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: { // Changed from 'xAxes' for Chart.js 3.x
      title: {
        display: true,
        text: 'Date'
      }
    },
    y: { // Changed from 'yAxes' for Chart.js 3.x
      beginAtZero: true,
      title: {
        display: true,
        text: 'Steps'
      }
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Daily Steps'
    }
  }
};

const StepsChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Reach Distance in cm</h1>
      <div className="average">Daily Average: 28.4</div>
    </div>
    <Line data={data} options={options} />
  </>
);

export default StepsChart;
