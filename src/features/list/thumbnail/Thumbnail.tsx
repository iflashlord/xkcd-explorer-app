import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { IStripData } from '../../../model/strip.model';
import { API_THUMBNAIL } from '../../../url/thumbnail';
import { errorHandler } from '../../../utils/errorsHandler';
import { ItemPlaceholder } from '../placeholder/ItemPlaceholder';
import { ItemThumbnail } from './ItemThumbnail';

interface IThumbnailProps extends RouteComponentProps {
    id: number;
}
export function Thumbnail(props: IThumbnailProps) {
    const stripId = props.id;
    const [thumbnailData, setThumbnailData] = useState<IStripData>()
    const [thumbnailError, setThumbnailError] = useState('')
    const [thumbnailState, setThumbnailState] = useState('loading')

    useEffect(() => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        
        setThumbnailState('loading');

        axios
            .get<IStripData>(API_THUMBNAIL(props.id), {
                cancelToken: source.token,
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                if(!unmounted) {
                    setThumbnailData(response.data)
                    setThumbnailState('succeeded');
                    setThumbnailError('')
                }
            }).catch(error => {
                if (!unmounted) {

                    setThumbnailState('error');
                    setThumbnailError(errorHandler(error));

                    if (axios.isCancel(error)) {
                        console.log(`request cancelled:${error.message}`);
                    } else {
                        console.log('another error happened:' + error.message);
                    }

                }

            });

            return function () {
                unmounted = true;
                source.cancel('Cancelling in cleanup');
            };
    }, [props.id])

    return ( thumbnailData && thumbnailState === 'succeeded') ? (
        <ItemThumbnail {...props} data={thumbnailData} key={stripId} />
    ) : (
        <ItemPlaceholder key={stripId} error={thumbnailError} />
    )

}