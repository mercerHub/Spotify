import React from 'react'
import { useState } from 'react'

function CardL2() {
    const [playlists, setPlaylists] = useState([])
    // fetch('https://api.spotify.com/v1/me/playlists')
    return (
       
            <div className='card-bg text-white px-3 py-3 rounded mt-7'>
                <div className='flex items-center justify-between mb-2 px-4'>
                    <div className='py-3 flex items-center font-bold gap-2 text-gray-400 cursor-pointer'>
                        <svg style = {{fill:'currentcolor'}} width= "30px" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-ytk21e-0 bneLcE"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                        <span className=''>Your Library</span>
                    </div>
                    <div>
                        <svg style = {{fill:'currentcolor'}} width= "30px" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="rounded-full cursor-pointer hover:bg-stone-800 p-2"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
                    </div>
                </div>
                <div className='overflow-y-auto max-h-60 scroll-ml-6'>
                    <div className="bg-stone-800 rounded-xl py-4 px-6 w-100 mt-2 mr-2 flex flex-col ">
                        <span className='text-lg font-bold leading-loose'>Create Your First Playlist</span>
                        <span className='text-base font-medium leading-loose'>It's easy we'll help you !!</span>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-sm rounded-full text-sm font-bold px-2 py-2 mt-5 mb-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-1/2">Create playlist</button>
                    </div>
                    <div className="bg-stone-800 rounded-xl py-4 px-6 w-100 mt-2 mr-2 flex flex-col ">
                        <span className='text-lg font-bold leading-loose'>Lets browse some podcasts</span>
                        <span className='text-base font-medium leading-loose'>We'll keep you updated !!</span>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-sm rounded-full text-sm font-bold px-2 py-2 mt-5 mb-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-2/3">Browse podcasts</button>
                    </div>
                </div>
            </div>
    )
}

export default CardL2
