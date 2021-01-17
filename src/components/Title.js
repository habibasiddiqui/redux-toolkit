import React from 'react'
import { Typography } from "@material-ui/core";

function Title() {
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                To-Do List
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                (using React.js, material-ui, Redux toolkit)
            </Typography>
        </div>
    )
}

export default Title
