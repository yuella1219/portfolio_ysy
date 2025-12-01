import React from 'react';
import {cuMo, cuPc, ets01, ets02, cgv, shinhan01, shinhan02, lg01, lg02, lg03} from '../../images';

export type ExperienceDataProps = {
    posNm : string;
    proNm : string;
    startDt : string;
    endDt : string;
    useLaun : string;
    devOs : string;
    clientNm : string;
    member : number;
    proInter : string;
    intoTxt : React.ReactNode;
    url?:string[];
}

export const experience_data: ExperienceDataProps[] = [
    {
        posNm : 'Publishing',
        proNm : '현대백화점 프로젝트',
        startDt : '2025-06',
        endDt : '2025-11',
        useLaun : 'React',
        devOs : 'PC Web',
        clientNm : '현대백화점',
        member : 5,
        proInter : '현대백화점 웹 프로젝트',
        intoTxt : 
            <>
                현대백화점 신규 프로젝트<br/>
                <br/>
                담당 파트 - 기존 서비스 중인 브랜드 쇼핑물 React로 고도화
            </>,
    },
    {
        posNm : 'Publishing',
        proNm : '예금보험공사 웹접근성 작업',
        startDt : '2025-03',
        endDt : '2025-04',
        useLaun : 'HTML5, CSS3, Javascript, jQuery',
        devOs : 'PC Web',
        clientNm : '예금보험공사',
        member : 4,
        proInter : '예금보험공사 웹접근성 취득',
        intoTxt : <>작업 사이트 명 - <br /> ㆍ 예금보험공사<br /> ㆍ 생활금융아카데미<br /> ㆍ 예보공매정보<br /> ㆍ 금융안심포탈<br /><br /> 심사기관 - 한국웹접근성인증평가원<br /><br />작업내용 - Label 추가, 대체텍스트 추가, 커스텀 모달 포커싱 처리 등 웹접근성 지침에 준하는 작업 수행<br />기여도 - 50% <br /> 특이사항 - PL 업무 수행</>,
    },
    {
        posNm: `Publishing`,
        proNm: `경남 디지털 혁신 튜브`,
        startDt: `2024.10`,
        endDt: `2024.12`,
        useLaun: `HTML5, CSS3, Javascript, jQuery`,
        devOs: `PC Web | Mobile Web`,
        clientNm: `-`,
        member: 8,
        proInter: `경남 디지털 혁신튜브 리뉴얼`,
        intoTxt: <>공통 컴포넌트 가이드 작업<br />Gnb작업<br />사용자 화면 퍼블리싱<br />사용자 화면 UI/UX 스크립트 작업(60%)</>,
    },
    {
        posNm: `Development`,
        proNm: `사내 프로젝트`,
        startDt: `2024.01`,
        endDt: `2024.07`,
        useLaun: `React Native`,
        devOs: `Android | iOS`,
        clientNm: `-`,
        member: 4,
        proInter: `외부 활동과 SNS가 통합된 마일리지 서비스 어플리케이션`,
        intoTxt: <>공통 컴포넌트 작업<br />사용자 화면 컴포넌트 작업<br />메인 피드<br />내 정보<br /><br /> 메인 피드 리스트 출력 데이터 호출<br />피드 작성 기능 구현<br /> 피드 상세페이지 데이터 호출<br />피드 수정 기능 구현<br />피드 삭제 기능 구현<br />좋아요 기능 구현<br />댓글/대댓글 등록 기능 구현<br />피드/댓글 신고 기능 구현</>,
    },
    {
        posNm: `Publishing`,
        proNm: `식권나라`,
        startDt: `2024.01`,
        endDt: `2024.03`,
        useLaun: `HTML5, CSS3, Javascript, jQuery`,
        devOs: `PC Web | Android | iOS`,
        clientNm: `BGF Networks`,
        member: 5,
        proInter: `식권 플랫폼 중계 및 복지 포인트 어플리케이션\n`,
        intoTxt: <>컴포넌트 작업<br /> - 송금하기<br /> - 최근 검색한 친구 목록<br /><br />admin 유지보수 및 개선</>,
        url:[ets01, ets02],
    },
    {
        posNm: `Publishing`,
        proNm: `CGV SVIP 좌석 가이드`,
        startDt: `2023.10`,
        endDt: `2023.12`,
        useLaun: `Javascript`,
        devOs: `PC Web`,
        clientNm: `CGV`,
        member: 13,
        proInter: `CGV PC웹페이지 좌석예매 시스템 내 추가된 신규 서비스 프로젝트\nSVIP 등급 고객 로그인 시 VIP 좌석 범례 노출 및 예매 좌석, 매수 제한 기능 추가`,
        intoTxt: <>API를 통한 데이터 처리<br />로그인 유저 등급 확인 로직 추가<br />유저 등급에 따른 선점 좌석 범례 노출 기능 추가<br />선점 좌석 최대 매수 제한 기능 추가<br />선점 좌석 교차 예매 제한 기능 추가<br /></>,
        url:[cgv],
    },
    {
        posNm: `Publishing`,
        proNm: `신한은행 금융상품비교`,
        startDt: `2023.04`,
        endDt: `2023.09`,
        useLaun: `HTML5, CSS3, Javascript, jQuery`,
        devOs: `Android | iOS`,
        clientNm: `신한은행`,
        member: 14,
        proInter: `신한은행 대환대출 서비스 프로젝트\n기존 신한은행 앱(하이브리드)에 추가되었으며 대출 조건에 따라 상이하게 노출되어야 하는 UI 컴포넌트 작성`,
        intoTxt: <>사용자 화면 퍼블리싱<br />데이터 처리를 제외한 프론트 스크립트(swiper, 스크롤 애니메이션 등)<br />공통 컴포넌트 가이드 활용<br />신규 컴포넌트 가이드 작성</>,
        url:[shinhan01, shinhan02],
    },
    {
        posNm: `Publishing`,
        proNm: `LG HelloRental 운영`,
        startDt: `2022.07`,
        endDt: `2023.03`,
        useLaun: `HTML5, CSS3, Javascript, jQuery`,
        devOs: `PC | Mobile`,
        clientNm: `LG HelloRental`,
        member: 2,
        proInter: `가전제품 렌탈 서비스 홈페이지 운영 프로젝트\n탬플릿을 사용하지 않은 자체 제작 100%의 쇼핑몰 형태\n신규 서비스 추가 또는 리뉴얼 작업 위주`,
        intoTxt: <>퍼블리싱(MO/PC반응형)<br />데이터 처리를 제외한 프론트 스크립트(swiper, 스크롤 애니메이션 등)<br />카테고리 전체 리뉴얼 작업 (50%)<br />리뷰 게시판 / 리뷰 작성 화면 작업 (100%)<br />스마트 구매가이드 화면 작업 (100%)<br />2022 추석 기획전 화면 작업 (100%)</>,
        url:[lg01, lg02, lg03],
    },
    {
        posNm: `Publishing`,
        proNm: `CUPOST 리뉴얼`,
        startDt: `2022.07`,
        endDt: `2022.10`,
        useLaun: `HTML5, CSS3, Javascript, jQuery`,
        devOs: `PC | Mobile`,
        clientNm: `BGF Networks`,
        member: 5,
        proInter: `기존 홈페이지 디자인 리뉴얼 및 신규 시스템 추가\n여러 종류의 택배예약 서비스를 독립된 컴포넌트로 작업하여 각 스텝에 맞는 화면이 노출될 수 있도록 작업`,
        intoTxt: <>모바일 사용자 화면 퍼블리싱<br />PC 사용자 화면 퍼블리싱<br />간단한 기능 수행하는 JavaScript / jQuery코드 작성(dropdown, swiper 등)<br />웹접근성 준수를 위한 커스텀 셀렉트 박스 및 키보드 이동 구현(PC)</>,
        url:[cuMo, cuPc],
    },
]