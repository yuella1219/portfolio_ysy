import React, { useEffect, useRef } from 'react';
import { replace, IconGit } from '../'
import type { ToyUrlProps } from '../'
import AOS from 'aos';

interface Props {
    data : ToyUrlProps;
}

const ACTIVE_KEY = 'active'

export const CompToyBlock = ({ data }:Props) =>{
    const act = useRef<HTMLButtonElement | null>(null);

    const boxActive = () =>{
        if(act.current){
            const box = act.current.parentNode as HTMLDivElement;
            if(box.classList.contains(ACTIVE_KEY)) {
                box.classList.remove(ACTIVE_KEY)
            }else{
                const grandBox = box.parentNode as HTMLDivElement;
                const siblings = Array.from(grandBox?.childNodes || []).filter(
                    (node): node is HTMLDivElement => node instanceof HTMLDivElement
                );
                siblings.forEach(sibling => {
                    sibling.classList.remove('active');
                });
                box.classList.add(ACTIVE_KEY);
            }
        }
    }
    
    useEffect(() => {
        AOS.init({ duration: 1000 });
        if(act.current) act.current.addEventListener('click', boxActive)
    }, []);


    return(
        <div className='toy-block'>
            <button className="toy-txt" ref={act}><span>{data.tit}</span></button>
            <div className="inner">
                <div className="txt-wrap">
                    <div className="info-wrap">
                        <p className="txt-tit">사용 언어</p>
                        <p className="txt-info">{data.useLang}</p>
                    </div>
                    {data.gitUrl ? (
                        <div className="info-wrap">
                            <p className="txt-tit">Git Link</p>
                            <a className="txt-info" target="_blank" href={data.gitUrl}>
                                <IconGit />
                            </a>
                        </div>) 
                        : null}
                    <div className="info-wrap">
                        <p className="txt-tit">New Window</p>
                        <a className="txt-info" target="_blank" href={data.url}>👉</a>
                    </div>
                    <p className="info-txt">{replace(data.infoTxt)}</p>
                </div>
                <div className="toy-url">
                    <iframe src={data.url} />
                </div>
            </div>
        </div>
    )
}