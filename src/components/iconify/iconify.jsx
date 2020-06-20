import React from 'react';
// import '@iconify/iconify';

export default function Iconify({ icon, inline = true, style = {}, height = null }){

    return (
        <iconify-icon
            data-icon={icon}
            data-inline={inline}
            data-align="bottom"
            data-height={height}
            style={style}
        />
    );
}