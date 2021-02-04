import React from 'react'
import { Typography, Grid } from "@material-ui/core";
import icon from "../images/list2.png";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';

function Title() {
    return (
        <div>
            <Grid container spacing={1} justify='center' alignContent='center'>
                
                <Grid item xs={10} sm={10} md={8} lg={6} >
            
                    <Typography className='title' variant="h3" >
                        <FormatListBulletedRoundedIcon className='headingImg' fontSize='large' />
                        {/* <img className='headingImg' src={icon}></img> */}
                        To-Do List
                    </Typography>
                    <Typography  className='subtitle' variant="subtitle2" >
                        (using React.js, material-ui, Redux toolkit)
                    </Typography>

                </Grid>
            </Grid>
        </div>
    )
}

export default Title
