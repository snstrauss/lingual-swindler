import React from 'react';
import S from './title.module.scss';

export default function Title({ title }){

    return (
        <div className={S.container}>
            <h2 className={S.title}>
                {title}
            </h2>
        </div>
    )
}