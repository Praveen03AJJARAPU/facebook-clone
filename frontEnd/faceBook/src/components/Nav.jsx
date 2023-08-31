import React, { useState } from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BiSolidVideos } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Nav = ({ index, setIndex }) => {
  const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  const arr =  [AiFillHome, BiSolidVideos,BsCartFill, BsPeople, ]
  const nav = useNavigate();

  const handleLogOut = () => {
    nav('/');
  }


  
  
  return (
    <div className="sticky top-0 z-20 ">
      <div className="bg-white py-3 px-5 flex flex-col lg:flex-row justify-between  items-center">
        <div className="search flex items-center md:space-x-10 space-x-3 mb-5">
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

        <div className="lg:mr-28 hidden lg:block">
          <div className="flex justify-between">
            <div className="relative cursor-pointer">
              <AiFillHome
                className={`md:mr-20 ${
                  index == 1 ? "text-blue-500" : ""
                }   duration-300 ease-out`}
                onClick={() => setIndex(1)}
                size={30}
              />
              <div
                className={
                  index == 1
                    ? `duration-300 ease-in absolute w-12 -left-2 h-[5px] top-[54px] rounded-xl bg-blue-500`
                    : ``
                }
              ></div>
            </div>
            <div className="relative cursor-pointer">
              <BiSolidVideos
                className={`md:mr-20 ${
                  index == 2 ? "text-blue-500" : ""
                } duration-300 ease-out`}
                onClick={() => setIndex(2)}
                size={30}
              />
              <div
                className={
                  index == 2
                    ? `duration-300 ease-in absolute w-12 -left-2 h-[5px] top-[54px] rounded-xl bg-blue-500`
                    : ``
                }
              ></div>
            </div>
            <div className="relative cursor-pointer">
              <BsCartFill
                className={`md:mr-20 ${
                  index == 3 ? "text-blue-500" : ""
                }   duration-300 ease-out`}
                onClick={() => setIndex(3)}
                size={30}
              />
              <div
                className={
                  index == 3
                    ? `duration-300 ease-in absolute w-12 -left-2 h-[5px] top-[54px] rounded-xl bg-blue-500`
                    : ``
                }
              ></div>
            </div>
            <div className="relative cursor-pointer">
              <BsPeople
                className={`md:mr-20 ${
                  index == 4 ? "text-blue-500" : ""
                }     duration-300 ease-out`}
                onClick={() => setIndex(4)}
                size={30}
              />
              <div
                className={
                  index == 4
                    ? `duration-300 ease-in absolute w-12 -left-2 h-[5px] top-[54px] rounded-xl bg-blue-500`
                    : ``
                }
              ></div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block ">
          <div className="flex items-center">
            <MdNotifications
              size={40}
              className="bg-slate-300 rounded-full px-2 mr-2"
            />
            <AiFillMessage
              size={40}
              className="bg-slate-300 rounded-full px-2 mr-2"
            />

            <button
              className="text-white hover:text-blue-500 hover:bg-white duration-200 ease-in-out border-2 border-transparent hover:border-blue-500  mr-3 bg-blue-500 font-bold px-3 py-1 rounded-md"
              onClick={handleLogOut}
            >
              Log out
            </button>

            <img src={userInfo.image} className="w-10 rounded-full" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-around lg:hidden bg-white pb-5">
        <div className="relative cursor-pointer">
          <AiFillHome
            className={`md:mr-20 ${
              index == 1 ? "text-blue-500" : ""
            }   duration-300 ease-out`}
            onClick={() => setIndex(1)}
            size={30}
          />
          <div
            className={
              index == 1
                ? `duration-300 ease-in absolute w-12 -left-2 h-[5px] top-[48px] rounded-xl bg-blue-500`
                : ``
            }
          ></div>
        </div>
        <div className="relative cursor-pointer">
          <BiSolidVideos
            className={`md:mr-20 ${
              index == 2 ? "text-blue-500" : ""
            } duration-300 ease-out`}
            onClick={() => setIndex(2)}
            size={30}
          />
          <div
            className={
              index == 2
                ? `duration-300 ease-in absolute w-12 -left-2 h-[5px] top-[48px] rounded-xl bg-blue-500`
                : ``
            }
          ></div>
        </div>
        <div className="relative cursor-pointer">
          <BsCartFill
            className={`md:mr-20 ${
              index == 3 ? "text-blue-500" : ""
            }   duration-300 ease-out`}
            onClick={() => setIndex(3)}
            size={30}
          />
          <div
            className={
              index == 3
                ? `duration-300 ease-in absolute w-12 -left-2 h-[5px] top-[48px] rounded-xl bg-blue-500`
                : ``
            }
          ></div>
        </div>
        <div className="relative cursor-pointer">
          <BsPeople
            className={`md:mr-20 ${
              index == 4 ? "text-blue-500" : ""
            }     duration-300 ease-out`}
            onClick={() => setIndex(4)}
            size={30}
          />
          <div
            className={
              index == 4
                ? `duration-300 ease-in absolute w-12 -left-2 h-[5px] top-[48px] rounded-xl bg-blue-500`
                : ``
            }
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Nav