import React from 'react';
import S from './social-link.module.scss';
import { getHostFromUrl } from '../../../../services/utils';
import BrandIcon from '../../../iconify/brand-icon';
import LinkTo from '../../../utils/link-to/link-to';
import { brandColors } from '../../../../services/brand.service';

export default function SocialLink({ url }){

    const networkName = getHostFromUrl(url);

    const style = {
        "--color": brandColors[networkName]
    };

    return (
        <LinkTo url={url} className={S.container} customStyle={style}>
            <BrandIcon brand={networkName}/>
        </LinkTo>
    )
}