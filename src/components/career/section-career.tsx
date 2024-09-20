import React from 'react';
import {CompSectionTitle, CompCareerBlock, career_data} from '../'

export const SectionCareer = () =>{
    return(
        <div className="section-career">
            <CompSectionTitle txtDash="Career" txtNom="Overview" />
            <div className="wrap">
                {career_data.map((data, index)=> (
                        <CompCareerBlock data={data} key={index}/>
                    )
                )}
            </div>
        </div>
    )
}