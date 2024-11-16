import React, { useEffect, useState } from 'react'
import Nav from '../nav/Nav'
import { fetchHeaderData } from '../../services/api';
import Logo from '../logo/Logo';

const Header = () => {

    const [headerData, setHeaderData] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        getHeaderData('header?populate=*');
    }, [])

    const getHeaderData = async (url) => {
        try {
            const data = await fetchHeaderData(url);
            setHeaderData(data);
        } catch (err) {
            setError(err.message || 'Failed to load header data.');
        }
    }

    const logo = headerData?.data?.logo;
    const menu = headerData?.data?.links;

    return (
        <header className='header'>
            <div className='container'>
                <div className=' flex align-center space-between'>
                    <Logo logo={logo} />
                    <Nav menu={menu} />
                </div>
            </div>
        </header>
    )
}

export default Header