import React from 'react'
import {Link} from "react-router-dom"

export default function SmallHeader() {
  return (
    <div className='flex justify-center items-center '>
        <Link  to={'/'}>
            <img className='w-52 mb-2 hover:scale-105 transition-all' src='/assets/images/title.png'></img>
        </Link>
    </div>
  )
}
