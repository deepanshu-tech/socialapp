// created by Ishan Bajaj at 20220502 12:21.
// 
// this is made by me

import "./sidebar.css"

import { ChatBubble } from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {/* <li className="sidebarListItem">
              <RssFeed className="sidebarIcon"/>
              <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
              <People className="sidebarIcon"/>
              <span className="sidebarListItemText">Friends</span>
          </li> */}
          <li className="sidebarListItem">
              <ChatBubble className="sidebarIcon"/>
              <span className="sidebarListItemText">Chat</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriend">
          {/* <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
            </li> */}
          {/* 
          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>
          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>
          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>
          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>
          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>
          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>
          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>
          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>
          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>
          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>
          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam> */}
          {/* </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li> 
              <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li>

          <li className="sidebarFriendList" >
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <spam className="sidebarFriendName">Wong</spam>
          </li> */}
        </ul>
      </div>
    </div>
  )
}
