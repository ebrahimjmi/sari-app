import React, { useEffect, useState } from 'react'
import Nav from '../nav/Nav'
import { fetchHeaderData } from '../../services/api';
import Logo from '../logo/Logo';


const Header = () => {

    const [headerData, setHeaderData] = useState(null);
    const [error, setError] = useState(null);
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 75) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // console.log(lastScrollY)


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
        <header className={`header ${isSticky ? `header-sticky` : ''}`}>
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