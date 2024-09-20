export type CareerDataProps = {
    startY : string;
    startM : string;
    endY : string;
    endM : string;
    companyNm : string;
    teamNm : string;
    posNm?: string;
}

export const career_data:CareerDataProps[] = [
    {
        startY : `2022`,
        startM : `July`,
        endY : `2024`,
        endM : `July`,
        companyNm : `(주)에스제이소프트텍`,
        teamNm : `UI/UX팀`,
        posNm: `메인 퍼블리셔`,
    },
    {
        startY : `2019`,
        startM : `March`,
        endY : `2021`,
        endM : `August`,
        companyNm : `(주)유어세일즈팀`,
        teamNm : `UI/UX팀`,
        posNm: `메인 퍼블리셔 / 디자이너`,
    },
    {
        startY : `2017`,
        startM : `November`,
        endY : `2019`,
        endM : `February`,
        companyNm : `프리랜서`,
        teamNm : `디자인 / 퍼블리싱`,
    },
    {
        startY : `2014`,
        startM : `November`,
        endY : `2015`,
        endM : `March`,
        companyNm : `그린컴퓨터아트학원`,
        teamNm : `포토샵/일러스트레이터 기본 및 심화교육. HTML5, CSS, jQuery를 이용한 반응형웹 제작 기법`,
    },
    {
        startY : `2012`,
        startM : `March`,
        endY : `2014`,
        endM : `February`,
        companyNm : `청강문화산업대학`,
        teamNm : `스마트폰과`,
    },
]