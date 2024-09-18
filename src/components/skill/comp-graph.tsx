import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import CountUp from 'react-countup';

interface Props{
    skill : string;
    per : number;
    animate : boolean;
}

interface TransientProps{
    $per : number;
}

const GaugeSize = styled.div<TransientProps>`
    width:${(props) => props.$per || 0}%;
    height:100%;
    background:#FF5A5F;
    transition:width 3s;
    border-radius:inherit
`

export const CompGraph = ({skill, per, animate} : Props) =>{
    const [count, setCount] = useState(0);
    const graphPosY = useRef<HTMLDivElement | null>(null); 

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    useEffect(()=>{
        if(animate) setCount(per);
        if(!animate) setCount(0);
    }, [animate])

    return(
        <div className="comp-graph" ref={graphPosY}>
            <p className="txt-skillNm">{skill}</p>
            <div className="cover">
                <div className="graph-bg">
                    <GaugeSize $per={count}/>
                </div>
                <CountUp className="txt-per" start={0} end={count} suffix=" %" duration={3}/>                
            </div>
        </div>
    )
}