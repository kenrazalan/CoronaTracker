import axios from 'axios'

const api = 'https://covid19.mathdro.id/api'

export const fetchData = async (country)=>{
    let changeableUrl = api;

    if(country){
        changeableUrl = `${api}/countries/${country}`
    }
    try{
        const {data:{ confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl)
        return{confirmed, recovered, deaths, lastUpdate}
    }catch(e){
        console.log(e)
    }
}

export const fetchCountries = async ()=>{
    try{
        const {data: {countries}} = await axios.get(`${api}/countries`)
        return countries.map(country=>{
            return country.name
        })
    }catch(e){
        return e;
    }
}

