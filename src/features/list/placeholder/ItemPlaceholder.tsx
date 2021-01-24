import React from 'react';

import { randomFromInterval } from '../../../utils/general';

interface IItemPlaceholderProps {
    error?: string;
}
export function ItemPlaceholder(props: IItemPlaceholderProps) {
    const randomNumberBetween1to3 = randomFromInterval(1,3);
    return (
        <li className='p-5 w-screen sm:w-screen md:w-1/2 2xl:w-1/3 flex flex-col cursor-wait select-none'>

            <div className={`bg-black text-gray-200 comic-box${randomNumberBetween1to3}`}>
                <div className={` bg-gray-500 p-4 comic-box${randomNumberBetween1to3}`}>

                    <div className='text-center max-w-lg mx-auto mt-1 animate-pulse'>
                        <div className='h-4 bg-gray-800 w-40 block mx-auto'></div>
                        <div className='h-3 bg-gray-900 w-64 mt-5 block mx-auto'></div>
                        <div className='h-2 bg-gray-800 w-64 mt-3 block mx-auto'></div>
                        <div className='h-2 bg-gray-800 w-64 mt-4 block mx-auto'></div>
                        <div className='h-2 bg-gray-900 w-48 mt-3 block mx-auto'></div>
                    </div>

                    <h2 className='text-2xl title-font font-extrabold mb-3 mt-10 animate-pulse'>
                        <div className={`backdrop truncate comic-box${randomNumberBetween1to3}`}>
                            {props.error ? props.error : 'Loading...'}
                            

                        </div>
                    </h2>
                </div>
            </div>
        </li>

    )
}