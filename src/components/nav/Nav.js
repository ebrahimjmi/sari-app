import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Nav = ({ menu, title }) => {
    const cartItems = useSelector(state => state.cart.items);
    const cartQty = cartItems?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
    }, 0)

    return (
        <nav className='menu'>
            <h3 className='heading-sm upper-case'>{title}</h3>
            {
                menu?.map((item) => <div key={item?.id} className='menu-item animated-menu'>
                    <Link to={item?.url} className='capitalize'>{item?.link == "cart" ? `${item?.link}(${cartQty})` : item.link}</Link>
                </div>)
            }
        </nav>
    )
}

export default Nav