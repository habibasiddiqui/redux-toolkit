import React from 'react'
import { Typography } from "@material-ui/core";
import icon from "../images/list2.png";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';

function Title() {
    return (
        <div>
            
            <Typography className='title' variant="h3" gutterBottom>
                <FormatListBulletedRoundedIcon className='headingImg' fontSize='large' />
                {/* <img className='headingImg' src={icon}></img> */}
                To-Do List
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                (using React.js, material-ui, Redux toolkit)
            </Typography>
        </div>
    )
}

export default Title
