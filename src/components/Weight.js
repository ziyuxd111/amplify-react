import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const painLevelData = {
  labels: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7','Aug 8', 'Aug 9', 'Aug 10',
   'Aug 11', 'Aug 12', 'Aug 13', 'Aug 14', 'Aug 15', 'Aug 16', 'Aug 17', 'Aug 18', 'Aug 19', 'Aug 20'
   , 'Aug 21', 'Aug 22', 'Aug 23', 'Aug 24', 'Aug 25', 'Aug 26', 'Aug 27', 'Aug 28', 'Aug 29', 'Aug 30'],
  datasets: [
    {
      label: 'Pain Level',
      data: [9, 8, 9, 9, 8, 7, 7, 8, 7, 8, 7, 7, 8, 7 ,7, 6, 6, 6, 5, 6, 5 ,6, 6, 5, 6, 5, 6, 4, 5, 4], // Example data
      fill: false,
      backgroundColor: 'rgb(255, 205, 86)',
      borderColor: 'rgb(255, 205, 86)',
      borderWidth: 4,
      pointBackgroundColor: 'rgb(255, 205, 86)',
      pointBorderColor: '#fff',
      pointBorderWidth: 3,
      pointRadius: 6,
      tension: 0, // This will make the line straight
    },
  ],
};

const painLevelOptions = {
  responsive: true,
  scales: {
    x: { title: { display: true, text: 'Date' } },
    y: { 
      beginAtZero: true, // Adjusted to true to include 0 in the scale
      max: 10, // Assuming the pain level ranges from 0 to 10
      title: { display: true, text: 'Pain Level' } 
    }
  },
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Daily Pain Level' } // Title updated to Pain Level
  }
};

const PainLevelChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Daily Pain Level</h1>
      {/* Calculate the daily average of pain level here */}
      <div className="average">Daily Average: 6.5</div> 
    </div>
    <Line data={painLevelData} options={painLevelOptions} />
  </>
);

export default PainLevelChart;
