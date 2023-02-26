import React from 'react';
import {Pie} from 'react-chartjs-2';

function PieChart({data, date}) {
  const filteredData = data.filter((item)=> item.item_date === date);
  const scheduleBySlot = filteredData.reduce(
  (acc,item) =>{
    acc[item.slot]++;
    return acc;
  },
  {L: 0, D: 0}
)

 

  const chartData = {
    labels: ['Lunch', 'Dinner'],
    datasets: [
      {
        data: [scheduleBySlot.L, scheduleBySlot.D],
        backgroundColor:['white','coral'],
        borderColor: ['yellow','pink'],
        borderWidth: 1,
      },
    ],
  };



  const options = {
    plugins: {
      title: {
        display: true,
        text: `Scheduled Meals on ${date}`,
        font: {
            size: 24,
        },
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  
  return (
    <div>
      <Pie data= {chartData} options ={options}/>
    </div>
  )

}

export default PieChart;

