import React from 'react'
import { BASE_URL } from '../../constants/config';
const Logo = ({logo}) => {
    const url = logo?.formats?.thumbnail?.url;
  return (
    <div className='site-logo'>
        <img src={BASE_URL+url} />
    </div>
  )
}

export default Logo