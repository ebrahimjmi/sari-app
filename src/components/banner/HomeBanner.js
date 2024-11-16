import React from 'react'
import { BASE_URL } from '../../constants/config'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";



const HomeBanner = (banner) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='home-banner'>
            <Slider {...settings}>
                {
                    banner?.banner?.map((item, index) => {
                        return (
                            <div className='banner-image' key={index}>
                                <img src={BASE_URL + item?.image?.url} />
                            </div>
                        )
                    })
                }
            </ Slider>
        </div>
    )
}

export default HomeBanner