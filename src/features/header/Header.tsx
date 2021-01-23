import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectStripDataError, selectStripDataState } from '../list/listSlice';

interface IHeaderProps extends RouteComponentProps { }

export function Header(props: IHeaderProps) {
  const stripState = useSelector(selectStripDataState);
  const stripError = useSelector(selectStripDataError);

  return (

    <header className='text-center'>
      <div className='inline-flex mb-4 leading-10 items-center select-none'>

        <div className='inline-flex flex-col items-center justify-center cursor-pointer'
          onClick={
            () => {
              props.history.push('/')
            }
          }>

          <h2 className='font-extrabold tracking-tight text-6xl'>XKCD Explorer</h2>
          <h3 className='font-bold tracking-tight text-2xl'>A webcomic of romance, sarcasm, math, and language.</h3>
        </div>
      
      </div>
 
      <div className='flex mt-1 justify-center'>
        <div className='w-80 h-1 rounded-full bg-white-500 inline-flex'></div>
      </div>

      {/* Display Error */}
      {stripError &&
        <div className='text-red-800 bg-red-200 p-5 m-5 comic-box3 comic-zero-rotate text-xl'>
          {stripError}
        </div>
      }

      {/* Loading animation */}
      {stripState === 'loading' &&
        <div className='fixed top-0 left-0 right-0 z-50 flex items-center flex-col'>
          <div className='loader-dots block relative w-20 h-9 mt-2 backdrop comic-box2'>
            <div className='absolute top-0 mt-2 w-3 h-3 bg-white comic-box1'></div>
            <div className='absolute top-0 mt-2 w-3 h-3 bg-white comic-box1'></div>
            <div className='absolute top-0 mt-2 w-3 h-3 bg-white comic-box1'></div>
            <div className='absolute top-0 mt-2 w-3 h-3 bg-white comic-box1'></div>
          </div>
        </div>
      }

      {/* Error animation */}
      {stripState === 'error' &&
        <div className='fixed top-0 left-0 right-0 z-50 flex items-center flex-col'>
          <div className='loader-dots block relative w-20 h-9 mt-2 text-xl backdrop comic-box2'>
            <div className='absolute top-0 w-3 h-3'>!</div>
            <div className='absolute top-0 w-3 h-3'>!</div>
            <div className='absolute top-0 w-3 h-3'>!</div>
            <div className='absolute top-0 w-3 h-3'>!</div>
          </div>
        </div>
      }

    </header>
  );
}
