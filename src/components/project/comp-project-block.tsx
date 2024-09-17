import React, { useEffect } from 'react';
import type {ExperienceDataProps} from './data.ts' 
import AOS from 'aos';

interface Props{
    posNm : string;
    proNm : string;
    delayCt : number;
}

export const CompProjectBlock = ({posNm, proNm, delayCt} : Props) =>{    
    
    useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);

    return(
        <div className="project-block" data-aos="fade-up" data-aos-delay={delayCt}>
            <button>
                <span className="positions">{posNm}</span>
                <span className="name">{proNm}</span>
            </button>
        </div>
    )
}