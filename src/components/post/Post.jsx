import React from 'react';
import './post.css';
import { Avatar } from '@mui/material';
import AvatarPhoto from '../../assets/images/sbry.jpg';
import PausePhoto from '../../assets/images/pause.jpg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';



const Post = () => {
  return (
    <div className='post-wrapper'>
      <div className="post-header">
        <div className="post-header-left">
          <a href="/">
            <Avatar
                  src={AvatarPhoto} 
                  sx={{ width: 32, height: 32}}/>
          </a>
          <a href="/" className='profile-username'>sabriyecebeci</a>
        </div>
        <div className="post-header-right">
          <button> 
            <MoreHorizIcon />
          </button>
        </div>
      </div>
      <div className="post-image">
        <img src={PausePhoto} alt="Post img"/>
      </div>
      <div className="post-bottom">
        <div className="post-like">
        <button>
            <FavoriteIcon className='post-like-icon active'/>
        </button>
        </div>
        <span className="post-like-count"> 0 like </span>
        <div className="post-content">
          <a href="/" className='profile-username'>
            sabriyecebeci{" "}
          </a>
          <span className=" post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem aut eius repellat dolorum ipsa facere deserunt debitis ex incidunt.</span>
       </div>      
        <div className="post-time"> 1 dk önce</div>


      </div>

    </div>
  )
}

export default Post