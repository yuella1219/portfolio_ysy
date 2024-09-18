import React, { useEffect, useState } from 'react';
import { CompSectionTitle } from '../public'
import { CompProjectDetail } from './comp-project-detail.tsx'
import { CompProjectBlock } from './comp-project-block.tsx'
import type {ExperienceDataProps} from './data.ts' 
import {experience_data} from './data.ts' 
import AOS from 'aos';

export const SectionProject = ({posNm, proNm} : ExperienceDataProps) =>{
    const [sideOpen, setSideOpen] = useState(0);
    const [getProNm, setGetProNm] = useState('');
    const [findDetailValue, setFindDetailValue] = useState<ExperienceDataProps[]>([])
    const [showSideDetail, setShowSideDetail] = useState('');

    // block 전달용
    const getProjectNameFromBlock = (str : string) =>{
        setGetProNm(str)
        setSideOpen(sideOpen + 1)
        document.querySelector('body')?.classList.add('unscroll')
    }
    // side detail 접기 전달용
    const sideClose = () => {
        setShowSideDetail('');
        document.querySelector('body')?.classList.remove('unscroll')
    }
    
    useEffect(()=>{
        setShowSideDetail(getProNm);
        setFindDetailValue(experience_data.filter(idx => idx.proNm === getProNm))
    }, [sideOpen])

    // npm run deploy 배포
    useEffect(() => {
        AOS.init({ duration: 500 });
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
            {showSideDetail.length > 0 ? (
                <div className="detail-wrap active">
                    <div className="detail-block">
                        <CompProjectBlock posNm={findDetailValue[0].posNm || ''} proNm={findDetailValue[0].proNm || ''} delayCt={0} sendNm={getProjectNameFromBlock}/>
                    </div>
                    <CompProjectDetail data={findDetailValue[0]} closeBtn={sideClose}/>
                    <div className="dim" onClick={sideClose}></div>
                </div>) 
                : null}
        </div>
    )
}