import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'


import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Comments from './components/PostDetails'
import EditStory from './components/EditStory'
import EditText from './components/EditText'
import EditPhoto from './components/EditPhoto'
import StoryComponent from './components/StoryComponent'
import Search from './pages/Search'


function App() {
  const userFromLocalStorage = localStorage.getItem('user');
  const [user, setUser] = useState(userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null);
  const navigate = useNavigate();
  useEffect(() => {

    if (user) {
      navigate('/home');
    }
  }, [user]);


  return (
    <Routes>
      <Route path='/'  element={<Login user={user} setUser={setUser} />} /> 
      <Route path='/home'  element={<Home user={user} setUser={setUser} />} /> 
      <Route path='/profile/:id'  element={<Profile user={user} setUser={setUser} />} /> 
      <Route path='/postDetails/:id'  element={<Comments  />} /> 
      <Route path='/editStory'  element={<EditStory  />} /> 
      <Route path='/editStory/text/:id'  element={<EditText  />} />       
      <Route path='/editStory/photo/:id'  element={<EditPhoto  />} />       
      <Route path='/editStory/story'  element={<EditPhoto  />} />       
      <Route path='/story/:id'  element={<StoryComponent  />} />       
      <Route path='/search'  element={<Search  />} />       
    </Routes>
  )
}

export default App
