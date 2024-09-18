import React, { useEffect } from 'react';
import type {ExperienceDataProps} from './data.ts' 
import AOS from 'aos';

interface Props {
    data : ExperienceDataProps;
    closeBtn : ()=>void;
}

export const CompProjectDetail = ({data, closeBtn} : Props) =>{
    
    const btnOnClick = () =>{
        closeBtn();
    }

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

    return(
        <div className="project-detail">
            <div className="inner">
                <h6 className="pos-nm">{data.posNm}</h6>
                <div className="tit-wrap">
                    <h4 className="pro-nm">{data.proNm}</h4>
                    <div className="date-wrap">
                        <span className="start-date">{data.startDt}</span>
                        <span> - </span>
                        <span className="end-date">{data.endDt}</span>
                    </div>
                </div>
                <div className="pro-info">
                    <div>
                        <span className="txt-tit">사용언어</span>
                        <span className="txt-info">{data.useLaun}</span>
                    </div>
                    
                    <div>
                        <span className="txt-tit">OS</span>
                        <span className="txt-info">{data.devOs}</span>
                    </div>
                    
                    <div>
                        <span className="txt-tit">고객사</span>
                        <span className="txt-info">{data.clientNm}</span>
                    </div>
                    
                    <div>
                        <span className="txt-tit">인원</span>
                        <span className="txt-info">{data.member} 명</span>
                    </div>
                </div>
                <div className="pro-intro">
                    <p className="txt-tit">프로젝트 소개</p>
                    <p className="txt-info">{data.proInter}</p>
                </div>
                <div className="pos-info">
                    <p className="txt-tit">담당 역할</p>
                    <p className="txt-info">{data.intoTxt}</p>
                </div>
                <button className="btn-close" onClick={btnOnClick}/>
            </div>
        </div>
    )
}