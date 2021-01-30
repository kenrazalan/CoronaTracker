import React, { useEffect, useState } from 'react'
import {FormControl,NativeSelect} from '@material-ui/core'
import {fetchCountries} from '../../api/index'
import styled from 'styled-components'

const Wrapper = styled.div`
    .formControl{
        width:"30%";
        margin-bottom: 30px;
    }
`

const Country=({handleChange})=>{
    const [country,setCountry] = useState([])

    useEffect(()=>{
        const fetchCountry = async()=>{
            const cc = fetchCountries()
            setCountry(await cc)
        }
        fetchCountry()
    },[])
  
    return(
        <Wrapper>
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={(e)=>handleChange(e.target.value) }>
                <option value="">World Wide </option>
                 {country.map((coun,i)=> <option key={i} value={coun}>{coun}</option>)} 
            </NativeSelect>
        </FormControl>
        </Wrapper>
    )
} 

export default Country
