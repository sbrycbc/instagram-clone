import React from 'react';
import './post.css';
import { Avatar } from '@mui/material';
import AvatarFoto from '../../assets/images/sbry.jpg'



const Post = () => {
  return (
    <div className='post-wrapper'>
      <div className="post-header">
        <div className="post-header-left">
          <a href="/">
            <Avatar
                  src={AvatarFoto} 
                  sx={{ width: 32, height: 32}}/>
          </a>
          <a href="/">sabriyecebeci</a>
        </div>
        <div className="post-header-right"></div>
      </div>
      <div className="post-image"></div>
      <div className="post-bottom"></div>

    </div>
  )
}

export default Post