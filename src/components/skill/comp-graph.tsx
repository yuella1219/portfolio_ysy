import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import AOS from 'aos';

interface Props{
    skill : string;
    per : number;
}

const GaugeSize = styled.div<{ per: number }>`
    width:${(props) => props.per || 0}%;
    height:100%;
    background:#FF5A5F;
    transition:width 2s;
`

export const CompGraph = ({skill, per} : Props) =>{
    const [animateShow, setAnimateShow] = useState(false);
    const graphPosY = useRef<HTMLDivElement | null>(null); 
    const [ calPosY, setCalPosY ] = useState(0);
    const [count, setCount] = useState(0);

    const scrollCount = () =>{
        const scroll = window.scrollY;
        if(scroll > calPosY - 800) setAnimateShow(true);
        if(scroll < calPosY - 800) setAnimateShow(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollCount);
        if(graphPosY.current){
            setCalPosY(graphPosY.current.offsetTop)
        }
        AOS.init({ duration: 1500 });
      }, []);

    useEffect(()=>{
        if(animateShow) setCount(per);
        if(!animateShow) setCount(0);
    }, [animateShow])

    return(
        <div className="comp-graph" ref={graphPosY}>
            <p className="txt-skillNm">{skill}</p>
            <div className="cover">
                <div className="graph-bg">
                    <GaugeSize per={count}/>
                </div>
                <p className="txt-per">{count}%</p>
            </div>
        </div>
    )
}