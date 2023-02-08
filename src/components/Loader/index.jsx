import React from 'react'
import './index.css'

const Loader = ({msg = 'loading...'}) => {
  return (
    <>
    <div className="loader-container"></div>
    <div className='loader-msg'>{msg}</div>
    </>
  )
}

export default Loader