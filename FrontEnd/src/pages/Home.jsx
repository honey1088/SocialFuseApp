import React from 'react';
import '../styles/Home.css';
import Post from '../components/Post';
import Navbar from '../components/Navbar';
import Stories from '../components/Stories';

const Home = () => {
  return (
    <div className='homePage'>
      <Navbar />
      <Post />
      <Stories />
    </div>
  )
}

export default Home