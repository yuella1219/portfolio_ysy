import React, { useEffect } from 'react';
import AOS from 'aos';

export const CompToyBlock = () =>{
    
    // npm run deploy 배포
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return(
        <div>
            <p>❤️김창섭의 건드림<br />💛모든걸 바꿔놓아~</p>
        </div>
    )
}