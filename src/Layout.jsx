import React from 'react'
import CardL1 from './Components/Cards/CardL1'
import CardL2 from './Components/Cards/CardL2'
import { Outlet } from 'react-router-dom'
import CardFoot from './Components/Cards/CardFoot'
import RightResizeable from './Components/ResizeableWindow/RightResizeable'

function Layout() {
    return (
        <>
            <div className='bg-black flex h-screen'>
                <RightResizeable/>
                {/* <div 
                    
                >
                    <CardL1/>
                    <CardL2/>
                    <CardFoot/>
                </div> */}
                <div className='w-3/4 h-full'>
                    <Outlet/>
                </div>
            </div>

        </>
    )
}

export default Layout
