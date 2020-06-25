import React from 'react';

export default function LinkTo({ url, children, className, customStyle }){

    return (
        <a href={url} target="_blank" rel="noreferrer" className={className} style={customStyle}>
            {children}
        </a>
    )
}