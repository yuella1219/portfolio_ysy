import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import { CompSectionTitle, CompGraph } from '../'

export const SectionSkill = () =>{
    const getBox = useRef<HTMLDivElement | null>(null);
    const [scrollOnOff, setScrollonOff] = useState(false);

    const scrollCount = () =>{
        if(getBox.current) {
            if(getBox.current.classList.contains('aos-animate')){
                setScrollonOff(true);
            }else{
                setScrollonOff(false);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollCount);
        AOS.init({ duration: 1500 });
      }, []);

    useEffect(()=>{
    }, [scrollOnOff])

    return(
        <div id="src-skill" className="section-skill">
            <CompSectionTitle txtDash="Skill" txtNom="Tree"/>
            <div className="wrap" data-aos="fade-up" ref={getBox}>
                <CompGraph animate={scrollOnOff} skill="Html" per={95} />
                <CompGraph animate={scrollOnOff} skill="Css" per={95} />
                <CompGraph animate={scrollOnOff} skill="Vanila JavaScript" per={85} />
                <CompGraph animate={scrollOnOff} skill="jQuery" per={85} />
                <CompGraph animate={scrollOnOff} skill="React.js" per={70} />
                <CompGraph animate={scrollOnOff} skill="React Native" per={55} />
            </div>
        </div>
    )
}