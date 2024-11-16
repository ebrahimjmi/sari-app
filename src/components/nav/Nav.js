import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({menu}) => {

    return (
        <nav className='flex'>
            {menu?.map((item) => <li><Link key={item?.id} to={item?.url}>{item?.link}</Link></li>)}
        </nav>
    )
}

export default Nav