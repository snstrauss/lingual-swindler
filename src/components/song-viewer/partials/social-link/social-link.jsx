import React from 'react';
import S from './social-link.module.scss';
import { getHostFromUrl } from '../../../../services/utils';
import BrandIcon from '../../../iconify/brand-icon';
import LinkTo from '../../../utils/link-to/link-to';

export default function SocialLink({ url }){

    const networkName = getHostFromUrl(url);

    return (
        <LinkTo url={url} className={S.container}>
            <BrandIcon brand={networkName}/>
        </LinkTo>
    )
}