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
    transition:width 3s;
`

export const CompGraph = ({skill, per} : Props) =>{
    const [animateShow, setAnimateShow] = useState(false);
    const [ calPosY, setCalPosY ] = useState(0);
    const [count, setCount] = useState(0);
    const graphPosY = useRef<HTMLDivElement | null>(null); 

    const scrollCount = () =>{
        const scroll = window.scrollY;

        if(scroll > calPosY) setAnimateShow(true);
        if(scroll < calPosY) setAnimateShow(false);
        console.log(animateShow)
        console.log(calPosY)
        console.log('scrollCount')
        if(graphPosY.current){
            setCalPosY(graphPosY.current.offsetTop)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollCount);
        AOS.init({ duration: 1000 });
      }, []);

    useEffect(()=>{
        if(animateShow) setCount(per);
        if(!animateShow) setCount(0);
        console.log(animateShow)
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