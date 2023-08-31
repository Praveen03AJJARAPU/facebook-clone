import React, { useState } from 'react'

const FriendsComponent = ({ friend }) => {
    const [ requested, setRequested ] = useState(false);
  return (
    <div className="bg-white mx-3 px-3 py-3  md:px-0 items-center md:py-0 flex md:flex-col flex-row rounded-lg overflow-hidden my-3">
            <img
              src={friend.image}
              alt=""
              className="rounded-full md:rounded-none mr-3 md:mr-0 w-16 md:w-full"
            />

            <div className="md:px-7  md:py-5">
              <p className="font-semibold mb-2">{friend.userName}</p>
              <div className="flex   md:flex-col">
                {requested ? (
                  <button className="bg-blue-500  text-white md:px-9 px-3 font-medium mr-2 md:mr-0 md:mb-2 py-1 rounded-md" onClick={() => setRequested(false)}>
                  Requested
                </button>
                ) : (
                  <button className="bg-blue-500  text-white md:px-9 px-3 font-medium mr-2 md:mr-0 md:mb-2 py-1 rounded-md" onClick={() => setRequested(true)}>
                  Add friend
                </button>
                ) }
                
                
                <button className="bg-slate-300  md:px-5 mr-2 md:mr-0 py-1 px-3 rounded-md font-medium">
                  Remove
                </button>
              </div>
            </div>
          </div>
  )
}

export default FriendsComponent