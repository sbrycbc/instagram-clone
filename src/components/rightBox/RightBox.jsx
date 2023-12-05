import React from "react";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import AvatarPhoto from "../../assets/images/sbry.jpg";
import FriendPhoto from "../../assets/images/blog2.jpg";
import "./rightBox.css";

const RightBox = () => {
  return (
    <div className="right-box">
      <div className="account">
        <a href="/">
          <Avatar src={AvatarPhoto} sx={{ width: 56, height: 56 }} />
        </a>
        <div className="account-titles">
          <a href="/">sabriyecebeci</a>
          <span>Sabriye Cebeci</span>
        </div >
      </div>
      <span className="friends-title">My Friends</span>
      <ul className="friends-list">
        <li className="friend-item">
          <div className="friend-item-left">
            <a href="/">
              <Avatar src={FriendPhoto} sx={{ width: 40, height: 40 }} />
            </a>
            <div className="friend-username">
              <a href="/">gölgemsi</a>
              <span>Gölge Hanim</span>
            </div>
          </div>
          <div className="friend-item-right">
            <Button
              variant="contained"
              endIcon={<ArrowCircleRightOutlinedIcon />}
              size="small"
            >
              Contained
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RightBox;
