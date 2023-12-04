import React from 'react';
import Logo from '../logo/Logo';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import "./header.css";

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className="container"> 
        <div className="header">
            <Logo />
            <div className="search">
              <FindReplaceIcon className='search-icon'/>
              <input type="text" placeholder='Search' />
              </div>
            </div>
        </div>      
    </div>
  )
}

export default Header