import React, { useEffect } from 'react';
import AOS from 'aos';
import { CompSectionTitle } from '../public';
import { CompGraph } from './comp-graph.tsx'

export const SectionSkill = () =>{

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

    return(
        <div className="section-skill">
            <CompSectionTitle txtDash="Skill" txtNom="Tree"/>
            <div className="wrap" data-aos="fade-up">
                <CompGraph skill="Html" per={95} />
                <CompGraph skill="Css" per={95} />
                <CompGraph skill="Vanila JavaScript" per={80} />
                <CompGraph skill="jQuery" per={80} />
                <CompGraph skill="React.js" per={65} />
                <CompGraph skill="React Native" per={55} />
            </div>
        </div>
    )
}