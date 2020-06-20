import React from 'react';
import S from './song-viewer.module.scss';

import Video from './partials/video/video';
import Title from './partials/title/title';
import SocialLink from './partials/social-link/social-link';

export default function SongViewer({ song: { image, links, title, video, artist } }){

    const backgroundStyle = {
        backgroundImage: `url(${image})`
    };

    return (
        <div className={S.container}>
            <div className={S.backgroundHolder} style={backgroundStyle} />
            <main>
                <Video src={video}/>
                <Title title={title} artist={artist} />

                {
                    links.map((link) => (
                        <SocialLink key={link} url={link} title={title}/>
                    ))
                }
            </main>
        </div>
    )
};