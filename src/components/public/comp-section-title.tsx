import React, { useEffect } from 'react';
import AOS from 'aos';

interface Props{
    txtDash:string;
    txtNom:string;
}

export const CompSectionTitle = ({txtDash, txtNom} :Props) =>{

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return(
        <div className="txt-title" data-aos="fade-up">
            <div className="wrap">
                <p className="txt-dash">{txtDash}</p>
                <p className="txt-normal">{txtNom}</p>
            </div>
        </div>
    )
}