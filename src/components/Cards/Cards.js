import React from 'react';
import {Typography,Card,CardContent,Grid} from '@material-ui/core'
import CardComponent from './CardComponent'
import './CardComponent.css'

 const Cards =({data:{confirmed, recovered, deaths, lastUpdate}})=>{
    if (!confirmed) {
        return 'Loading...';
      }
    return(
        <div className="container">
            <Typography  gutterBottom variant="h4" component="h2">Global</Typography>
        <Grid container spacing={3} justify='center'>
            
            <CardComponent
            className="infected"
            cardTitle={"Infected"}
            value={confirmed.value}
            lastUpdate={lastUpdate}
            subtitle={"Number of active cases from COVID-19."}
            />
            <CardComponent
            className="recovered"
            cardTitle={"Recovered"}
            value={recovered.value}
            lastUpdate={lastUpdate}
            subtitle={"Number of recoveries from COVID-19."}
            />
            <CardComponent
            className="deaths"
            cardTitle={"Deaths"}
            value={deaths.value}
            lastUpdate={lastUpdate}
            subtitle={"Number of deaths from COVID-19."}
            />
        </Grid>
        </div>
    )
}
export default Cards
