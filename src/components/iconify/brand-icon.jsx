import React from 'react';
import Iconify from './iconify';

const brandColors = {
    spotify: '#00D95A',
    facebook: '#1878F3',
    youtube: '#FF0000'
};

export default function BrandIcon({ brand }){

    const iconStyle = {
        color: brandColors[brand] || 'white',
        width: "3vw"
    };

    return (
        <Iconify icon={`fa-brands:${brand}`} height="4vh" style={iconStyle}/>
    )
}