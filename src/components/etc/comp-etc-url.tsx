import React, { useEffect } from 'react';
import AOS from 'aos';

interface Props {
    linkNm : string;
    linkUrl : string;
    delay: number;
}

export const CompEtcUrl = ({linkNm, linkUrl, delay} : Props) =>{
    
    // npm run deploy 배포
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return(
        <div className="etc-block" data-aos="fade-up" data-aos-delay={delay}>
            <p className="tit">{linkNm}</p>
            <a href={linkUrl} className="txt" target="_black">{linkUrl}</a>
        </div>
    )
}