import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import {
  fetchData,
  selectStripDataState,
  selectStripTotalItems,
  selectStripTotalPages,
} from './listSlice';
import { Thumbnail } from './thumbnail/Thumbnail';
import { Placeholder } from './placeholder/Placeholder';
import { ITEMS_PER_PAGE } from '../../config/config';
import { Pagination } from './pagination/Pagination';

interface IListProps extends RouteComponentProps<{ currentPage: string }> { }
export function List(props: IListProps) {

  const dispatch = useDispatch()
  const stripState = useSelector(selectStripDataState);
  const stripTotalPages = useSelector(selectStripTotalPages);
  const stripTotalItems = useSelector(selectStripTotalItems);

  useEffect(() => {

    if (stripTotalPages) {
      let currentPage = Number(props.match.params.currentPage);
      props.history.push(`/${props.match.params.currentPage || 1}`)

      // check for incorrect higher number
      if (currentPage > stripTotalPages) {
        props.history.push(`/${stripTotalPages}`)
      }

      // check of invalid number and equal or less than zero check for redirect
      if (isNaN(+props.match.params.currentPage) || currentPage <= 0) {
        props.history.push(`/1`)
      }

    } else {
      // get latest item
      dispatch(fetchData())

    }


  }, [props.history, stripTotalPages, props.match.params.currentPage, dispatch])

  const currentPageNumber = Number(props.match.params.currentPage) - 1;
  return (
    <>

      {stripState === 'loading' &&
        <Placeholder />
      }

      {stripState === 'succeeded' && stripTotalItems && props.match.params.currentPage && 
        <ul className='flex flex-wrap mb-20 w-screen md:w-auto'>
          {
            (Array.from(Array(ITEMS_PER_PAGE))).map((_, itemNumber) => {

              // calculate the number of items by the 'num' key result in the request and based on the items per page
              const thumbnailId = stripTotalItems - (currentPageNumber * ITEMS_PER_PAGE) - itemNumber;

              return ( (thumbnailId > 0) &&  
                <Thumbnail {...props} id={thumbnailId} key={thumbnailId} />
              )
            })

          }
        </ul>
      }

      <Pagination {...props} currentPage={props.match.params.currentPage} />

    </>

  );
}
