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
    intoTxt : string;
    url?:string[];
}

export const experience_data: ExperienceDataProps[] = [
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
        intoTxt: `공통 컴포넌트 작업\n사용자 화면 컴포넌트 작업\n메인 피드\n내 정보\n\n 메인 피드 리스트 출력 데이터 호출\n피드 작성 기능 구현\n 피드 상세페이지 데이터 호출\n피드 수정 기능 구현\n피드 삭제 기능 구현\n좋아요 기능 구현\n댓글/대댓글 등록 기능 구현\n피드/댓글 신고 기능 구현`,
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
        intoTxt: `컴포넌트 작업\n - 송금하기\n - 최근 검색한 친구 목록\n\nadmin 유지보수 및 개선`,
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
        intoTxt: `API를 통한 데이터 처리\n로그인 유저 등급 확인 로직 추가\n유저 등급에 따른 선점 좌석 범례 노출 기능 추가\n선점 좌석 최대 매수 제한 기능 추가\n선점 좌석 교차 예매 제한 기능 추가\n`,
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
        intoTxt: `사용자 화면 퍼블리싱\n데이터 처리를 제외한 프론트 스크립트(swiper, 스크롤 애니메이션 등)\n공통 컴포넌트 가이드 활용\n신규 컴포넌트 가이드 작성`,
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
        intoTxt: `퍼블리싱(MO/PC반응형)\n데이터 처리를 제외한 프론트 스크립트(swiper, 스크롤 애니메이션 등)\n카테고리 전체 리뉴얼 작업 (50%)\n리뷰 게시판 / 리뷰 작성 화면 작업 (100%)\n스마트 구매가이드 화면 작업 (100%)\n2022 추석 기획전 화면 작업 (100%)`,
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
        intoTxt: `모바일 사용자 화면 퍼블리싱\nPC 사용자 화면 퍼블리싱\n간단한 기능 수행하는 JavaScript / jQuery코드 작성(dropdown, swiper 등)\n웹접근성 준수를 위한 커스텀 셀렉트 박스 및 키보드 이동 구현(PC)`,
        url:[cuMo, cuPc],
    },
]