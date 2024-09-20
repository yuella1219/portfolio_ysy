import React, { useEffect } from 'react';
import type { CareerDataProps } from '../'
import AOS from 'aos';

interface Props {
    data:CareerDataProps;
}

export const CompCareerBlock = ({data}:Props) =>{

    const replaceYears= (str : string) => {
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
                    <p className="txt-years">{replaceYears(data.startY)}</p>
                    <p className="txt-month">{data.startM}</p>
                </div>
                <span className="line-dash"/>
                <div>
                    <p className="txt-years">{replaceYears(data.endY)}</p>
                    <p className="txt-month">{data.endM}</p>
                </div>
            </div>
            <div className="block-company" data-aos="fade-left" data-aos-delay={200}>
                <p>{data.companyNm}</p>
                <div className="info-detail">
                    <p>{data.teamNm}</p>
                    <p>{data.posNm}</p>
                </div>
            </div>
        </div>
    )
}