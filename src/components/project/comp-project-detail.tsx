import React, { useEffect } from 'react';
import AOS from 'aos';

export const CompProjectDetail = () =>{
    
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

    return(
        <div className="project-detail">
            <div className="inner">
                <h6 className="pos-nm">포지션명</h6>
                <div className="tit-wrap">
                    <h4 className="pro-nm">프로젝트명</h4>
                    <div className="date-wrap">
                        <span className="start-date">시작날짜</span>
                        <span> - </span>
                        <span className="end-date">종료날짜</span>
                    </div>
                </div>
                <div className="pro-info">
                    <div>
                        <span className="use-launguage"></span>
                    </div>
                </div>
                <button className="btn-close" />
            </div>
        </div>
    )
}