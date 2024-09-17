import React, { useEffect } from 'react';
import { CompSectionTitle } from '../public'
import { CompProjectBlock } from './comp-project-block.tsx'
import { CompProjectDetail } from './comp-project-detail.tsx'
import AOS from 'aos';

export const SectionProject = () =>{
    
    // npm run deploy 배포
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

    return(
        <div className="section-project">
            <CompSectionTitle txtDash="Project" txtNom="Experience" />
            <div className="wrap">
                <CompProjectBlock posNm="Development" proNm="사내 프로젝트" delayCt={0} />
                <CompProjectBlock posNm="Publishing" proNm="식권나라" delayCt={200} />
                <CompProjectBlock posNm="Publishing" proNm="CGV" delayCt={400} />
                <CompProjectBlock posNm="Publishing" proNm="신한은행" delayCt={600} />
                <CompProjectBlock posNm="Publishing" proNm="LG HelloRental" delayCt={0} />
                <CompProjectBlock posNm="Publishing" proNm="CUPOST " delayCt={200} />
            </div>
            <CompProjectDetail/>
        </div>
    )
}