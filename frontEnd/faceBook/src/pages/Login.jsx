import React, { useEffect } from 'react'
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { BsFacebook } from "react-icons/bs";
import jwt_decode from "jwt-decode";
import logo from '/fb-logo.svg?url'
import Slide from '@mui/material/Slide';
import { v4 as uuidv4 } from 'uuid';
import {client} from '../../client';
import { useNavigate } from 'react-router-dom';




const Login = ({ setUser }) => {

  const navigate = useNavigate();


  return (  
      <div className="main h-screen flex bg-blue-100 flex-col md:flex-row justify-center md:justify-around items-center">
        <div className="flex flex-col justify-center md:justify-normal items-center">
          <img className="w-54  hidden md:block" src={logo} alt="" />
          <BsFacebook className="text-blue-500 md:hidden block" size={50} />
          <p className="md:text-2xl text-sm  ml-5 hidden md:block ">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="bg-white md:px-20 flex flex-col items-center px-5 py-5 md:py-10 mt-10 shadow-xl rounded-md mx-5">
          <GoogleOAuthProvider
            key="AIzaSyDnbl199CnaUvBEGSeJ_fhLWSrskfUlfvs"
            clientId="380868678264-5ppbcifmkvoucviee4ta8mgc0e4b5f3c.apps.googleusercontent.com"
          >
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                var decoded = jwt_decode(credentialResponse.credential);
                const doc = {
                  name: decoded.name,
                  img: decoded.picture,
                }
                setUser(doc)
                const id = uuidv4(); 
                setUser(id)
                const details = {
                  _type: "user",
                  _id: id,
                  id,
                  userName: decoded.name,
                  image: decoded.picture,
                };
                const obj = {
                  name: decoded.name, 
                  image: decoded.picture,
                  id,
                }
                localStorage.setItem("user", JSON.stringify(obj));
                client.createIfNotExists(details).then(() => {

                })
                navigate('/home');
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
          <div className="div flex flex-col justify-center items-center">
            <p className="mt-3 md:mt-5 font-bold">or</p>
            <button className="bg-blue-500 text-slate-100 px-5 md:w-48  py-2 text-xl mt-3 md:mt-5 rounded-md">
              Log in
            </button>
            <p className="mt-3 text-xs text-center text-slate-700">
              One click away from reaching out your friends
            </p>
          </div>
        </div>
      </div>
    
  );
}
export default Login

// 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