import React, { useEffect, useState } from 'react'
import Stories from './Stories'
import CollectionsIcon from '@mui/icons-material/Collections';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import { client } from '../../client';
import CancelIcon from '@mui/icons-material/Cancel';
import Post from './Post';
import { useNavigate } from 'react-router-dom';
import { Howl } from 'howler';

const Feed = ({ user }) => {
  const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  const [ message, setMessage ] = useState('');
  const [ image, setImage ] = useState(null);
  const [ data, setData ] = useState([]);

  var id;
  useEffect(() => {
    client
      .fetch(`*[_type == 'user' && id == '${userInfo.id}']`)
      .then((data) => {
        id = data[0].id;
      });
    client
      .fetch(
        `*[_type == 'post']{message,_id,image {asset -> {url}}, postedBy -> {_id,userName,image,},_createdAt,comments,likes}| order(_createdAt desc)`
      )
      .then((data) => {
        setData(data);
      });
  }, [message]);

  const navigate = useNavigate();
  const handleCancel = () => {setImage("");};

  const imageUpload = async (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    if (selectedFile.type === "image/png" ||selectedFile.type === "image/svg" ||selectedFile.type === "image/jpeg" || selectedFile.type === "image/gif" ||selectedFile.type === "image/tiff") {
      await client.assets.upload("image", selectedFile, { contentType: selectedFile.type, filename: selectedFile.name,}).then((doc) => {setImage(doc)}).catch((err) => console.log(err));}};

      const play = () => {
        const audio = new Howl({
          src: '/PostSound.mp3',
          html5: true
        })
        audio.play();
      }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message !== "") {
      const doc = {
        _type: "post",
        message,
        
        userid: user,
        postedBy: { _type: "reference", _ref: userInfo?.id },
        image: {
          _type: "image",
          asset: { _type: "reference", _ref: image?._id },
        },
      };
      await client.create(doc).then(() => {
        setMessage('')
        setImage("")
        play();
    });}
  };


  const handleNav = () => {
    navigate(`/profile/${userInfo?.id}`);
  };
  
  return (
    <div className="my-0  w-screen lg:w-1/3  ">
      <Stories />

      <div className="bg-white mt-5 p-3 mx-3 rounded-xl shadow-md mb-4">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <div className="flex mb-5">
              <img
                src={userInfo.image}
                className="w-10 rounded-full cursor-pointer"
                referrerPolicy="no-refferer"
                alt=""
                onClick={handleNav}
              />
              <input
                type="text"
                className="bg-slate-200 px-4 py-2 outline-none w-full rounded-3xl ml-2 md:ml-3"
                placeholder="Whats on your mind ?"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <button className='bg-blue-500 -mt-5 ml-2 text-white px-5 py-1 rounded-md' onClick={handleSubmit}>Post</button>
          </div>
          {image && (
            <div className="relative">
              <CancelIcon
                className="absolute text-red-500 right-16 top-3 cursor-pointer"
                onClick={handleCancel}
              />
              <img src={image?.url} alt="" className="mb-5 w-3/4 mx-auto" />
            </div>
          )}
          <div className="flex  justify-around">
            <div className="flex items-center">
              <label htmlFor="image-upload">
                <AddAPhotoIcon className="text-red-500 cursor-pointer" />
              </label>
              <input
                type="file"
                className="hidden"
                onChange={imageUpload}
                id="image-upload"
              />
              <label htmlFor="image-upload" className="ml-4 cursor-pointer">
                Image
              </label>
            </div>
            <div className="flex items-center">
              <label htmlFor="video-upload">
                <VideocamIcon className="text-green-400 cursor-pointer" />
              </label>
              <input
                type="file"
                className="hidden"
                onChange={imageUpload}
                id="video-upload"
              />
              <label htmlFor="video-upload" className="ml-4 cursor-pointer">
                Video
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className='mx-auto px-3 mb-3 rounded-2xl animate-pulse bg-red-500 py-1 text-white font-bold w-max'>
        <p>Video format is not supported!</p>
      </div>
      <>
        {data &&
          data.map((item, id) => (
            <div key={id} className="mx-3">
              <Post data={item} key={item._id} user={user} />
            </div>
          ))}
      </>
    </div>
  );
}

export default Feed