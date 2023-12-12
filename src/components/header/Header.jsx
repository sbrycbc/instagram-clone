import React from 'react';
import Logo from '../logo/Logo';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import HomeIcon from '@mui/icons-material/Home';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Avatar, Box } from '@mui/material';
import AvatarFoto from '../../assets/images/sbry.jpg'
import "./header.css";

const Header = ({handleOpen}) => {
  return (
    <div className='header-wrapper'>
        <div className="container"> 
        <div className="header">
            <Logo />
            <Box sx={{ position: "relative" }}>
            <div className="search">
              <FindReplaceIcon className='search-icon'/>
              <input type="text" placeholder='Search' />
              </div>
              </Box>
              <div className="header-links">
                <a href="/">
                   <HomeIcon className='icon'/>
                </a>
                <a href="/">
                   <ModeCommentIcon className='icon'/>
                </a>
                
                   <AddBoxIcon 
                    className='icon'
                    style={{ cursor: "pointer" }}
                    onClick={handleOpen}/>
              
                <a href="/">
                <Avatar alt="Cindy Baker"
                src={AvatarFoto}
                sx={{ width: 28, height: 28 }} />
                </a>
              </div>
            </div>
        </div>      
    </div>
  )
}

export default Header