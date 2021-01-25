import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { selectStripTotalPages} from '../listSlice';

import { ReactComponent as ArrowPrev } from '../../../assets/arrow-prev.svg';
import { ReactComponent as ArrowFirst } from '../../../assets/arrow-first.svg';
import { ReactComponent as ArrowNext } from '../../../assets/arrow-next.svg';
import { ReactComponent as ArrowLast } from '../../../assets/arrow-last.svg';
import { TEXT_FIRST_PAGE, TEXT_LAST_PAGE, TEXT_NEXT_PAGE, TEXT_PREVIOUS_PAGE } from '../../../config/texts';

interface IPaginationProps extends RouteComponentProps { currentPage: string; }
export function Pagination(props: IPaginationProps) {

  const stripTotalPages = useSelector(selectStripTotalPages);
 
  const currentPageNumber = Number(props.currentPage);
  return (
    <section className='relative md:fixed bg-gray-500 text-white py-3 px-4 text-center left-0 bottom-0 right-0 z-40 comic-footer'>

        <div className='inline-flex items-center flex-wrap flex-auto'>
            
            {/* First Button */}
            <button title={TEXT_FIRST_PAGE} className='comic-box2 transition duration-200 mx-5 px-4 py-3 cursor-pointer font-bold text-xl bg-gray-100 text-black hover:bg-gray-300 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:hidden sm:disabled:inline-block sm:disabled:opacity-20 sm:disabled:pointer-events-none'
            onClick={()=>{
                props.history.push(`/1`)
            }}
            disabled={currentPageNumber === 1 || !stripTotalPages}>
                <ArrowFirst className='w-6 h-6'/>
            </button>

            {/* Previous Button */}
            <button title={TEXT_PREVIOUS_PAGE} className='comic-box2 transition duration-200 mx-5 px-4 py-3 cursor-pointer font-bold text-xl bg-gray-100 text-black hover:bg-gray-300 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:hidden sm:disabled:inline-block sm:disabled:opacity-20 sm:disabled:pointer-events-none'
            onClick={()=>{
                props.history.push(`/${currentPageNumber - 1}`)
            }}
            disabled={currentPageNumber === 1 || !stripTotalPages}>
                <ArrowPrev className='w-6 h-6'/>
            </button>
            
            
            {/* Current Page */}
            <div className='comic-box2 transition duration-200 mx-5 px-4 py-3 font-bold text-2xl text-gray-100 bg-black select-none'>
                {props.currentPage || 1}
            </div>

 
            {/* Next Button */}
            <button title={TEXT_NEXT_PAGE} className='comic-box2 transition duration-200 mx-5 px-4 py-3 cursor-pointer font-bold text-xl bg-gray-100 text-black hover:bg-gray-300 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:hidden sm:disabled:inline-block sm:disabled:opacity-20 sm:disabled:pointer-events-none'
            onClick={()=>{
                props.history.push(`/${currentPageNumber + 1}`)
            }}
            disabled={currentPageNumber === stripTotalPages || !stripTotalPages} >
                <ArrowNext className='w-6 h-6'/>
            </button>

            {/* Last Button */}
            <button title={TEXT_LAST_PAGE} className='comic-box2 transition duration-200 mx-5 px-4 py-3 cursor-pointer font-bold text-xl bg-gray-100 text-black hover:bg-gray-300 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:hidden sm:disabled:inline-block sm:disabled:opacity-20 sm:disabled:pointer-events-none'
            onClick={()=>{
                props.history.push(`/${stripTotalPages}`)
            }}
            disabled={currentPageNumber === stripTotalPages || !stripTotalPages} >
                <ArrowLast className='w-6 h-6'/>
            </button>

        </div>

    </section>

  );
}
