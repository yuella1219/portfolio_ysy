import React from 'react';
import {CompSectionTitle, CompCareerBlock} from '../index'

export const SectionCareer = () =>{
    return(
        <div className="section-career">
            <CompSectionTitle txtDash="Career" txtNom="Overview" />
            <div className="wrap">
                <CompCareerBlock startY="2022" startM='July' endY="2024" endM='July' companyNm='(주)에스제이소프트텍' teamNm='UI/UX팀' posNm='메인 퍼블리셔' delay={0} />
                <CompCareerBlock startY="2019" startM="March" endY="2021" endM="August" companyNm="(주)유어세일즈팀" teamNm="UI/UX 팀" posNm="메인 퍼블리셔 / 디자이너" delay={200} />
                <CompCareerBlock startY="2017" startM="November" endY="2019" endM="February" companyNm="프리랜서" teamNm="디자인 / 퍼블리싱" posNm="" delay={400} />
                <CompCareerBlock startY="2014" startM="November" endY="2015" endM="March" companyNm="그린컴퓨터아트학원교육이수내역" teamNm="포토샵/일러스트레이터 기본 및 심화교육. HTML5, CSS, jQuery를 이용한 반응형웹 제작 기법" posNm="" delay={600} />
                <CompCareerBlock startY="2012" startM="March" endY="2014" endM="February" companyNm="청강문화산업대학" teamNm="스마트폰과" posNm="" delay={800} />
            </div>
        </div>
    )
}