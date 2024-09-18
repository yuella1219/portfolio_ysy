import React, { useEffect, useState } from 'react';
import { CompSectionTitle } from '../public'
import { CompProjectDetail } from './comp-project-detail.tsx'
import { CompProjectBlock } from './comp-project-block.tsx'
import type {ExperienceDataProps} from './data.ts' 
import {experience_data} from './data.ts' 
import AOS from 'aos';

export const SectionProject = ({posNm, proNm, startDt, endDt, useLaun, devOs, clientNm, member, proInter, intoTxt} : ExperienceDataProps) =>{
    const [getProNm, setGetProNm] = useState('');
    const [findDetailValue, setFindDetailValue] = useState<ExperienceDataProps[]>([])
    const [showSideDetail, setShowSideDetail] = useState('');

    // block 전달용
    const getProjectNameFromBlock = (str : string) =>{
        setGetProNm(str)
    }
    // side detail 접기 전달용
    const sideClose = () => {
        setShowSideDetail('');
    }
    
    useEffect(()=>{
        setShowSideDetail(getProNm);
        setFindDetailValue(experience_data.filter(idx => idx.proNm === getProNm))
    }, [getProNm])

    // npm run deploy 배포
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

    return(
        <div className="section-project">
            <CompSectionTitle txtDash="Project" txtNom="Experience" />
            <div className="wrap">
                {experience_data.map((item, index)=>{
                    return(
                        <CompProjectBlock posNm={item.posNm} proNm={item.proNm} delayCt={index * 100} sendNm={getProjectNameFromBlock} key={index} />
                    )
                })}
            </div>
            {showSideDetail.length > 0 ? (<CompProjectDetail data={findDetailValue[0]} closeBtn={sideClose}/>) : null}
        </div>
    )
}