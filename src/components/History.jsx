import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function History() {
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Water Quality Score',
        data: [85, 82, 88, 87, 84, 90, 88],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        min: 50,
        max: 100
      }
    }
  };

  return (
    <div className="p-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold text-gray-800">Analysis History</h1>
        <p className="text-gray-600">Track your water quality over time</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl p-4 shadow-sm mb-6"
      >
        <h2 className="text-lg font-semibold mb-4">Weekly Overview</h2>
        <Line data={chartData} options={options} />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        {[
          { date: 'Today', score: 88, status: 'Good' },
          { date: 'Yesterday', score: 90, status: 'Excellent' },
          { date: '2 days ago', score: 84, status: 'Good' }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600">{item.date}</p>
                <p className="font-semibold text-gray-800">Score: {item.score}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                item.status === 'Excellent' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default History;