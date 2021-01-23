import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, Link } from 'react-router-dom'

import { updateStatus } from '../list/listSlice';
import { ReactComponent as ArrowBackIcon } from '../../assets/arrow-back.svg';

interface INotFoundProps extends RouteComponentProps { }

export function NotFound(props: INotFoundProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateStatus('error'))
    }, [dispatch])

    return (
        <div className='flex flex-wrap  justify-center w-full comic-box2 comic-zero-rotate'>
            <div className='flex flex-col p-10'>
                <h3 className='pb-20 text-5xl font-extrabold'>404 - Page not found!</h3>

                <Link to={'/'} className='comic-box2 transition duration-200 mx-5 px-4 py-3  cursor-pointer font-bold text-xl bg-gray-100 text-balck hover:bg-gray-300 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 select-none'>
                    <ArrowBackIcon className='w-6 h-6 inline-block align-text-top' />
                    <span className='inline-block ml-1'>Back to Home</span>
                </Link>
            </div>
        </div>
    );
}
