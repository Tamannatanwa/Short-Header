import { Facebook, Google, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='linkMenu'>
                <a href="https://mobirise.com/extensions/portfoliom4/photographer/#" className='links'>PortfolioM4.</a>
                <p>Powered by</p>
                <a href="https://mobirise.com/" className='links'>Mobirise.com</a>
            </div>
            <div className='iconData'>
                <Twitter className='icon '/>
                <Facebook className='icon '/>
                <Google className='icon '/>
                <Instagram className='icon '/>
            </div>
        </div>
    </>
  )
}

export default Footer