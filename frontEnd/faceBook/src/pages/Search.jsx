import React, { useState } from 'react'
import { BsFacebook } from "react-icons/bs";
import { client } from '../../client';
import { BsSearch } from "react-icons/bs";
import FriendsComponent from '../components/FriendsComponent';

const Search = () => {
    const [ name, setName ] = useState();
  const [data, setData] = useState();
  const handleSearch = (e) => {
    e.preventDefault();
    if (name !== "") {
      client
        .fetch(`*[_type == 'user' &&  userName match '${name}' ]`)
        .then((data) => {
          if (data == null || data?.length == 0) {

            setData('')
          } else {
            setData(data)
            setName('')
          }});
    }
}

  return (
    <div>
      <div className="flex items-center justify-center py-5 bg-slate-300">
        <BsFacebook size={45} className="text-blue-500 mr-4  rounded-3xl " />
        <form
          className="flex items-center bg-slate-200 px-3 rounded-3xl"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search facebook"
            className="bg-transparent px-2 py-2 outline-none"
            onChange={(e) => setName(e.target.value)}
          />
          <BsSearch />
        </form>
      </div>
      {!data &&  (
        <div className='h-screen bg-slate-200 flex justify-center items-center'>
            <p className='text-xl font-medium'>No users found!</p>
        </div>
      )}
      <div className='bg-slate-100 h-screen'>

      <div className='flex flex-wrap justify-center '>
      {data && data.map((item, id) => (
          <FriendsComponent key={id} friend={item} />
          ))}
          </div>

      </div>

      
     </div> 
  )}

export default Search