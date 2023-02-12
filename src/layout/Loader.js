import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className="body">
        <div className="center">
            <div className="ring"></div>
            <span>Loading...</span>
        </div>
    </div>
  )
}

export default Loader