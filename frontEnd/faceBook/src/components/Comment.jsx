import React, { useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

const Comment = ({ comment }) => {
    const [ liked, setLiked ] = useState(false);
    const audio = new Audio('/LikeSound.mp3')
  return (
    <div className='m-2 lg:w-1/2'>
        <div className="bg-white mb-3 rounded-md px-3 py-2 shadow-md">
            <div className="flex mb-1">
              <img
                src={comment?.postedBy?.image}
                referrerPolicy="no-referrer"
                className="w-10 rounded-full mr-3"
                alt="hi"
              />
              <div className="">
                <p className="text-sm font-bold mb-1">
                  {comment?.postedBy?.userName}
                </p>
              </div>
            </div>
            <p className="mb-2">{comment.message}</p>
            <img className="mb-3" src={comment?.image?.asset?.url} alt="" />
            <div className="flex justify-between">
              <div className="flex items-center">
                {liked ? (
                  <div onClick={() => setLiked(false)} className='flex cursor-pointer'>
                    <ThumbUpAltIcon
                      className="text-blue-500"
                      fontSize="small"
                    />
                      <p className="text-sm ml-2">Like</p>
                  </div>
                ) : (
                  <div onClick={() => {
                    setLiked(true)
                    audio.play();
                  }} className='flex cursor-pointer'>
                    <ThumbUpOffAltIcon fontSize="small" />
                      <p className="text-sm ml-2">Like</p>
                  </div>
                )}
              </div>
              <div className="flex items-center">
                <ChatBubbleOutlineIcon fontSize="small"/>
                <p className="ml-2">Comment</p>
              </div>
              <div className="flex items-center">
                <ShareIcon fontSize="small" />
                <p className="ml-2">Share</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Comment