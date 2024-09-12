import React from 'react';

export const Header = () =>{
    return(
        <header className="header">
            <div>
                <h1><button><span className="t-high">N</span>EED WALK</button></h1>
                <ul>
                    <li><button><span className="t-high">C</span>areer</button></li>
                    <li><button><span className="t-high">S</span>kill</button></li>
                    <li><button><span className="t-high">P</span>roject</button></li>
                    <li><button><span className="t-high">T</span>oy</button></li>
                    <li><button><span className="t-high">E</span>tc</button></li>
                </ul>
            </div>
        </header>
    )
}