import React from 'react'
import { NavLink } from 'react-router-dom'

function CardRightTop() {
    return (
        <>
            <div className='w-100 card-bg flex justify-between item-center'>
                <div className='text-gray-100 rounded-lg flex p-2 m-1 items-center'>
                    <div className='fb-button hover:bg-stone-800 rounded-full px-4 '>&lt;</div>
                    <div className='fb-button hover:bg-stone-800 rounded-full px-4'>&gt;</div>
                </div>
                <div className='rounded-lg flex p-2 m-1'>
                    <NavLink 
                    to = "/login"
                    className='text-stone-900 bg-stone-100 rounded-full px-5 py-2 m-2 border-2 border-black font-bold hover:bg-stone-400 hover:text-base transition-all duration-100 ease-in-out'
                    >Log in
                    </NavLink> 
                    <NavLink 
                    to = "/signUp"
                    className='text-stone-900 bg-green-500 rounded-full px-5 py-2 m-2 border-2 border-black font-bold hover:bg-green-600 hover:text-base transition-all duration-100 ease-in-out'>Sign up</NavLink>
                </div>
            </div>
        </>
    )
}

export default CardRightTop
