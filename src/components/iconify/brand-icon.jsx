import React from 'react';
import Iconify from './iconify';
import { brandColors } from '../../services/brand.service';

export default function BrandIcon({ brand }){

    const iconStyle = {
        color: brandColors[brand] || 'white',
        width: "3vw"
    };

    return (
        <Iconify icon={`fa-brands:${brand}`} height="4vh" style={iconStyle}/>
    )
}