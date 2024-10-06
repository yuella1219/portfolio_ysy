import React, { useEffect, useState } from 'react';
import {CompProjectImgZoom, type ExperienceDataProps} from '../'
import AOS from 'aos';

interface Props {
    data : ExperienceDataProps;
    closeBtn : ()=>void;
    urlType : (str:string) => void;
    openZoom : () => void;
}

export const replace = (str: string) => {
    return str.split('\n').map((txt, index) => (
        <span key={index}>
            {txt}
            <br />
        </span>
    ));
};

export const CompProjectDetail = ({data, closeBtn, urlType, openZoom} : Props) =>{
    const [imgZoom, setImgZoom] = useState(false);
    const [imgUrl, setImgUrl] = useState('');

    const imgClickHandler = (event : React.MouseEvent<HTMLElement, MouseEvent>) =>{
        setImgZoom(!imgZoom);
        const _el = event.target as HTMLElement;
        const _src = String(_el.getAttribute('src'))
        // setImgUrl(_src)
        urlType(_src);
        openZoom();
    }
    
    const btnOnClick = () =>{
        closeBtn();
    }
    useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);    
    
    return(
        <div className="project-detail" data-aos="fade-left">
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
                    <p className="txt-info">{replace(data.proInter || '')}</p>
                </div>
                <div className="pos-info">
                    <p className="txt-tit">담당 역할</p>
                    <p className="txt-info">{replace(data.intoTxt || '')}</p>
                </div>
                <div className="url-wrap">
                    {data.url?.map((url, idx)=>(
                        <button className="btn-url" onClick={imgClickHandler} key={idx}>
                            <img src={url} alt=""/>
                        </button>
                    ))}
                </div>
                <button className="btn-close" onClick={btnOnClick}/>
            </div>
        </div>
    )
}