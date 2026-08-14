export type ExperienceDataProps = {
  enNm: string;
  startDate: string;
  endDate: string;
  companyNm: string;
  teamNm: string;
  posNm?: string;
};

export const ExperienceData: ExperienceDataProps[] = [
  {
    enNm: `Freelance`,
    startDate: `2024.10`,
    endDate: `2026.02`,
    companyNm: `프리랜서`,
    teamNm: `퍼블리셔팀`,
    posNm: `퍼블리셔`,
  },
  {
    enNm: `SJ Softtech`,
    startDate: `2022.07`,
    endDate: `2024.07`,
    companyNm: `(주)에스제이소프트텍`,
    teamNm: `UI/UX팀`,
    posNm: `메인 퍼블리셔`,
  },
  {
    enNm: `Your Sales Team`,
    startDate: `2019.03`,
    endDate: `2021.08`,
    companyNm: `(주)유어세일즈팀`,
    teamNm: `UI/UX팀`,
    posNm: `메인 퍼블리셔 / 디자이너`,
  },
  {
    enNm: `Freelance`,
    startDate: `2017.11`,
    endDate: `2019.02`,
    companyNm: `프리랜서`,
    teamNm: `퍼블리셔 / 디자이너`,
  },
  {
    enNm: `ChungKang College of Cultural Industries`,
    startDate: `2012.03`,
    endDate: `2014.02`,
    companyNm: `청강문화산업대학`,
    teamNm: `스마트폰과`,
  },
];
