import React from 'react';
import S from './song-link.module.scss';
import Iconify from '../../../iconify/iconify';
import { getHostFromUrl, capitalize } from '../../../../services/utils';
import BrandIcon from '../../../iconify/brand-icon';
import LinkTo from '../../../utils/link-to/link-to';

export default function SongLink({ url }){

    const hostname = getHostFromUrl(url);

    return (

        <LinkTo url={url} className={S.container}>
            <div className={S.nameContainer}>
                <BrandIcon brand={hostname}/>
                <span>
                    {capitalize(hostname)}
                </span>
            </div>
            <span className={S.playContainer}>
                <Iconify icon="bi-play-fill"/> PLAY
            </span>
        </LinkTo>
    )
}