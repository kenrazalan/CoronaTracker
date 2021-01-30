import React, { useEffect, useState } from 'react'
import {Line,Bar} from 'react-chartjs-2'
import {fetchDailyData} from '../../api'
import styled from 'styled-components'
import css from './Chart.module.css'
// const Wrapper = styled.div`
//     .chart{
//         display: flex;
//         justify-content: center;
//         width:"65%";
       
//     }
//     @media only screen and (max-width: 770px) {
//   .chart {
//     width: 100%;
//   }
// }
//   `

const Chart = ({data:{confirmed, recovered, deaths, lastUpdate},country})=>{
    const [dailyData,setDailyData]= useState({})

    useEffect(()=>{
        const fetchData =async ()=>{
            const data =await fetchDailyData();
            setDailyData(data)
        }
        fetchData()
    },[])

    const barChart = (
        confirmed?(
            <Bar data={{
                labels:['Infected','Recoverd','Deaths'],
                datasets:[
                    {label: 'People',
                    backgroundColor:"['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)']",
                    data: [confirmed.value, recovered.value, deaths.value],
                }
                ]
            }}
            options={{
                legend: {display:false},
                title: {display: true , text: `Current state in ${country}` }
            }}/>
        ): null

    )

    const lineChart = (
        dailyData[0] ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },  {
                data: dailyData.map((data) => data.recovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );
            return(
                <div className={css.charts} style={{width:"65%"}}>
                    {country?barChart:lineChart}
                </div>
               
            )

}

export default Chart