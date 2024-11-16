import React, { useEffect, useState } from 'react'
import { fetchFooterData } from '../../services/api';
import Nav from '../nav/Nav';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../constants/config';

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    getFooterData('footer?populate[menu][populate]=*&populate[icons][populate]=*');
  }, [])

  const getFooterData = async (url) => {
    try {
      const data = await fetchFooterData(url);
      setFooterData(data);
    } catch (err) {
      setError(err.message || 'Failed to load header data.');
    }
  }
  const menu = footerData?.data?.menu;
  const social_icons = footerData?.data?.icons;

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='about-footer'>
          <h3 className='heading-md mb-3'>The idea behind  TechSpotLight</h3>
          <p>
            The initial concept behind  TechSpotLight originated in 1989 when Oliver Sims,then working for IBM, saw the need for an infrastructure whereby a given real-world business concept (process or entity) could be implemented as a software module that could be plugged into a running system. Applications would be created by composing an appropriate set of modules. IBM UK funded development of the concept through collaboration with Softwright, a UK bespoke software company.
          </p>
          <p>
            After several successful prototypes, and an early AS400 production version, a joint venture called Integrated Object Systems (IOS) was created in 1993 to exploit the concept. The first version of  TechSpotLight was announced and shipped in 1994.
          </p>
          <div className='flex mt-4'>
            {
              menu?.map((item) => {
                return (
                  <Nav menu={item.links} title={item?.title} />
                )
              })
            }
          </div>
          <div className='text-center font-16 mb-2 mt-3'>
            <strong>{footerData?.data?.connectwithus}</strong>
          </div>
          <ul className='social-icons text-center'>
            {
              social_icons?.map((item, index) => {
                return (
                  <li className='icon-item d-inline-block' key={index}>
                    <Link to={item.link}>
                      <img src={BASE_URL+item.icon.url}  />
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <div className='text-center mt-3'>
            <strong>{footerData?.data?.footerbottom}</strong>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer