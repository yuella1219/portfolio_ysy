import React, { useEffect, useState } from 'react';
import { CompSectionTitle, toy_data, CompToyBlock } from '../'
import AOS from 'aos';

export const SectionToy = () =>{
    
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return(
        <div id="src-toy" className="section-toy">
            <CompSectionTitle txtDash="Toy" txtNom="Project" />
            <div className="wrap" data-aos="fade-up">
                {toy_data.map((data, index) =>{
                    return(
                        <CompToyBlock data={data} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}