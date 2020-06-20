import React from 'react';
import S from './social-link.module.scss';

function getHostFromUrl(url){

    return url.toUpperCase();
}

export default function SocialLink({ url }){

    const host = getHostFromUrl(url);

    return (
        <div className={S.container}>
            {host}
        </div>
    )
}