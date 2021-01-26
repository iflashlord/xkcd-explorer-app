import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import axios from 'axios';

import { Placeholder } from './placeholder/Placeholder';
import { errorHandler } from '../../utils/errorsHandler';
import { fetchData, selectStripTotalItems } from '../list/listSlice';
import { IStateType, IStripData } from '../../model/strip.model';

import { ReactComponent as ArrowBackIcon } from '../../assets/arrow-back.svg';
import { ReactComponent as ArrowNext } from '../../assets/arrow-next.svg';
import { ReactComponent as ArrowPrev } from '../../assets/arrow-prev.svg';
import { API_DETAIL } from '../../url/detail';
import { TEXT_BACK_TO_LIST, TEXT_DATE, TEXT_DID_NOT_CATCH, TEXT_IMAGE_ONLY, TEXT_LINK, TEXT_NEXT_STRIP, TEXT_PREVIOUS_STRIP, TEXT_WAIT_TO_RETRIEVE } from '../../config/texts';


interface IDetailProps extends RouteComponentProps<{ id: string }> { }

export function Detail(props: IDetailProps) {
    const stripId = props.match.params.id;
    const [detailData, setDetailData] = useState<IStripData>()
    const [detailError, setDetailError] = useState('')
    const [detailState, setDetailState] = useState('loading')

    // getting access to the prevPath for back button
    const { state } = useLocation<IStateType>();

    const dispatch = useDispatch()
    const stripTotalItems = useSelector(selectStripTotalItems);


    useEffect(() => {
        let unmounted = false;
        let source = axios.CancelToken.source();

        if (stripTotalItems) {

            setDetailState('loading');

            axios
                .get<IStripData>(API_DETAIL(+stripId), {
                    cancelToken: source.token,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then(response => {
                    if (!unmounted) {
                        setDetailData(response.data)
                        setDetailState('succeeded');
                        setDetailError('')
                    }
                }).catch(error => {
                    if (!unmounted) {

                        setDetailState('error');
                        setDetailError(errorHandler(error));

                        if (axios.isCancel(error)) {
                            console.log(`request cancelled:${error.message}`);
                        } else {
                            console.log('another error happened:' + error.message);
                        }

                    }

                });


        } else {

            // get latest item
            dispatch(fetchData());

        }

        return function () {
            unmounted = true;
            source.cancel('Cancelling in cleanup');
        };
    }, [stripId, dispatch, stripTotalItems])



    return (detailData && detailState === 'succeeded') ? (

        <>
            <div className='w-full p-10  md:mb-0 mb-6 flex flex-col transform hover:scale-105 duration-300 ease-in-out comic-box3 comic-zero-rotate'>
                <div className={`bg-black text-gray-200`}>

                    {/* Date */}
                    <span className={`relative w-2/3 md:w-auto inline-block md:absolute md:top-3 md:left-5 p-1 text-center text-2xl mt-2 leading-2 z-10 text-gray-200 font-extrabold bg-black comic-box2 select-none`}>
                        {TEXT_DATE}: <Moment format='LL'>{`${detailData.year}-${detailData.month}-${detailData.day}`}</Moment>
                    </span>


                    {/* Item ID */}
                    <span className={`relative w-1/3 md:w-auto inline-block md:absolute md:top-3 md:right-5 p-1 text-center text-2xl mt-2 leading-2 z-10 text-gray-200 font-extrabold bg-black comic-box1 select-none`}>
                        #{detailData.num}
                    </span>


                    {/* Image Section */}
                    <div className='flex justify-center bg-gray-500 p-4 bg-cover bg-no-repeat bg-center comic-box2 comic-zero-rotate' >
                        <img src={encodeURI(detailData.img)} alt={detailData.alt} />
                    </div>


                    <div className=' bg-gray-500 p-4 bg-cover bg-no-repeat bg-center comic-box2 comic-zero-rotate'>
                        <div className='mb-5 mt-2'>

                            {/* Title */}
                            <h3 className='backdrop truncate comic-box2 comic-zero-rotate text-2xl title-font font-extrabold select-none'>
                                {detailData.title}
                            </h3>

                            {/* Alt as content */}
                            <div className='text-xl p-5'>
                                {detailData.alt}
                            </div>

                            {/* Strip transcript */}
                            {detailData.transcript &&
                                <div className='p-3'>
                                    <h3 className='backdrop truncate comic-box2 comic-zero-rotate text-2xl title-font font-extrabold select-none'>Transcript</h3>
                                    <pre className='p-5 whitespace-pre-wrap text-l'>{detailData.transcript}</pre>
                                </div>
                            }


                            {/* Links */}
                            <div className='backdrop  p-10 comic-box2 comic-zero-rotate'>


                                {detailData.link &&
                                    <a href={detailData.link} target='_blank' rel='noreferrer' title={detailData.title} className='comic-box3 comic-zero-rotate inline-block transition duration-200 mx-5 px-4 py-3 cursor-pointer font-bold text-sm bg-gray-100 text-gray-500 hover:bg-gray-300 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 select-none'>
                                        {TEXT_LINK}
                                    </a>
                                }

                                <a href={`https://www.explainxkcd.com/wiki/index.php/${detailData.num}`} target='_blank' rel='noreferrer' title={detailData.title} className='comic-box3 comic-zero-rotate inline-block transition duration-200 mx-5 px-4 py-3 cursor-pointer font-bold text-sm bg-gray-100 text-gray-500 hover:bg-gray-300 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 select-none'>
                                    {TEXT_DID_NOT_CATCH}
                                </a>

                                <a href={encodeURI(detailData.img)} target='_blank' rel='noreferrer' title={detailData.title} className='comic-box3 comic-zero-rotate inline-block transition duration-200 mx-5 px-4 py-3 cursor-pointer font-bold text-sm bg-gray-100 text-gray-500 hover:bg-gray-300 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 select-none'>
                                    {TEXT_IMAGE_ONLY}
                                </a>

                            </div>

                        </div>

                    </div>


                </div>
            </div>



            <div className='flex flex-col md:flex-row justify-center items-center p-5 comic-box1 mt-5'>

                <Link to={state?.prevPath?.pathname || '/'} className='comic-box2 transition duration-200 mx-5 px-4 py-3  cursor-pointer font-bold text-xl bg-gray-100 text-balck hover:bg-gray-300 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 select-none'>
                    <ArrowBackIcon className='w-6 h-6 inline-block align-text-top' />
                    <span className='inline-block ml-1'>
                        {TEXT_BACK_TO_LIST}
                    </span>
                </Link>


                {(+stripId - 1) >= 1 &&
                    <Link to={`/detail/${+stripId - 1}`} className='comic-box2 transition duration-200 mx-5 px-4 py-3  cursor-pointer font-bold text-xl bg-gray-100 text-black hover:bg-gray-300 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 select-none'>
                        <ArrowPrev className='w-6 h-6 inline-block align-text-top' />
                        <span className='inline-block ml-1'>
                            {TEXT_PREVIOUS_STRIP}
                        </span>
                    </Link>
                }


                {(+stripId + 1) <= stripTotalItems &&
                    <Link to={`/detail/${+stripId + 1}`} className='comic-box2 transition duration-200 mx-5 px-4 py-3 cursor-pointer font-bold text-xl bg-gray-100 text-black hover:bg-gray-300 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 select-none'>
                        <ArrowNext className='w-6 h-6 inline-block align-text-top' />
                        <span className='inline-block ml-1'>
                            {TEXT_NEXT_STRIP}
                        </span>
                    </Link>
                }


            </div>
        </>

    ) : (
        <>
            {/* Errors */}
            {detailError &&
                <div className='text-red-800 bg-red-200 p-5 m-5 comic-box3 comic-zero-rotate text-xl text-center select-none'>
                    {detailError}
                </div>
            }

            {!detailError &&
                <div className='flex justify-center items-center p-5 mb-5 comic-box1 text-xl font-extrabold select-none'>
                    {TEXT_WAIT_TO_RETRIEVE}
                </div>
            }

            <Placeholder />

        </>
    )

}
