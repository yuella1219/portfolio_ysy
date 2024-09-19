import React, { useEffect, useState } from 'react';
import { CompSectionTitle } from '../'
import AOS from 'aos';

export const SectionToy = () =>{
    
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return(
        <div className="section-toy">
            <CompSectionTitle txtDash="Toy" txtNom="Project" />
            <div className="wrap">

            </div>
        </div>
    )
}