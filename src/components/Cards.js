import React from 'react';
import {Typography,Card,CardContent,Grid} from '@material-ui/core'
import CardComponent from './CardComponent'
import './CardComponent.css'
 const Cards =({data:{confirmed, recovered, deaths, lastUpdate}})=>{
    console.log()
    return(
        <div>
            <Typography  gutterBottom variant="h4" component="h2">Global</Typography>
        <Grid container spacing={3} justify='center'>
            
            <CardComponent
            className="infected"
            cardTitle={"Infected"}
            value={confirmed?confirmed.value:"Loading..."}
            lastUpdate={lastUpdate}
            subtitle={"Number of active cases from COVID-19."}
            />
            <CardComponent
            className="recovered"
            cardTitle={"Recovered"}
            value={recovered?recovered.value:"Loading..."}
            lastUpdate={lastUpdate}
            subtitle={"Number of recoveries from COVID-19."}
            />
            <CardComponent
            className="deaths"
            cardTitle={"Deaths"}
            value={deaths?deaths.value:"Loading..."}
            lastUpdate={lastUpdate}
            subtitle={"Number of deaths from COVID-19."}
            />
        </Grid>
        </div>
    )
}
export default Cards
