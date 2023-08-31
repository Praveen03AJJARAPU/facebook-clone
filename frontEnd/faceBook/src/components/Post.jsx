import React, { useEffect, useState } from 'react'
import { client } from '../../client';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { ContactSupportOutlined } from '@mui/icons-material';




const Post = ({ data, user }) => {
  const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    const [ liked, setLiked ] = useState(false);
    // const [ musicURL, setMusicURL] = useState('');
    const [ show, setShow ] = useState(false);

    const nav = useNavigate();
    const handleNav = () => { nav(`/profile/${data?.postedBy?._id}`) }
    const toComments = () => {
      nav(`/postDetails/${data?._id}`)
    }
    const audio = new Audio('/LikeSound.mp3')

  const handleDelete = (id) => {
    client.delete(id).then(() => {
      window.location.reload()
    })
    
  }
    
    

  return (
    <div className='relative'>
      {data && (
        <div className="bg-white mb-3 rounded-md px-3 py-2 shadow-lg">
          <div className="flex justify-between">
          <div className="flex mb-1">
            <img
              src={data?.postedBy?.image}
              referrerPolicy="no-referrer"
              className="w-10 rounded-full mr-3 cursor-pointer"
              alt="hi"
              onClick={handleNav}
              />
            <div className="">
              <p className="text-sm font-bold mb-1 cursor-pointer" onClick={handleNav}>
                {data?.postedBy?.userName}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                {data?._createdAt.slice(11, 13) > 12
                  ? data._createdAt?.slice(11, 13) -
                    12 +
                    data._createdAt?.slice(13, 16) +
                    " PM"
                  : data?._createdAt.slice(11, 16) + " AM"}
              </p>
            </div>
          </div>
          <div className='relative cursor-pointer' onClick={() => setShow((prev) => !prev)}>
          { userInfo.id === data?.postedBy?._id &&  <MoreVertIcon fontSize='small'  />}
          </div>
        
          {show &&  <div className='flex absolute cursor-pointer bg-black text-white px-3 py-2 top-10  right-0 rounded-md delete space-x-2' onClick={() => {  handleDelete(data?._id)}}>
            <DeleteIcon className='text-red-500' />
            <p>Delete</p>
          </div> }
</div>
          <p className="mb-2 mt-3 text-sm md:text-base">{data.message}</p>
          <img className="mb-3" src={data?.image?.asset?.url} alt="" />
          <div className="flex justify-between">
            <div className="flex items-center">
              {liked ? (
                <div className='flex cursor-pointer' onClick={() => setLiked(false)}>
                  <ThumbUpAltIcon className="text-blue-500" fontSize="small" />
                  <p className="text-sm ml-2">Like</p>
                </div>
              ) : (
                <div onClick={() => {
                  setLiked(true)
                  audio.play();
                }} className='duration-1000 cursor-pointer ease flex'>
                  <ThumbUpOffAltIcon fontSize="small" />
                  <p className="text-sm ml-2">Like</p>
                </div>
              )}
            </div>
            <div className="flex items-center cursor-pointer" onClick={toComments}>
              <ChatBubbleOutlineIcon fontSize="small" />
              <p className="ml-2">Comment</p>
            </div>
            <div className="flex items-center">
              <ShareIcon fontSize="small" />
              <p className="ml-2">Share</p>
            </div>
          </div>
        </div>
      )}
      </div>
  );
}

export default Post