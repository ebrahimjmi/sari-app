import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({menu, title}) => {
    return (
        <nav className='menu'>
            <h3 className='heading-sm upper-case'>{title}</h3>
            {menu?.map((item) => <div key={item?.id} className='menu-item animated-menu'><Link to={item?.url} className='capitalize'>{item?.link}</Link></div>)}
        </nav>
    )
}

export default Nav