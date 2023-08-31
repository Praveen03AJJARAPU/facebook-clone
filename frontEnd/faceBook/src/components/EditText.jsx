import React, { useState } from 'react'
import { BsFacebook } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
import { client } from '../../client';
import { v4 as uuidv4 } from 'uuid';


const EditText = () => {
    const [ message, setMessage ] = useState('start typing');
    const nav = useNavigate();
    const { id } = useParams();
    
    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 
    const handleColor = (e) => {setColor(e.target.value)}
    const handleNav = () => {
      nav('/editStory')
      setMessage('')
    }
    const handleSubmit = async (e) => {
      e.preventDefault();      
      if (message !== '') {
        client
          .patch(id)
          .setIfMissing({ stories: [] })
          .insert("after", "stories[-1]", [
            {
              message,
              color: backgroundColor,
              id: uuidv4(),
              postedBy: {
                _type: "_postedBy",
                _ref: id,
              },
            },
          ])
          .commit()
          .then(() => {
            setMessage("");
            nav("/home");
          });

         
    }
    };
  return (
    <div>
      <div>
      <BsFacebook  size={96} className='mx-auto pt-5 text-blue-500 ' />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between items-start  mx-10">
          <div className="flex flex-col">
            <p className="text-3xl font-bold text-blue-500 mb-5">Edit</p>
            <p></p>
            <textarea
              type="text"
              placeholder="Start typing"
              onChange={(e) => setMessage(e.target.value)}
              className="outline-none border-2 rounded-xl px-3 py-1 mb-5"


            />
            <div className="flex">
              <p className="font-bold mr-5">Choose color: </p>
              <input
                type="color"
                name=""
                id="color"
                onChange={(e) => setBackgroundColor(e.target.value)}
                defaultValue={"#ffffff"}
              />
            </div>
            <div className="flex md:mt-10 mt-3">
              <button className='bg-red-500 text-white  px-4 text-lg py-1   mr-2 shadow-md rounded' onClick={handleNav}>Discard</button>
              <button className='bg-green-500 text-white px-4 text-lg py-1 mr-2 shadow-md rounded' onClick={handleSubmit}>Add story</button>
            </div>
          </div>

          <div className="preview md:w-1/2 mx-auto px-10 my-5 border-2 bg-black lg:h-[35rem] h-[24rem] flex justify-center items-center">
            <div
              id="preview"
              className="lg:h-[475px] w-[240px] h-[300px] lg:w-[320px] text-xl justify-center items-center font-bold flex bg-white"
              style={{ backgroundColor }}
            >
              <p>Choose the color</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditText