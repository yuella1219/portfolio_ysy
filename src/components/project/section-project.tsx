import React, { useEffect, useState } from 'react';
import { CompSectionTitle } from '../public'
import { CompProjectDetail, CompProjectBlock, experience_data, CompProjectImgZoom } from '../'
import type {ExperienceDataProps} from '../'
import AOS from 'aos';

export const SectionProject = ({posNm, proNm} : ExperienceDataProps) =>{
    const [sideOpen, setSideOpen] = useState(0); // 디테일 오픈용
    const [getProNm, setGetProNm] = useState(''); // 디테일에서 받아온 프로젝트명
    const [findDetailValue, setFindDetailValue] = useState<ExperienceDataProps[]>([]) // 디테일명으로 데이터 찾아 업데이트
    const [showSideDetail, setShowSideDetail] = useState(''); // 오픈할 프로젝트명
    const [getImgUrl, setGetImgUrl] = useState('');
    const [showImgZoom, setShowImgZoom] = useState(false);

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
    // url 받아오기 전달용
    const getImgUrlHandler = (str : string) =>{
        setGetImgUrl('')
        setGetImgUrl(str)
    }
    // zoom창 열기
    const imgZoomOpenHandler = () =>{
        setShowImgZoom(!showImgZoom);
    }

    useEffect(()=>{
        setShowSideDetail(getProNm);
        setFindDetailValue(experience_data.filter(idx => idx.proNm === getProNm))
    }, [sideOpen])

    // npm run deploy 배포
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return(
        <div id="src-project" className="section-project">
            <CompSectionTitle txtDash="Project" txtNom="Experience" />
            <div className="wrap">
                {experience_data.map((item, index)=>{
                    return(
                        <CompProjectBlock posNm={item.posNm || ''} proNm={item.proNm || ''} delayCt={(index % 4) * 100} sendNm={getProjectNameFromBlock} key={index} />
                    )
                })}
            </div>
            {showSideDetail.length > 0 ? (
                <div className="detail-wrap active">
                    <div className="detail-block">
                        <CompProjectBlock posNm={findDetailValue[0].posNm || ''} proNm={findDetailValue[0].proNm || ''} delayCt={0} sendNm={getProjectNameFromBlock}/>
                    </div>
                    <CompProjectDetail data={findDetailValue[0]} closeBtn={sideClose} urlType={getImgUrlHandler} openZoom={imgZoomOpenHandler}/>
                    <div className="dim" onClick={sideClose}></div>
                </div>) 
                : null}
            {showImgZoom ? (<CompProjectImgZoom url={getImgUrl} btnClose={imgZoomOpenHandler}/>) : null}
        </div>
    )
}