import React, { useEffect } from 'react';
import AOS from 'aos';
import { VisualCircleDashed } from '../'

export const SectionMain = () =>{

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

    return(
        <div className="section-main">
            <div className="wrap">
                <p className="main-title" data-aos="fade-up"><span className="t-high">N</span>EED WALK</p>
                <p className="sub-en" data-aos="fade-up" data-aos-delay="500">I am moving forward, and I will keep moving forward relentlessly.</p>
                <p className="sub-ko" data-aos="fade-up" data-aos-delay="500">웹 개발자를 지향하는 퍼블리셔, 유승연 입니다.</p>
                <div className="circle-wrap">
                    <div className="circle-solid" data-aos="fade-up" data-aos-delay="800">
                        <div className="circle-inner"></div>
                    </div>
                    <div className="circle-dash" data-aos="fade-up" data-aos-delay="1200"><VisualCircleDashed/></div>
                </div>
            </div>
        </div>
    )
}