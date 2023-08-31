import React, { useEffect, useState } from 'react'
import { client } from '../../client'
import { Feed, Nav, SideBar, Sponsor } from '../components';
import vids from '../assets/no-videos.jpg'
import Market from '../components/Market';
import Friends from '../components/Friends';




const Home = ({ user }) => {
    const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    const [index, setIndex ] = useState(1);

  return (
    <div className="bg-slate-200">
      <Nav index={index} setIndex={setIndex} />
      {index == 1 && (
        <div className="feed flex justify-between">
          <SideBar />
          <Feed user={user} />
          <Sponsor />
        </div>
      )}
      { index == 2 && (
        <div className='md:w-[375px] mx-auto my-10 h-screen '>
          <img src={vids} alt="" />
          <p className='text-center font-bold'>Videos are not available!!!</p>
        </div>
      )}
      { index == 3 && (
          <Market />
        )
      }
      {index == 4 && (
          <Friends />
        )
      }
    </div>
  );
}


export default Home