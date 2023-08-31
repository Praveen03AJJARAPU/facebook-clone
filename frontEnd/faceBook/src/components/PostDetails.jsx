import React, { useEffect, useState } from 'react'
import { client } from '../../client';
import Nav from './Nav';
import { useNavigate, useParams } from 'react-router-dom';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import { v4 as uuidv4 } from 'uuid';


import { postQuery } from './query';
import Comment from './Comment';

const Comments = () => {
    const [ message, setMessage ] = useState('');
    const [ image, setImage ] = useState('');
    const [values, setValues] = useState();
    const nav = useNavigate();
    const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    const handleNav = () => { nav(`/profile/${data?.postedBy?._id}`) }
    const { id } = useParams();
    const handleComments = (e) => {
      e.preventDefault();
      if(message != '') {
        client
          .patch(id)
          .setIfMissing({ comments: [] })
          .insert("after", "comments[-1]", [
            {
              message,
              _key: uuidv4(),
              postedBy: {
                _type: "_postedBy",
                _ref: userInfo?.id,
              },
            },
          ])
          .commit()
          .then(() => {
            setMessage("");
          });
      }
      }

      const imageUpload = async (e) => {
        e.preventDefault();
        const selectedFile = e.target.files[0];
        if (
          selectedFile.type === "image/png" ||
          selectedFile.type === "image/svg" ||
          selectedFile.type === "image/jpeg" ||
          selectedFile.type === "image/gif" ||
          selectedFile.type === "image/tiff"
        ) {
          await client.assets
            .upload("image", selectedFile, {
              contentType: selectedFile.type,
              filename: selectedFile.name,
            })
            .then((doc) => {
              setImage(doc);
            })
            .catch((err) => console.log(err));
        }
      };

    useEffect(() => {
      const q = postQuery(id);
      client.fetch(q).then((data) => {setValues(data[0]);})
    },[message])
  return (
    <div>
      <Nav />
      <div className="flex flex-col lg:mx-10 md:flex-row md:w-1/10">
        <div className="content lg:m-2 mb-4 md:mb-0 sticky z-20 top-32 bg-white h-full ">
          <div className="flex ml-2 w-max">
            <img
              src={values?.postedBy?.image}
              className="w-10 lg:w-20 rounded-full"
              alt=""
              referrerPolicy='no-referrer'
            />
            <div className="names ml-2">
              <p className="lg:text-lg font-bold">{values?.postedBy?.userName}</p>
              <p className="text-xs md:text-md lg:mt-2">
                {values?._createdAt.slice(11, 13) > 12
                  ? values._createdAt?.slice(11, 13) -
                    12 +
                    values._createdAt?.slice(13, 16) +
                    " PM"
                  : values?._createdAt.slice(11, 16) + " AM"}
              </p>
            </div>
          </div>
          <div className="mt-5 ">
            <p className="md:text-2xl ml-5 text-lg mb-5">{values?.message}</p>
            <div className="w-full ml-3">
              <img
                src={values?.image?.asset?.url}
                className="object-cover w-max"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full ml-5 ">
          <p className="md:text-4xl text-2xl font-bold text-blue-500">Comments</p>
          <form className="items-center mt-5" onSubmit={handleComments}>
            <div className="flex">
              <img
                src={values?.postedBy?.image}
                className="w-10 rounded-full mr-3"
                alt=""
              />
              <input
                type="text"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="outline-none bg-slate-200 px-3 py-2 md:w-1/2 w-full mr-5 rounded-2xl "
                placeholder="Type comment..."
              />
            </div>
          </form>
          <div className="flex my-5">
            <div className="flex">
              <label htmlFor="image-upload">
                <AddAPhotoIcon className="text-red-500" />
              </label>
              <input
                type="file"
                className="hidden"
                onChange={imageUpload}
                id="image-upload"
              />
              <label htmlFor="image-upload" className="ml-5">
                Image
              </label>
            </div>
            <div className="flex ml-10">
              <label htmlFor="video-upload">
                <VideocamIcon className="text-green-400" />
              </label>
              <input
                type="file"
                className="hidden"
                onChange={imageUpload}
                id="video-upload"
              />
              <label htmlFor="video-upload" className="ml-5">
                Video
              </label>
            </div>
          </div>
          {values?.comments?.map((comment,id) => (
            <Comment comment={comment} key={id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comments