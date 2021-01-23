import React from 'react';

import { ItemPlaceholder } from './ItemPlaceholder';

interface IPlaceholderProps {
}
export function Placeholder(props: IPlaceholderProps) {

    return (
        <ul className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 cursor-wait select-none'>
            {
                (Array.from(Array(6).keys())).map(index => {
                    return ( <ItemPlaceholder key={index} />)
                })
            }
        </ul>
    )
}