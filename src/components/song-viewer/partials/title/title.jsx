import React from 'react';
import S from './title.module.scss';

export default function Title({ title, artist }){

    return (
        <div className={S.container}>
            <h2 className={S.title}>
                {title}
            </h2>
            <h3 className={S.artist}>
                {artist}
            </h3>
        </div>
    )
}