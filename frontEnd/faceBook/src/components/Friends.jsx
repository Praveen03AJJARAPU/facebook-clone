import React, { useEffect, useState } from 'react'
import { client } from '../../client';
import FriendsComponent from './FriendsComponent';

const Friends = () => {
  const [ friends, setFriends ] = useState();

  const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  useEffect(() => {
    client.fetch(`*[_type == 'user']{id, userName, image}`)
    .then((data) => setFriends(data?.filter((item) => item.id !== userInfo.id)));
  },[])
  return (
    <div className='h-screen'>
      <h1 className='ml-5 my-5 font-bold md:text-4xl text-2xl text-blue-500'>Suggested for you:</h1>
      <div className="md:flex justify-center flex-none  md:flex-wrap">
        {friends?.map((friend, id) => (
          <FriendsComponent key={id} friend={friend} />
        ))}
      </div>
    </div>
  );
}

export default Friends