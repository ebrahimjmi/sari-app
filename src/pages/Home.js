import React, { useEffect, useState } from 'react'
import HomeBanner from '../components/banner/HomeBanner';
import { fetchHomePageData } from '../services/api';
import Product from '../components/products/Product';

const Home = () => {

    const [homeData, setHomeData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        gethHomePageData('homepage?populate[banner][populate]=*');
    }, [])

    const gethHomePageData = async (url) => {
        try {
            const data = await fetchHomePageData(url);
            setHomeData(data);
        } catch (err) {
            setError(err.message || 'Failed to load header data.');
        }
    }
    return (
        <div className='home-page'>
            <HomeBanner banner = {homeData?.data?.banner}/>
            <Product />
        </div>
    )
}

export default Home