import React from 'react';
import { Avatar } from "@mui/material";
import './conversation.css';
import AvatarPhoto from "../../assets/images/sbry.jpg";


const Conversation = () => {
  return (
    <div className='conversation'>
        <Avatar className='conversation-img' src={AvatarPhoto}/>
        <div className='conversation-name'>sabriyecebeci</div>
    </div>
  )
}

export default Conversation