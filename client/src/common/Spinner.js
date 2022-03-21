import React from 'react'
import './Spinner.css'
const Spinner = () => {
  return (
    <div className='spinner fixed rounded p-48 flex'>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
    </div>
  )
}

export default Spinner