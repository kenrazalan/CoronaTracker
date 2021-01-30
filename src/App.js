import { useEffect, useState } from 'react';
import './App.css';
import {fetchData} from './api/index'
import Cards from './components/Cards/Cards'
import Country from './components/country/Country'
import Chart from './components/Chart/Chart'
import styled from 'styled-components'



const Wrapper = styled.div`
    .App{
       display: flex;
       align-items: center;
       flex-direction: column;
    }
    @media only screen and (max-width: 770px) {
      .App {
    margin: 0 10%;
  }
}
  `
function App() {
  
  const [data,setData] = useState({})
  const [country,setCountry] = useState("")
 
  useEffect(()=>{
    async function fetchApi(){
      let response = await fetchData()
      setData(response)
    }
    fetchApi()
  },[])

  const handleChange = async(country)=>{
    const data = await fetchData(country)
    setData(data)
    setCountry(country)
    console.log(country)
    
  }


  return (
    <Wrapper>
    <div className="App">
      <Cards data={data}/>
      <Country handleChange={handleChange}/>
      <Chart data={data} country={country}/>
    </div>
    </Wrapper>
  );
}

export default App;
