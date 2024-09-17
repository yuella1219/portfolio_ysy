import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import AOS from 'aos';

interface Props{
    skill : string;
    per : number;
    animate : boolean;
}

const GaugeSize = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'per', // 'per' prop을 HTML 요소로 전달하지 않음
  })<{ per: number }>`
    width:${(props) => props.per || 0}%;
    height:100%;
    background:#FF5A5F;
    transition:width 3s;
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
                    <GaugeSize per={count}/>
                </div>
                <p className="txt-per">{count}%</p>
            </div>
        </div>
    )
}