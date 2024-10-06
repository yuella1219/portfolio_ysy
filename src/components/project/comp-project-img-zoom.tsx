import React, { useEffect } from 'react';
import AOS from 'aos';

interface Props {
    url : string;
    btnClose : () => void;
}

export const CompProjectImgZoom = ({url, btnClose}:Props) =>{
    
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

    return(
        <div className="comp-zoom">
            <div className="inner">
                <img src={url} alt="" />
                <button className="btn-close" onClick={btnClose}/>
            </div>
            <div className="dim" onClick={btnClose}/>
        </div>
    )
}