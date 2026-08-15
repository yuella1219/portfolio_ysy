import React from "react";
// import {
//   cuMo,
//   cuPc,
//   ets01,
//   ets02,
//   cgv,
//   shinhan01,
//   shinhan02,
//   lg01,
//   lg02,
//   lg03,
// } from "../../img";

export type ProjectDataProps = {
  posNm: string; // 포지션
  proNm: string; // 프로젝트명
  startDt: string; // 시작일
  endDt: string; // 종료일
  useLaun: string; // 사용 기술
  devFrm?: string; // 개발 프레임워크
  devOs: string; // 개발 플랫폼
  clientNm: string; // 클라이언트명
  member: number; // 퍼블리싱 팀 인원
  contribRate: number; // 기여도
  role: "pl" | "pe"; // 역할(pl, pe)
  proInter: React.ReactNode; // 프로젝트 내용 요약
  intoTxt: React.ReactNode; // 프로젝트 내용 상세
  url?: { name: string; url: string }[]; // 링크
};

export const ProjectData: ProjectDataProps[] = [
  {
    posNm: "Publishing",
    proNm: "키움저축은행 고도화",
    startDt: "2025-12",
    endDt: "2026-02",
    useLaun: "ReactㆍTypeScript",
    devFrm: "ReactㆍNext.js",
    devOs: "Mobile App",
    clientNm: "키움저축은행",
    member: 5,
    contribRate: 30,
    role: "pe",
    proInter: <>기존 키움저축은행 앱을 React로 리뉴얼/고도화</>,
    intoTxt: (
      <>
        키움저축은행 리뉴얼/고도화
        <br />
        <br />
        담당파트 - 여신 / 대출관리 / 예적금관리
      </>
    ),
  },
  {
    posNm: "Publishing",
    proNm: "더현대 뉴커머스 프로젝트",
    startDt: "2025-06",
    endDt: "2025-11",
    useLaun: "ReactㆍTypeScript",
    devFrm: "ReactㆍNext.js",
    devOs: "PC Web | Mobile Web | Mobile App",
    clientNm: "현대백화점",
    member: 5,
    contribRate: 25,
    role: "pe",
    url: [
      { name: "COS", url: "https://www.cos.com/ko-kr" },
      { name: "ARKET", url: "https://www.arket.com/ko-kr" },
    ],
    proInter: <>기존 더현대 온라인 쇼핑몰을 React로 고도화</>,
    intoTxt: (
      <>
        더현대 온라인 쇼핑몰 고도화 프로젝트
        <br />
        <br />
        고도화 사이트 총 5개 중<br />
        기존 서비스 중인 브랜드 쇼핑물 2개를 React로 고도화 <br />
        공통 프레임 레이아웃부터 UI 컴포넌트까지
        <br />
        2개 브랜드 사이트 기여도 100% (1인 담당 작업)
      </>
    ),
  },
  {
    posNm: "Publishing",
    proNm: "예금보험공사 웹접근성 작업",
    startDt: "2025-03",
    endDt: "2025-04",
    useLaun: "HTML5, CSS3, Javascript, jQuery",
    devOs: "PC Web",
    clientNm: "예금보험공사",
    member: 4,
    contribRate: 50,
    role: "pl",
    proInter: (
      <>
        예금보험공사 산하 운영 서비스 4개 사이트의 웹 접근성 품질인증 심사에
        대응하고, 최종 통과까지 완료한 프로젝트입니다.
      </>
    ),
    intoTxt: (
      <>
        <strong>심사기관</strong>
        <ul>
          <li>한국웹접근성인증평가원</li>
        </ul>
        <br />
        <strong>심사 범위</strong>
        <ul>
          <li>예금보험공사</li>
          <li>생활금융아카데미</li>
          <li>예보공매정보</li>
          <li>금융안심포탈</li>
        </ul>
        <br />
        <strong>주요 작업</strong>
        <ul>
          <li>폼 컨트롤에 명시적 label 연결</li>
          <li>이미지 콘텐츠 대체 텍스트 추가</li>
          <li>커스텀 모달 포커스 제어 처리</li>
          <li>첨부 파일 대체 텍스트 파일 제공</li>
          <li>자막 미포함 콘텐츠 자막 추가</li>
        </ul>
      </>
    ),
  },
  {
    posNm: `Publishing`,
    proNm: `경남 디지털 혁신 튜브`,
    startDt: `2024.10`,
    endDt: `2024.12`,
    useLaun: `HTML5, CSS3, Javascript, jQuery`,
    devOs: `PC Web | Mobile Web`,
    clientNm: `경남 디지털 혁신 튜브`,
    member: 3,
    contribRate: 50,
    role: "pe",
    proInter: <>경남 디지털 혁신튜브 리뉴얼</>,
    intoTxt: (
      <>
        공통 컴포넌트 가이드 작업
        <br />
        Gnb작업
        <br />
        사용자 화면 퍼블리싱
        <br />
        사용자 화면 UI/UX 스크립트 작업(60%)
      </>
    ),
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
    contribRate: 40,
    role: "pe",
    proInter: <>외부 활동과 SNS가 통합된 마일리지 서비스 어플리케이션</>,
    intoTxt: (
      <>
        공통 컴포넌트 작업
        <br />
        사용자 화면 컴포넌트 작업
        <br />
        메인 피드
        <br />내 정보
        <br />
        <br /> 메인 피드 리스트 출력 데이터 호출
        <br />
        피드 작성 기능 구현
        <br /> 피드 상세페이지 데이터 호출
        <br />
        피드 수정 기능 구현
        <br />
        피드 삭제 기능 구현
        <br />
        좋아요 기능 구현
        <br />
        댓글/대댓글 등록 기능 구현
        <br />
        피드/댓글 신고 기능 구현
      </>
    ),
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
    contribRate: 10,
    role: "pe",
    proInter: <>식권 플랫폼 중계 및 복지 포인트 어플리케이션</>,
    intoTxt: (
      <>
        <p>기존 플랫폼 기능 추가 및 개선</p>
        <ul>
          <li>송금하기</li>
          <li>최근 검색한 친구 목록</li>
          <li>admin 유지보수 및 개선</li>
        </ul>
      </>
    ),
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
    contribRate: 100,
    role: "pe",
    proInter: (
      <>
        CGV PC웹페이지 좌석예매 시스템 내 추가된 신규 서비스 프로젝트
        <br />
        SVIP 등급 고객 로그인 시 VIP 좌석 범례 노출 및 예매 좌석, 매수 제한 기능
        추가
      </>
    ),
    intoTxt: (
      <>
        <p>PC Web 환경 단독 담당</p>
        <p>모바일 또는 크로스 플랫폼은 담당 업무 범위 내 포함 X</p>
        <br />
        <strong>주요 작업</strong>
        <ul>
          <li>API를 통한 데이터 처리</li>
          <li>로그인 유저 등급 확인 로직 추가</li>
          <li>유저 등급에 따른 선점 좌석 범례 노출 기능 추가</li>
          <li>선점 좌석 최대 매수 제한 기능 추가</li>
          <li>선점 좌석 교차 예매 제한 기능 추가</li>
        </ul>
      </>
    ),
  },
  {
    posNm: `Publishing`,
    proNm: `신한은행 금융상품비교`,
    startDt: `2023.04`,
    endDt: `2023.09`,
    useLaun: `HTML5, CSS3, Javascript, jQuery`,
    devOs: `Android | iOS`,
    contribRate: 50,
    role: "pe",
    clientNm: `신한은행`,
    member: 2,
    proInter: (
      <>
        신한은행 대환대출 서비스 신규 개발
        <br />
        기존 신한은행 앱(하이브리드) 운영 서비스 고도화
      </>
    ),
    intoTxt: (
      <>
        <p>기존 신한은행 앱(하이브리드) 운영 서비스 고도화</p>
        <ul>
          <li>사용자 화면 퍼블리싱</li>
          <li>
            데이터 처리를 제외한 프론트 스크립트(swiper, 스크롤 애니메이션 등)
          </li>
          <li>대출 조건에 따라 상이하게 노출되어야 하는 UI 컴포넌트 작성</li>
          <li>신규 컴포넌트 가이드 작성</li>
        </ul>
      </>
    ),
  },
  {
    posNm: `Publishing`,
    proNm: `LG HelloRental 운영`,
    startDt: `2022.07`,
    endDt: `2023.03`,
    useLaun: `HTML5, CSS3, Javascript, jQuery`,
    devOs: `PC | Mobile`,
    contribRate: 100,
    role: "pe",
    clientNm: `LG HelloRental`,
    member: 2,
    proInter: <>가전제품 렌탈 서비스 홈페이지 운영 및 고도화</>,
    intoTxt: (
      <>
        <strong>고도화 작업</strong>
        <ul>
          <li>퍼블리싱(MO/PC반응형)</li>
          <li>
            데이터 처리를 제외한 프론트 스크립트(swiper, 스크롤 애니메이션 등)
          </li>
          <li>카테고리 전체 리뉴얼 작업 (50%)</li>
          <li>리뷰 게시판 / 리뷰 작성 화면 작업 (100%)</li>
          <li>스마트 구매가이드 화면 작업 (100%)</li>
          <li>2022 추석 기획전 화면 작업 (100%)</li>
        </ul>
        <br />
        <p>상기 내용 외 기본 운영 업무 담당</p>
      </>
    ),
  },
  {
    posNm: `Publishing`,
    proNm: `CUPOST 리뉴얼`,
    startDt: `2022.07`,
    endDt: `2022.10`,
    useLaun: `HTML5, CSS3, Javascript, jQuery`,
    devOs: `PC | Mobile`,
    contribRate: 60,
    role: "pe",
    clientNm: `BGF Networks`,
    member: 4,
    proInter: <>CU POST 전체 리뉴얼 프로젝트</>,
    intoTxt: (
      <>
        <ul>
          <li>모바일 사용자 화면 퍼블리싱</li>
          <li>PC 사용자 화면 퍼블리싱</li>
          <li>
            간단한 기능 수행하는 JavaScript / jQuery코드 작업(dropdown, swiper
            등)
          </li>
          <li>
            웹접근성 준수를 위한 커스텀 셀렉트 박스 및 키보드 이동 구현(PC)
          </li>
        </ul>
      </>
    ),
  },
];
