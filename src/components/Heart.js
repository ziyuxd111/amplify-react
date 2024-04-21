import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const heartRateData = {
  labels: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7','Aug 8', 'Aug 9', 'Aug 10',
  'Aug 11', 'Aug 12', 'Aug 13', 'Aug 14', 'Aug 15', 'Aug 16', 'Aug 17', 'Aug 18', 'Aug 19', 'Aug 20'
  , 'Aug 21', 'Aug 22', 'Aug 23', 'Aug 24', 'Aug 25', 'Aug 26', 'Aug 27', 'Aug 28', 'Aug 29', 'Aug 30'],
  datasets: [
    {
      label: 'Range of Motion',
      data: [20, 21, 22, 23, 23, 24, 25, 24, 25, 26, 27, 26, 26, 26, 27, 27, 27, 28, 28, 27, 28, 29, 29, 30, 30, 29, 30, 30, 30, 31],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 4,
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointBorderWidth: 3,
      pointRadius: 6,
      tension: 0,
    },
  ],
};

const heartRateOptions = {
  responsive: true,
  scales: {
    x: { title: { display: true, text: 'Date' } },
    y: { 
      beginAtZero: true,
      title: { display: true, text: 'Range of Motion' } 
    }
  },
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Heart Rate' }
  }
};

const HeartRateChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Daily Range of Motion in degrees</h1>
      <div className="average">Average Range of Motion: 26.6</div>
    </div>
    <Line data={heartRateData} options={heartRateOptions} />
  </>
);

export default HeartRateChart;
