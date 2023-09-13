'use client'
// in next.js every component will work as a server side component (SSR) but if u want to
// make your component as a client side component u will use a 'use client' on the top of your compoenent. 
// server side component will not allow useState() and event action in server-side-component
// because they are the features of client-side-component and use to interact with browser for manupulate dom
// but the SSC did not allowed it because the component will generate in (SSR)from server. 
import React, { useState } from 'react'

const Hero = () => {
    const [userObj , setUserObj] = useState({
      name: 'sagheer' 
    })
    
    function arrowFun() {
      console.log(userObj)
      setUserObj({...userObj , name : 'shahrukh'});
      console.log(userObj)
    }
    return (
    <div className='flex-1 bg-slate-700 text-orange-500 p-4 m-4 md:rounded-md selection:text-blue-700 selection:bg-green-800 text-center' onClick={arrowFun}>
      <p>Baba {userObj.name} khan</p>
      <p>Ali {userObj.name} khan</p>
      <p>khan {userObj.name} khan</p>
      <p>yar {userObj.name} khan</p>
    </div>
  )
}

export default Hero