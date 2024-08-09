import React, { useState } from 'react';
import Button from '../Button';
import logo from '../../assets/image/react.svg';

const Navbar = (props) => {
  const [isUser, setIsUser] = useState('');

  const login = () =>{
    setIsUser("rijan")
  }



  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <img src={logo} alt="Logo" className="h-8" />
      <ul className='flex gap-2'>
        <li className='font-bold'>Contact</li> 
        <li className='font-bold'>About Us</li> 
        <li className='font-bold'>Help</li> 
        <li className='font-bold'>Feddback</li> 
        
      </ul>
      
      <div>
        
        {isUser === "" ? 
          <>
            <button className='p-2 px-4 rounded-md bg-red-700' onClick={login}>login</button>
            <butto className="p-2 px-4 rounded-md bg-yellow-400">Signup</butto>
          </>
         : 
          <h1 className="text-white">{isUser}</h1>
        }
      </div>


      
    </nav>
  );
};

export default Navbar;
