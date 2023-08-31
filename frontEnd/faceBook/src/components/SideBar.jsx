import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import UpdateIcon from '@mui/icons-material/Update';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StoreIcon from '@mui/icons-material/Store';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const nav = useNavigate();
  const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  const icons = [
    { icon: GroupsIcon, title: "friends" },
    { icon: PeopleIcon, title: "groups" },
    { icon: UpdateIcon, title: "memories" },
    { icon: BookmarkIcon, title: "saved" },
    { icon: OndemandVideoIcon, title: "video" },
    { icon: StoreIcon, title: "marketplace" },
    { icon: DynamicFeedIcon, title: "feeds" },
    { icon: EmojiEventsIcon, title: "event" },
    { icon: EqualizerIcon, title: "ads manager" },
  ];
  const handleNav = () => {nav(`/profile/${userInfo.id}`)}


  return (
    <div className='hidden lg:block px-10 m-2 rounded-md shadow-sm py-5 sticky top-20 bg-white h-screen'>
      <div className="flex items-center cursor-pointer" onClick={handleNav}>
      <img src={userInfo.image} className="w-10 rounded-full mr-3" alt=""  />
      <p className='font-bold'>{userInfo.name}</p>
      </div>
      {icons.map((icon,id) => (
        <div className='flex items-center mt-4 hover:bg-blue-200 px-2 rounded-3xl py-1' key={id}>
          < icon.icon fontSize='large' className='text-blue-500 mr-3' />
          <p className='capitalize font-medium'>{icon.title}</p>
        </div>
      ))}
    </div>
  );
}

export default SideBar