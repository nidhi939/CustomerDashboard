import React from 'react';
import { Pie } from 'react-chartjs-2';
import "./ReviewPieChartCard.css";
// import "./Table.css";
const ReviewPieChartCard = ({ reviewsData }) => {
  const data = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        data: reviewsData,
        backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
        hoverBackgroundColor: ['#218838', '#e0a800', '#c82333'],
      },
    ],
  };

  const options = {
    legend: {
      display: true,
      position: 'right',
    },
  };

  return (
    <div className="review-pie-chart-card">
      <h3>Customer Reviews</h3>
      <div className="pie-chart-container">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ReviewPieChartCard;
