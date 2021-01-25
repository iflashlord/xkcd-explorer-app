import React from 'react';

interface IPlaceholderProps {
}
export function Placeholder(props: IPlaceholderProps) {

    return (

        <div className='p-3 flex flex-col cursor-wait comic-box3 comic-zero-rotate'>
            <div className='pattern-dots-md gray-light  '>
                <div className=' h-60 bg-gray-500 p-4 transform translate-x-3 -translate-y-3  comic-box2 comic-zero-rotate' >

                    <div className='text-center leading-none flex w-full justify-end z-10 '>

                        {/* bars view with a animated effect */}
                        <div className='text-center max-w-lg mx-auto animate-pulse w-full'>
                            <div className='h-4 bg-gray-500 w-80 block mx-auto'></div>
                            <div className='h-3 bg-gray-400 w-70 mt-4 block mx-auto'></div>
                            <div className='h-3 bg-gray-400 w-70 mt-4 block mx-auto'></div>
                            <div className='h-3 bg-gray-400 w-80 mt-4 block mx-auto'></div>
                            <div className='h-2 bg-gray-400 w-70 mt-4 block mx-auto'></div>
                            <div className='h-2 bg-gray-400 w-70 mt-4 block mx-auto'></div>
                            <div className='h-2 bg-gray-400 w-70 mt-4 block mx-auto'></div>
                            <div className='h-2 bg-gray-400 w-60 mt-2 block mx-auto'></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}