import React from 'react';

export default function LinkTo({ url, children, className }){

    return (
        <a href={url} target="_blank" rel="noreferrer" className={className} >
            {children}
        </a>
    )
}