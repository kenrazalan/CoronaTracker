import { useEffect, useState } from 'react';
import './App.css';
import {fetchData} from './api/index'
import Cards from './components/Cards'
function App() {
  const [data,setData] = useState({})
 
  useEffect(()=>{
    async function fetchApi(){
      let response = await fetchData()
      setData(response)
    }
    fetchApi()
  },[])

 console.log(data)
  return (
    <div className="App">
      <Cards data={data}/>
    </div>
  );
}

export default App;
