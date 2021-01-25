import React from 'react';
import { ITEMS_PER_PAGE } from '../../../config/config';

import { ItemPlaceholder } from './ItemPlaceholder';

interface IPlaceholderProps {
}
export function Placeholder(props: IPlaceholderProps) {

    return (
        <ul className='flex flex-wrap mb-20 cursor-wait select-none w-screen md:w-auto'>
            {
                (Array.from(Array(ITEMS_PER_PAGE).keys())).map(index => {
                    return ( <ItemPlaceholder key={index} />)
                })
            }
        </ul>
    )
}