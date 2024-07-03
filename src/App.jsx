import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Footer, Header,Container } from './components'
import {Outlet} from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispach=useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispach(login({userData}))
      } else{
        dispach(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])
  

  return !loading ?(
    
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400  streach '>
        <div className='w-full block'>
        
          <Header  />
       
          <main className='mt-11'>
            <Outlet/>
          </main>
          
          <Footer/>
        
        </div>
      
    </div>
  ) :(
    <div>Loading...</div>
  )
  //do something here if you want to show during loading

}

export default App
