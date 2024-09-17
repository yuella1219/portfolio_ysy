import React, { useEffect } from 'react';
import AOS from 'aos';

interface Props {
    startY : string;
    startM : string;
    endY : string;
    endM : string;
    companyNm : string;
    teamNm : string;
    posNm?: string;
}

export const CompCareerBlock = ({startY, startM, endY, endM, companyNm, teamNm, posNm}:Props) =>{

    const replaceYears= (str) => {
        const txt3 = str.slice(0, 3);
        const txtPrimary = str.slice(3);

        return <span>{txt3}<span className="t-high">{txtPrimary}</span></span>
    }

    useEffect(() => {
        AOS.init({ duration: 800 });
      }, []);

    return(
        <div className="career-block">
            <div className="block-years" data-aos="fade-left">
                <div>
                    <p className="txt-years">{replaceYears(startY)}</p>
                    <p className="txt-month">{startM}</p>
                </div>
                <span className="line-dash"/>
                <div>
                    <p className="txt-years">{replaceYears(endY)}</p>
                    <p className="txt-month">{endM}</p>
                </div>
            </div>
            <div className="block-company" data-aos="fade-left" data-aos-delay={200}>
                <p>{companyNm}</p>
                <div className="info-detail">
                    <p>{teamNm}</p>
                    <p>{posNm}</p>
                </div>
            </div>
        </div>
    )
}