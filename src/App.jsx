import { useState } from 'react'
import './App.css'
import Login from './app/login'
import { useSelector } from 'react-redux'
import { selectUser } from './app/redux/userSlice'
import Logout from './app/logout'

function App() {
  const user = useSelector(selectUser)
  return (
    <>
      {/* dsadsa */}
      {user ? <Logout /> : <Login />}
    </>
  )
}

export default App
