import React from 'react';
import { Avatar } from '@mui/material';
import AvatarVase from '../../assets/images/Vase.jpg'
import './chatOnline.css';

const ChatOnline = () => {
  return (
    <div className="chat-online">
    <div className="chat-online-friend">
      <div className="chat-online-img-container">
        <Avatar src={AvatarVase} />
        <span className="chat-online-badge"></span>
      </div>
      <div className="chat-online-name">lauffrei</div>
    </div>
  </div>
  )
}

export default ChatOnline