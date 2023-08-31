import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { client } from '../../client';
import { BsFacebook } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import cover from '../assets/cover-laptop.jpg';
import EditIcon from '@mui/icons-material/Edit';
import {Sponsor} from '../components/index'
import { profilePostsQuery } from '../components/query';
import Post from '../components/Post';

const Profile = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState();
    const nav = useNavigate();
  const handleLogOut = () => {
    nav('/');
  }
    const [data, setData] = useState();
    const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    useEffect(() => {
        client.fetch(`*[_type == 'user' && id == '${id}'] {id,image,userName,likes,friends}`)
        .then((data) => setProfile(data[0]))
        const q = profilePostsQuery(id)
        client.fetch(q).then((info) => setData(info))
    },[])
  return (
    <>
      <div className='sticky top-0'>
        <div className="flex items-center justify-center my-5">
          <div className="flex items-center">
            <BsFacebook size={45} className="text-blue-500 mr-2 rounded-3xl " />
            <form className="flex items-center bg-slate-200 px-3 rounded-3xl">
              <input
                type="text"
                placeholder="Search fb..."
                className="bg-transparent px-2 py-2 w-[100px] md:w-full  outline-none"
                onClick={() => nav("/search")}
              />
              <BsSearch />
            </form>
          </div>
          <button
            className="bg-blue-500 mr-3 lg:hidden text-xs text-white font-bold px-3 py-1 rounded-md"
            onClick={handleLogOut}
          >
            Log out
          </button>
        </div>
      </div>
      <div className="bg-slate-200  flex flex-col ">
        <div className="rounded-md overflow-hidden  bg-white flex flex-col lg:items-center">
          <img
            src={cover}
            className="w-screen lg:w-auto overflow-hidden rounded-md"
            alt=""
          />
          <div className="flex flex-col  md:flex-row mb-10">
            <img
              src={profile?.image}
              className="lg:w-36 w-24 mx-auto  rounded-full border-2 -mt-11 lg:-mt-16 lg:ml-10 ml-6  border-white"
              alt=""
            />
            <div className="div ml-3 mt-2">
              <p className="font-bold lg:text-2xl ">{profile?.userName}</p>
              <div className="flex flex-col md:flex-row">
                <p className="mb-2 font-bold text-slate-500 text-sm md:mb-0">
                  {profile?.likes === null ? 0 : profile?.likes} friends
                </p>
                <div>
                  {userInfo.id === profile?.id ? (
                    <div className="btns flex md:ml-60  text-xl space-x-3">
                      <button className="px-3 py-1 bg-blue-500 text-sm  text-white rounded-md font-bold">
                        + Add to story
                      </button>
                      <button className="px-3 py-1 flex items-center bg-slate-100 text-black text-sm rounded-md font-bold">
                        <EditIcon fontSize="small" />
                        <p className="ml-2">Edit Profile</p>
                      </button>
                    </div>
                  ) : (
                    <div className="btns flex md:ml-60  text-xl space-x-3">
                      <button className="px-3 py-1 bg-blue-500 text-sm  text-white rounded-md font-bold">
                        + Add friend
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="friend lg:px-[17rem] px-0  mx-5  h-28 text-slate-400 my-10 flex justify-center items-center bg-white">
          No friends!!!
        </div>
        <div className="flex justify-center">
          <div className="mb-5 mx-10 hidden md:block">
            <Sponsor />
          </div>
          <div className="posts flex flex-col h-full items-center md:mr-5">
            {data &&
              data.map((item, id) => (
                <div className="lg:w-[34rem] md:w-[24rem] w-screen">
                  <Post data={item} key={id} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile