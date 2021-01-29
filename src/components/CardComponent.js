import React from 'react';
import {Card, CardContent, Grid,Typography} from '@material-ui/core'
import './CardComponent.css'
import cn from 'classnames'
import Countup from 'react-countup'

 const CardComponent =({className,cardTitle,value,subtitle,lastUpdate})=>{
    return(
        <Grid item xs={12} md={3} component={Card} className={cn("card",className)}>
            <CardContent>
                <Typography gutterBottom>
                    {cardTitle}
                </Typography>
                <Typography>
                    <Countup start={0} end={value} duration={2.75}/>    
                       
                </Typography>
                <Typography>
                {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography>
                    {subtitle}
                </Typography>
            </CardContent>
        </Grid>
    )
} 
export default CardComponent