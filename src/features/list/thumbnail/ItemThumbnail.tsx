import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { IStripData } from '../../../model/strip.model';
import { randomFromInterval } from '../../../utils/general';
import { useProgressiveImage } from '../../../utils/progressiveImage';

import placeholderImage from '../../../assets/image-loader.svg';

interface IItemThumbnailProps extends RouteComponentProps {
    data: IStripData;
}
export function ItemThumbnail(props: IItemThumbnailProps) {
    const randomNumberBetween1to3 = randomFromInterval(1, 3);

    // image lazy loading
    const loadedImage = useProgressiveImage(encodeURI(props.data.img));

    return (
        <li key={`Thumbnail_${props.data.num}`} className='p-5 w-screen sm:w-screen md:w-1/2 2xl:w-1/3 flex flex-col cursor-pointer transform hover:scale-105 duration-300 ease-in-out select-none'>
            <div className={`bg-black text-gray-200 comic-box${randomNumberBetween1to3}`}>

                <Link to={{ pathname: `/detail/${props.data.num}`, state: { prevPath: props.location } }}>

                    <div className={`bg-gray-500 p-4 bg-cover bg-no-repeat bg-center comic-box${randomNumberBetween1to3}`}
                        style={{ backgroundImage: `url('${loadedImage || placeholderImage}')` }} >


                        {/* Item ID */}
                        <span className={`fixed top-3 right-5 text-2xl mt-2 leading-none flex justify-end z-10 text-gray-200 font-extrabold backdrop comic-box${randomNumberBetween1to3}`}>
                            #{props.data.num}
                        </span>

                        {/* Title */}
                        <h2 className='text-2xl title-font font-extrabold mb-2 mt-40'>
                            <div className={`backdrop truncate comic-box${randomNumberBetween1to3}`}>
                                {props.data.title}
                            </div>
                        </h2>

                    </div>
                </Link>
            </div>
        </li>

    )
}