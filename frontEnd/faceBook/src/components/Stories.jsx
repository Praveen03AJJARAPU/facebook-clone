import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { client } from '../../client';
import StoryComponent from './StoryComponent';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const Stories = () => {
  const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  const nav = useNavigate();
  const storyFeed = useNavigate();
  
  const [ stories, setStory ] = useState();


  useEffect(() => {
    var arr;
    client
      .fetch(
        `*[_type == 'user' ]{
          stories[] {
           message,color,
              image  {
               asset -> {
                 url
               }
              } ,
                 postedBy -> {
                     _id,
                     userName,
                     image 
                 }
          }
         }`
      )
      .then((data) => {
        setStory(data.filter((item) => item.stories !== null))

      });
  },[])
  
  const handleNav = (e) => {
    e.preventDefault();
    nav(`/editStory`)
  };
  return (
    <div className=" lg:w-[32rem]  bar overflow-auto">
      <div className="mt-5 w-max relative flex mx-5  overflow-hidden lg:bg-transparent p-5 lg:p-0  rounded-xl">
        <div
          className="w-28 md:w-32 overflow-hidden relative mr-5 cursor-pointer bg-white rounded-md "
          onClick={handleNav}
        >
          <img src={userInfo.image} referrerPolicy='no-referrer' className="h-36 w-32 " alt="" />
          <AddIcon
            className="z-20 text-blue-500  p-2 bg-white rounded-full mx-12 -mt-6 shadow-lg"
            fontSize="large"
          />
          <p className="text-center  font-medium">Add story</p>
        </div>
        <div className='flex'>
          {stories?.map((story, id) => {
            const color = story?.stories[0]?.color;
            return (
              <div key={id} className='mr-3' onClick={() => storyFeed(`/story/${story?.stories[0]?.postedBy?._id}`)}>
                {!story?.stories[0].image && (
                  <div className='h-[190px] w-[120px] relative overflow-hidden rounded-md flex justify-center items-center' style={{backgroundColor: color}}>
                    <p className='font-semibold text-xs'>{story?.stories[0]?.message}</p>
                    <div className='flex absolute items-center top-2 left-1'>
                      <img referrerPolicy='no-referrer' className='rounded-full w-10 border-blue-300 border-2' src={story?.stories[0]?.postedBy?.image} alt="" />

                    </div>
                  </div>
                )}
                {story?.stories[0].image && (
                  <div className='h-[190px] w-[120px] relative overflow-hidden rounded-md flex justify-center items-center bg-black' >
                    <img src={story?.stories[0].image?.asset?.url} alt="" />
                    <div className='flex absolute items-center top-2 left-1'>
                      <img referrerPolicy='no-referrer' className='rounded-full w-10 border-blue-500 border-2' src={story?.stories[0]?.postedBy?.image} alt="" />

                    </div>
                  </div>
                )}
              </div>
            );})}
              </div>
      </div>
    </div>
  );
}

export default Stories