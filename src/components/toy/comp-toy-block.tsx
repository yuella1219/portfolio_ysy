import React, { useEffect } from 'react';
import {replace} from '../'
import type {ToyUrlProps} from '../'
import AOS from 'aos';

interface Props {
    data : ToyUrlProps;
}

export const CompToyBlock = ({ data }:Props) =>{
    
    // npm run deploy 배포
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return(
        <div className='toy-block'>
            <p className="toy-txt">{data.tit}</p>
            <div className="inner">
                <div className="txt-wrap">
                    <div className="info-wrap">
                        <p className="txt-tit">사용 언어</p>
                        <p className="txt-info">{data.useLang}</p>
                    </div>
                    <p className="info-txt">{replace(data.infoTxt)}</p>
                </div>
            </div>
        </div>
    )
}