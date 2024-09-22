import React, { useState, useEffect, useRef } from 'react';

export const Header = () =>{
    const [scrollEvt, setScrollEvt] = useState(false);
    const [scroll, setScroll] = useState('');
    const [navEvt, setNavEvt] = useState(false)
    const navList = useRef<HTMLUListElement | null>(null)

    const goToSection = (event) =>{
        const _target = event.target.getAttribute('aria-controls');
        if(_target !== null) {
            setScroll(_target)
            setScrollEvt(!scrollEvt);
        }
    }

    const navShowHandler = () =>{
        setNavEvt(!navEvt);
    }

    useEffect(()=>{
        if(scroll.length > 0) {
            const findSec = document.getElementById(scroll) as HTMLDivElement;
            const _offset = findSec.offsetTop;
            window.scrollTo({top:_offset - 100, behavior : 'smooth'})
        }
    }, [scrollEvt])

    useEffect(()=>{
        if(navList.current){
            if(navEvt) {
                navList.current.classList.add('active')
            }else{
                navList.current.classList.remove('active')
            }
        }
    }, [navEvt])

    return(
        <header className="header">
            <div>
                <h1><button><span className="t-high">N</span>EED WALK</button></h1>
                <ul className="" ref={navList}>
                    <li><button aria-controls="src-career" onClick={goToSection}><span className="t-high">C</span>areer</button></li>
                    <li><button aria-controls="src-skill" onClick={goToSection}><span className="t-high">S</span>kill</button></li>
                    <li><button aria-controls="src-project" onClick={goToSection}><span className="t-high">P</span>roject</button></li>
                    <li><button aria-controls="src-toy" onClick={goToSection}><span className="t-high">T</span>oy</button></li>
                    <li><button aria-controls="src-etc" onClick={goToSection}><span className="t-high">E</span>tc</button></li>
                </ul>
                <button className="mo-nav" onClick={navShowHandler}><span /><span /><span /></button>
            </div>
        </header>
    )
}