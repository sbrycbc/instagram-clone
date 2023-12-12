import React from "react";
import { Button } from "@mui/material";
import "./messenger.css";

const Messenger = () => {
  return (
    <div className="messenger">
      <div className="chat-menu">
        <div className="chat-menu-wrapper">
          <input
            type="text"
            className="chat-menu-input"
            placeholder="Search for Friends"
          />
        </div>
      </div>
      <form className="chat-box">
        <div className="chat-box-wrapper">
          <div className="chat-box-top">
          </div>
          <div className="chat-box-bottom">
              <textarea
              className="chat-message-input"
              placeholder="Write something...">
              </textarea>
            <Button
              color="success"
              variant="contained"
              className="chat-submit-button"
              type="submit">
              Send
            </Button>
          </div>
        </div>
      </form>
      <div className="chat-online">
        <div className="chat-online-wrapper">
          <h4>Online Users</h4>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
