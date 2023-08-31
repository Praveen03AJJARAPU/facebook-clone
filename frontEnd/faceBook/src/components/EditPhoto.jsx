import React, { useState } from 'react'
import { BsFacebook } from "react-icons/bs";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate, useParams } from 'react-router-dom';
import { client } from '../../client';
import { v4 as uuidv4 } from 'uuid';

const EditPhoto = () => {
    const [ message, setMessage ] = useState('About this pic...');
    const [ image, setImage ] = useState(null);

    const nav = useNavigate();
    const { id } = useParams();
    const handleNav = () => {nav('/editStory')}

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

      const handleSubmit = async (e) => {
        e.preventDefault();        
        if (image !== '' && image !== null) {
          client.patch(id).setIfMissing({ stories: [] })
          .insert('after', 'stories[-1]', [
            {
              message,
              id: uuidv4(),
              postedBy: {
                _type: "_postedBy",
                _ref: id,
              },
              image: {
                _type: "image",
                asset: { _type: "reference", _ref: image?._id },
              },
            }
          ]).commit().then(() => {
            setMessage('');
            setImage('')
            nav('/home');
          })
        }
      };

    

  return (
    <div>
      <div>
      <BsFacebook  size={96} className='mx-auto pt-5 text-blue-500 ' />
        <div className="flex flex-col md:flex-row  md:justify-between items-start  mx-10">
          <div className="flex flex-col">
            <p className="text-3xl font-bold text-blue-500 mb-5">Edit</p>
            <textarea
              type="text"
              placeholder="About the pic..."
              onChange={(e) => setMessage(e.target.value)}
              className="outline-none border-2 rounded-xl px-3 py-1 mb-5"
              rows={7}
              cols={40}
            />

            <div className="flex md:mt-10 mt-3">
              <button
                className="bg-red-500 text-white  px-4 text-lg py-1   mr-2 shadow-md rounded"
                onClick={handleNav}
              >
                Discard
              </button>
              <button className="bg-green-500 text-white px-4 text-lg py-1 mr-2 shadow-md rounded" onClick={handleSubmit}>
                Add story
              </button>
            </div>
          </div>

          <div className="preview md:w-1/2 mx-auto px-10 my-5 border-2 bg-black lg:h-[32rem] h-[24rem] w- flex justify-center items-center">
            <div
              id="preview"
              className="lg:h-[475px] relative w-[240px] h-[305px] lg:w-[320px] text-xl justify-center items-center font-bold flex bg-white"
            >
              {!image && (
                <form action="" onChange={imageUpload}>
                  <input type="file" className="hidden" name="" id="photo" />
                  <label htmlFor="photo" className="cursor-pointer">
                    <AddAPhotoIcon />
                  </label>
                </form>
              )}
              {image && (
                <div className="relative">
                  <img src={image?.url} alt="" />
                  <div onClick={() => setImage("")}>
                    <CancelIcon className="cursor-pointer absolute top-0 right-0 text-red-500" />
                  </div>
                </div>
              )}
              <p className="absolute bottom-28 w-full font-light font-[inter]  text-lg text-center backdrop-blur-md">
                {message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPhoto