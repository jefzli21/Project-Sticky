import { lightBlue } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'

const ProgressBar = ({bgcolor,percentage}) => {



    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${percentage()}%`,
        backgroundColor: '#4166f5',
        borderRadius:'inherit',
        textAlign:'right',
        transition: 'width 1s ease-in-out',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight:'bold'
    }


  return (
    <div style={containerStyles}>
        <div style={fillerStyles}>
            <span style={labelStyles}>{`${percentage()}%`}</span>
        </div>
    </div>
  )
}

export default ProgressBar