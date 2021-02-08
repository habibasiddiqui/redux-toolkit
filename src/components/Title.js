import React from 'react'
import { Typography, Grid } from "@material-ui/core";
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';

function Title() {
    return (
        <div>
                    <Typography className='title' variant="h3" >
                        <FormatListBulletedRoundedIcon className='headingImg' fontSize='large' />
                        To-Do List
                    </Typography>
                    <Typography  className='subtitle' variant="subtitle2" >
                        (using React.js, material-ui, Redux toolkit)
                    </Typography>

        </div>
    )
}

export default Title
