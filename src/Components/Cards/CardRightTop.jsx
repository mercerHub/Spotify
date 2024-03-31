import React from 'react'

function CardRightTop() {
    return (
        <>
            <div className='w-100 card-bg flex justify-between item-center'>
                <div className='text-gray-100 rounded-lg flex p-2 m-1 items-center'>
                    <div className='fb-button hover:bg-stone-800 rounded-full px-4 '>&lt;</div>
                    <div className='fb-button hover:bg-stone-800 rounded-full px-4'>&gt;</div>
                </div>
                <div className='rounded-lg flex p-2 m-1'>
                    <button className='text-stone-900 bg-stone-100 rounded-full px-5 py-2 m-2 border-2 border-black font-bold hover:bg-stone-400 hover:text-base'>Log in</button>
                    <button className='text-stone-900 bg-green-500 rounded-full px-5 py-2 m-2 border-2 border-black font-bold hover:bg-green-600 hover:text-base'>Sign up</button>
                </div>
            </div>
        </>
    )
}

export default CardRightTop
