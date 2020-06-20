import React from 'react';
import S from './social-link.module.scss';
import Iconify from '../../../iconify/iconify';

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}

function getHostFromUrl(url){

    const hostname = new URL(url).hostname.match(/(\w+)(?=.com)/)[0];

    return hostname.toLowerCase();
}

export default function SocialLink({ url, title }){

    const hostname = getHostFromUrl(url);

    const iconStyle = hostname === 'spotify' ? {
        color: '#00D95A'
    } : {};

    return (
        <a className={S.container} href={url} target="_blank" rel="noreferrer">
            <div className={S.nameContainer}>
                <Iconify icon={`fa-brands:${hostname}`} height="4vh" style={iconStyle}/>
                <span>
                    {capitalize(hostname)}
                </span>
            </div>
            <span className={S.playContainer}>
                <Iconify icon="bi-play-fill"/> PLAY
            </span>
        </a>
    )
}