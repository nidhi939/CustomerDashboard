// BarChartCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, XAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Jan', value: 9, fill: '#EBE8FC' },
    { name: 'Feb', value: 7, fill: '#EBE8FC' },
    { name: 'Mar', value: 10, fill: '#EBE8FC' },
    { name: 'Apr', value: 12, fill: '#EBE8FC' },
    { name: 'May', value: 13, fill: '#EBE8FC' },
    { name: 'Jun', value: 8, fill: '#EBE8FC' },
    { name: 'Jul', value: 11, fill: '#EBE8FC' },
    { name: 'Aug', value: 15, fill: '#8884d8' }, // Set a specific color for Aug
    { name: 'Sep', value: 14, fill: '#EBE8FC' },
    { name: 'Oct', value: 13, fill: '#EBE8FC' },
    { name: 'Nov', value: 10, fill: '#EBE8FC' },
    { name: 'Dec', value: 14, fill: '#EBE8FC' },
  // Add more data as needed
];

const CustomBar = (props) => {
    const { x, y, width, height, fill } = props;
    const barWidth = 35; // Adjust the bar width as per your requirement
    const spacing = (width - barWidth) / 2; // Calculate spacing to center the bar
    return (
      <rect x={x + spacing} y={y} width={barWidth} height={height} fill={fill} rx={10} ry={10} />
    );
  };

const pieChartData = [
    { name: 'Purchased', value: 75, fill: '#8884d8' }, // Set a specific color for the pie slice
    { name: 'Not Purchased', value: 25, fill: '#EBE8FC' },
];
  
  

// const BarChartCard = () => {
//   return (
//     <Card>
//       <CardContent>
//       <Typography variant="h6" fontWeight="bold">Overview</Typography>
//         <Typography variant="h8">Monthly Earning</Typography>
//         <BarChart width={750} height={200} data={data}>
//           <XAxis dataKey="name" />
//           <Tooltip />
//           <Legend />
//             <Bar dataKey="value" shape={<CustomBar />} />
//         </BarChart>
//       </CardContent>
//     </Card>
    
//   );
// };

const renderCustomizedLabel = ({ cx, cy, percent }) => {
  const mainFontSize = 18; // Set the font size for "65%"
  const secondaryFontSize = 12; // Set the font size for "Total New Customer"
  const fontWeight = 'bold';
  const margin = 5;
  const firstLineY = cy - mainFontSize / 2 - margin / 2;
  const secondLineY = cy + secondaryFontSize / 2 + margin / 2;

  return (
    <>
   <text x={cx} y={firstLineY} textAnchor="middle" dominantBaseline="middle" fill="#8884d8" fontSize={mainFontSize} fontWeight={fontWeight}>
        65%
      </text>
      <text x={cx} y={secondLineY} textAnchor="middle" dominantBaseline="middle" fill="#8884d8" fontSize={secondaryFontSize}>
        Total New Customer
      </text>
      
    </>
  );
};

const BarChartCard = () => {
  const COLORS = ['#8884d8', '#EBE8FC'];
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
      <Card>
       <CardContent>
      <Typography variant="h6" fontWeight="bold">Overview</Typography>
         <Typography variant="h8">Monthly Earning</Typography>
        <BarChart width={750} height={200} data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" shape={<CustomBar />} />
        </BarChart>
        </CardContent>
     </Card>
      </div>
      <div>
      <Card style={{ width: '390px', height: '290px' , marginLeft: '20px' }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold">Customers</Typography>
          <Typography variant="h8">Customers that buy Products</Typography>
          <PieChart width={400} height={200}>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="40%"
                cy="50%"
                outerRadius={92}
                innerRadius={60} 
                fill="#8884d8"
                label={renderCustomizedLabel}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};


export default BarChartCard;
