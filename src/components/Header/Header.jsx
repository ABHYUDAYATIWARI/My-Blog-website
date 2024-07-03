import React from 'react'
import { Link } from 'react-router-dom'
import {Container,Logo,LogoutButton} from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus=useSelector((state)=>state.auth.status) /// or state.auth.status
  const navigate=useNavigate();
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
 
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (

    <header className='bg-gray-300 rounded-b-lg min-h-1 fixed top-0 left-32 right-32 z-10  ' >
      <div className='w-full max-w-7xl mx-auto px-4'>
        <nav className='flex'>


          <div className='mr-4'>
            <Link to='/'>
              <Logo width='30px'></Logo>
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {navItems.map((items)=> items.active? (
              <li key={items.name}>
                <button onClick={()=>navigate(items.slug)}
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full active:text-red-500'
                  >
                  {items.name}
                </button>
              </li>
            ): null)}

            {authStatus && (
                <li>
                  <LogoutButton/>
                </li>
              )
            }
          </ul>

        </nav>
      </div >
    </header>
   
  )
}

export default Header