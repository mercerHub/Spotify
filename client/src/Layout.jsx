import React from 'react'
import { Outlet } from 'react-router-dom'
import RightResizeable from './Components/ResizeableWindow/RightResizeable'
import CardRightTop from './Components/Cards/CardRightTop'


const Layout = () => {
    return (
        <>
            <div className='bg-black flex h-100'>
                <RightResizeable/>
                <div className='w-3/4 card-bg m-3 rounded-xl'>
                    <CardRightTop/>
                    <Outlet/>
                </div>
            </div>

        </>
    )
}

export default Layout
