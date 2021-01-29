import React from 'react';
import {Card, CardContent, Grid,Typography} from '@material-ui/core'
import './CardComponent.css'
import cn from 'classnames'

 const CardComponent =({className,cardTitle,value,subtitle,lastUpdate})=>{
    return(
        <Grid item xs={12} md={3} component={Card} className={cn("card",className)}>
            <CardContent>
                <Typography>
                    {cardTitle}
                </Typography>
                <Typography>
                    {value}
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