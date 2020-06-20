import React from 'react';
import S from './video.module.scss';

export default function Video({ src, title }) {

    const placeholderBackground = {
        backgroundImage: `url(https://i.ytimg.com/vi/${src}/sddefault.jpg)`
    }

    return (
        <div className={S.embedContainer} style={placeholderBackground}>
            <iframe className={S.container}
                    title={title}
                    src={`https://www.youtube.com/embed/${src}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>
    )
}


