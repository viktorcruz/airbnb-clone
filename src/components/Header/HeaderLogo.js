// HeaderLogo.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderLogo.scss'
import LogoSvg from '../../assets/icons/LogoSvg'

const HeaderLogo = () => {
    return (
        <Link to='/' className="header__icon">
            <img src={LogoSvg} alt='Logo' />
        </Link>
    )
}

export default HeaderLogo