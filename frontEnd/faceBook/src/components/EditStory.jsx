import React from 'react'
import { BsFacebook } from "react-icons/bs";
import one from '../assets/text.jpg';
import two from '../assets/image.jpg';
import EditIcon from '@mui/icons-material/Edit';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useNavigate } from 'react-router-dom';


const EditStory = () => {
  const nav = useNavigate();
    const user = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    const handleText = () => {nav(`/editStory/text/${user.id}`)}
    const handlePhoto = () => {nav(`/editStory/photo/${user.id}`)}
    const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    
  return (
    <div className="bg-slate-100 h-screen">
      <div className=''>
      <BsFacebook  size={54} className='mx-auto mt-5 text-blue-500 ' />

      </div>
      <h1 className="text-5xl mx-5 mb-5  text-blue-500 font-bold">Stories</h1>
      <div className="flex md:flex-row items-center  flex-col mx-5 mt-10 lg:mt-0 lg:justify-center md:justify-between">
        <div
          className="grayscale bg-white w-max hover:grayscale-0 rounded-xl overflow-hidden mr-10 shadow-xl duration-200 ease"
          onClick={handleText}
        >
          <p className="lg:text-xl text-sm mb-2 p-3 ">
            Share your
             <span className="lg:text-3xl mx-1 text-xl text-blue-500 font-extrabold">
              thoughts
             </span>
            to the world
          </p>
          <img src={one} className="md:w-full w-[260px] md:h-full" alt="" />
          <div className="absolute top-48 left-36">
            <p className="text-blue-500 mb-3 bg-white rounded-full w-max p-3 shadow-xl ">
              <EditIcon />
            </p>
          </div>
        </div>
        <div className="grayscale w-max hover:grayscale-0 mt-5 rounded-xl overflow-hidden bg-white shadow-xl duration-200  ease-in-out relative" onClick={handlePhoto}>
          <img src={two} className="md:w-full md:h-full w-[270px]" alt="" />

          <p className="lg:text-xl text-sm mb-2 p-3">
            Share your{" "}
            <span className="lg:text-3xl text-xl text-blue-500 font-extrabold">
              memories
            </span>{" "}
            to the world
          </p>

          <div className="absolute md:top-48  ease  duration-300 top-10 left:24 md:left-36">
            <p className="text-blue-500 mb-3 bg-white rounded-full w-max p-3 shadow-xl ">
              <label htmlFor="file">
                <AddAPhotoIcon />
              </label>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditStory