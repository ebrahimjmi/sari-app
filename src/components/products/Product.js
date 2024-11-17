import React, { useEffect, useState } from 'react'
import { fetchProductData } from '../../services/api';
import { BASE_URL } from '../../constants/config';
import { useDispatch } from 'react-redux';
import { addItem } from '../../app/features/cart/cartSlice';

const Product = () => {

    const dispatch = useDispatch();
    const [productData, setProductData] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        getProductData('products?populate=*');
    }, [])

    const getProductData = async (url) => {
        try {
            const data = await fetchProductData(url);
            setProductData(data);
        } catch (err) {
            setError(err.message || 'Failed to load header data.');
        }
    }

    const product = productData?.data;
    return (
        <div className='product-container flex'>
            {
                product?.map((item, index) => {
                    return (
                        <div className="product" key={index}>

                            <div className="product-image">
                                <img src={BASE_URL + item?.productImage?.url} alt="Product Name" />
                            </div>
                            <div className="product-details">
                                <h3 className="product-title">
                                    <a href="product-detail-page.html" className='capitalize'>{item?.title}</a>
                                </h3>
                                <div className='product-desc mb-1'>
                                    {item?.shortDesc}
                                </div>
                                {/* <div className="product-rating">
                                    <span className="stars">★★★★☆</span>
                                    <span className="reviews">(25 reviews)</span>
                                </div> */}
                                <div className="product-price mb-1">
                                    <span className="original-price slash-price price">&#8377;{item?.originalprice}</span>
                                    <span className="current-price price price">&#8377;{item?.currentprice}</span>
                                    <span className='offer'>
                                        (
                                            {
                                            `${Math.floor((item?.originalprice - item?.currentprice) / item?.currentprice * 100)}%`
                                            }
                                        )
                                    </span>
                                </div>

                            </div>
                            <div className="product-actions">
                                <button className="add-to-cart" onClick={() => {
                                    dispatch(addItem(item))
                                }}>Add to Cart</button>
                                <button className="wishlist">♡ Wishlist</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product