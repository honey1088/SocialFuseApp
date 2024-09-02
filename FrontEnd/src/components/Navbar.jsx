import React, { useContext, useEffect, useState } from 'react';
import "../styles/Navbar.css";
import Logo1 from '../images/SocialFuse.png';
import { BiHomeAlt } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { GeneralContext } from '../context/GeneralContext';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import axios from 'axios';
import { AuthenticationContext} from '../context/AuthenticationContext';

const Navbar = () => {
    const { isCreatPostOpen, setIsCreatePostOpen, setIsCreateStoryOpen, isNotificationsOpen, setNotificationsOpen } = useContext(GeneralContext);
    const {logout} = useContext(AuthenticationContext);
    const [isMoreInfoOpen, setMoreInfoOpen] = useState(false);
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const profilePic = localStorage.getItem('profilePic');
    const userId = localStorage.getItem('userId');
    const {socket} = useContext(GeneralContext);
    const [search, setSearch] = useState('');
  const [searchedUser, setSearchedUser] = useState();

  const handleSearch = async ()=>{
    await socket.emit('user-search', {username: search});
    setSearch('')
  }
  useEffect(()=>{
    socket.on('searched-user', ({user})=>{
      setSearchedUser(user);
    });
  },[socket])

  const handleInputChange = async (e) => {
    const query = e.target.value;
    setSearch(query);

    if (query.length > 0) {
      try {
        // Assuming you have an API endpoint that searches for users
        const response = await axios.get(`http://localhost:5000/searchUsers?q=${query}`);
        setSearchedUser(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setSearchedUser([]);
    }
  };
    return (
      <div className="Navbar">
        <span>
          <img 
          className="logoImg1" src={Logo1} alt="" 
          onClick={() => navigate("/")} 
          style={{ cursor: "pointer" }}/>
        </span>
        <span className="nav-item" onClick={() => navigate("/")} >
          <BiHomeAlt className="homebtn btns" />
          <p className="nav-text">Home</p>
        </span>
        <span className="nav-item" onClick={() => navigate("/chat")}>
          <FiMessageSquare
            className="chatbtn btns"
          />
          <p className="nav-text">Messages</p>
        </span>
        <span className="nav-item" onClick={() => {
              setIsCreatePostOpen(!isCreatPostOpen);
              setIsCreateStoryOpen(false);}}>
          <CgAddR
            className="createPostbtn btns"
          />
          <p className="nav-text">Create</p>
        </span>
        <span className="nav-item" onClick={() => setNotificationsOpen(!isNotificationsOpen)}>
          <IoIosNotifications
            className="Notifybtn btns"
          />
          <p className="nav-text">Notifications</p>
        </span>

        <div className="LogoSearch">
      <span className="nav-item" onClick={handleSearch}>
        <FaSearch className="Searchbtn btns" />
        <p className="nav-text">Search</p>
      </span>
      {showSearch && (
        <div className="Search">
          <input
            type="text"
            placeholder="Search"
            onChange={handleInputChange}
            value={search}
          />
        </div>
      )}
      <Search searchedUser={searchedUser} />
    </div>
        {/* <span className="nav-item"  onClick={handleSearch}>
          <FaSearch
            className="Searchbtn btns"
          />
          <p className="nav-text">Search</p>
        </span> */}
        <span className="nav-item" onClick={() => navigate(`/profile/${userId}`)}>
          <img
            className="profile"
            src={profilePic}
            alt=""
          />
          <p className="nav-text">Profile</p>
        </span>
        <span className="nav-item" onClick={() => setMoreInfoOpen(!isMoreInfoOpen)}>
    <IoMdMore
        className="Moreinfo btns"
    />
    <p className="nav-text">More</p>
</span>
        {isMoreInfoOpen && (
          <div className="profileControlBtns">
            <button
              onClick={async () => {
                await logout();
              }}
            >
              Logout
            </button>
          </div>
        )}

        {/* <span>
        <div className="LogoSearch">
          <div className="s-icon" onClick={handleSearch}>
            <TbSearch />
          </div>
          {showSearch && (
            <div className="Search">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </div>
          )}
          <Search
            searchedUser={searchedUser}
            setSearchedUser={setSearchedUser}
          />
        </div>
        </span> */}
      </div>
    );
};

export default Navbar;