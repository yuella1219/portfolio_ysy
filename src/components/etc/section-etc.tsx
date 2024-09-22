import React, { useEffect, useState } from 'react';
import { CompSectionTitle, CompEtcUrl } from '../'
import AOS from 'aos';

export const SectionEtc = () =>{
    
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return(
        <div id="src-etc" className="section-etc">
            <CompSectionTitle txtDash="Etc." txtNom="" />
            <div className="wrap">
                <CompEtcUrl linkNm='Portpolio Github.' linkUrl='https://github.com/yuella1219/portfolio_ysy.git' delay={0}/>
            </div>
        </div>
    )
}