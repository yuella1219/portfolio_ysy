import React, { useEffect } from 'react';
import AOS from 'aos';

interface Props{
    posNm : string;
    proNm : string;
    delayCt : number;
    sendNm : any;
}

export const CompProjectBlock = ({posNm, proNm, delayCt, sendNm} : Props) =>{    
    
    const sendProjectName = () =>{
        sendNm(proNm)
    }

    useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);

    return(
        <div className="project-block" data-aos="fade-up" data-aos-delay={delayCt}>
            <button onClick={sendProjectName}>
                <span className="positions">{posNm}</span>
                <span className="name">{proNm}</span>
            </button>
        </div>
    )
}