import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import { CompSectionTitle } from '../public';
import { CompGraph } from './comp-graph.tsx'

export const SectionSkill = () =>{
    const getBox = useRef<HTMLDivElement | null>(null);
    const [getBoxOffset, setGetBoxOffset] = useState(0);
    const [scrollOnOff, setScrollonOff] = useState(false);

    const scrollCount = () =>{
        const scroll = window.scrollY;

        if(scroll > getBoxOffset) setScrollonOff(true);
        if(scroll < getBoxOffset) setScrollonOff(false);
    }

    const calBoxOffset = () =>{
        // if(getBox.current) setGetBoxOffset(getBox.current.getBoundingClientRect().top)
        // if(getBox.current) setGetBoxOffset(getBox.current.offsetTop)
        if(getBox.current) setGetBoxOffset(getBox.current.scrollTop)
            
        console.log(getBoxOffset)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollCount);
        calBoxOffset()
        AOS.init({ duration: 1500 });
      }, []);

    useEffect(()=>{
        console.log('switch ' + scrollOnOff )
    }, [scrollOnOff])

    return(
        <div className="section-skill">
            <CompSectionTitle txtDash="Skill" txtNom="Tree"/>
            <div className="wrap" data-aos="fade-up" ref={getBox}>
                <CompGraph animate={scrollOnOff} skill="Html" per={95} />
                <CompGraph animate={scrollOnOff} skill="Css" per={95} />
                <CompGraph animate={scrollOnOff} skill="Vanila JavaScript" per={80} />
                <CompGraph animate={scrollOnOff} skill="jQuery" per={80} />
                <CompGraph animate={scrollOnOff} skill="React.js" per={65} />
                <CompGraph animate={scrollOnOff} skill="React Native" per={55} />
            </div>
        </div>
    )
}