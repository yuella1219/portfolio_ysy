import React from "react";

export type ProjectDataProps = {
  posNm: string; // 포지션
  proNm: string; // 프로젝트명
  startDt: string; // 시작일
  endDt: string; // 종료일
  useLaun: string; // 사용 기술
  devFrm?: string; // 개발 프레임워크
  devOs: string; // 개발 플랫폼
  clientNm: string; // 클라이언트명
  member: string; // 퍼블리싱 팀 인원
  contribRate: number; // 기여도
  role: "pl" | "pe"; // 역할(pl, pe)
  proInter: React.ReactNode; // 프로젝트 내용 요약
  intoTxt: React.ReactNode; // 프로젝트 내용 상세
  url?: { name: string; url: string }[]; // 링크
  images?: string[]; // 스크린샷
};

export const ProjectData: ProjectDataProps[] = [
  {
    posNm: "Publishing",
    proNm: "키움저축은행 고도화",
    startDt: "2025.12",
    endDt: "2026.02",
    useLaun: "ReactㆍTypeScript",
    devFrm: "ReactㆍNext.js",
    devOs: "Mobile App",
    clientNm: "키움저축은행",
    member: "Publishing 5",
    contribRate: 30,
    role: "pe",
    proInter: <>기존 키움저축은행 앱을 React로 리뉴얼/고도화</>,
    intoTxt: (
      <>
        <p>키움저축은행 리뉴얼/고도화</p>
        <br />
        <strong>주요 작업</strong>
        <ul>
          <li>UI 컴포넌트 작성</li>
          <li>여신 프로세스 전체</li>
          <li>대출관리 프로세스 전체</li>
          <li>예적금관리 프로세스 전체</li>
        </ul>
      </>
    ),
  },
  {
    posNm: "Publishing",
    proNm: "더현대 뉴커머스 프로젝트",
    startDt: "2025.06",
    endDt: "2025.11",
    useLaun: "ReactㆍTypeScript",
    devFrm: "ReactㆍNext.js",
    devOs: "PC Web | Mobile Web | Mobile App",
    clientNm: "현대백화점",
    member: "Publishing 5",
    contribRate: 25,
    role: "pe",
    url: [
      { name: "COS", url: "https://www.cos.com/ko-kr" },
      { name: "ARKET", url: "https://www.arket.com/ko-kr" },
    ],
    proInter: <>더현대 온라인 쇼핑몰 포함 5개 브랜드 사이트 React 고도화</>,
    intoTxt: (
      <>
        <p>
          더현대 온라인 쇼핑몰 고도화 프로젝트
          <br />총 5개 브랜드 사이트 중 2개 브랜드 쇼핑물을 React로 고도화
        </p>
        <br />
        <strong>주요 작업</strong>
        <ul>
          <li>담당 브랜드: COS, ARKET</li>
          <li>공통 컴포넌트 작성</li>
          <li>UI 레이아웃</li>
          <li className="ut-font-bold">각 브랜드 사이트 기여도 100%</li>
        </ul>
      </>
    ),
  },
  {
    posNm: "Publishing",
    proNm: "예금보험공사 웹접근성 작업",
    startDt: "2025.03",
    endDt: "2025.04",
    useLaun: "HTML5, CSS3, Javascript, jQuery",
    devOs: "PC Web",
    clientNm: "예금보험공사",
    member: "Publishing 4",
    contribRate: 50,
    role: "pl",
    url: [
      { name: "예금보험공사", url: "https://www.kdic.or.kr/sp/main.do" },
      {
        name: "생활금융아카데미",
        url: "https://www.kdic.or.kr/edu/fa/main/main.do",
      },
      { name: "예보공매정보", url: "https://www.kdic.or.kr/kasset/as/main.do" },
      { name: "금융안심포탈", url: "https://fins.kdic.or.kr/" },
      {
        name: "웹 인증현황",
        url: "https://www.wa.or.kr/board/list.asp?search=total&SearchString=%BF%B9%B1%DD&BoardID=0006",
      },
    ],
    proInter: (
      <>예금보험공사 산하 운영 서비스 4개 사이트의 웹 접근성 품질인증 작업</>
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
    member: "Publishing 3",
    contribRate: 50,
    role: "pe",
    url: [{ name: "홈페이지", url: "https://www.gongnam.go.kr/" }],
    proInter: <>경남 디지털 혁신튜브 리뉴얼</>,
    intoTxt: (
      <>
        <strong>주요 작업</strong>
        <ul>
          <li>공통 컴포넌트 가이드 작업</li>
          <li>Gnb작업</li>
          <li>사용자 화면 퍼블리싱</li>
          <li>사용자 화면 UI/UX 스크립트 작업(60%)</li>
        </ul>
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
    member: "Development 4",
    contribRate: 40,
    role: "pe",
    proInter: <>외부 활동과 SNS가 통합된 마일리지 서비스 어플리케이션</>,
    intoTxt: (
      <>
        <strong>주요 작업</strong>
        <ul>
          <li>공통 컴포넌트 작업</li>
          <li>사용자 화면 컴포넌트 작업</li>
          <li>메인 피드 리스트 출력 데이터 호출</li>
          <li>피드 작성 기능 구현</li>
          <li>피드 상세페이지 데이터 호출</li>
          <li>피드 수정 기능 구현</li>
          <li>피드 삭제 기능 구현</li>
          <li>좋아요 기능 구현</li>
          <li>댓글/대댓글 등록 기능 구현</li>
          <li>피드/댓글 신고 기능 구현</li>
        </ul>
      </>
    ),
  },
  {
    posNm: `Development`,
    proNm: `식권나라`,
    startDt: `2024.01`,
    endDt: `2024.03`,
    useLaun: `React Native`,
    devOs: `PC Web | Android | iOS`,
    clientNm: `BGF Networks`,
    member: "Development 5",
    contribRate: 10,
    role: "pe",
    proInter: <>식권 플랫폼 중계 및 복지 포인트 어플리케이션</>,
    url: [
      {
        name: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.mealticket.app.aos&hl=ko",
      },
      {
        name: "App Store",
        url: "https://apps.apple.com/kr/app/%EC%8B%9D%EA%B6%8C%EB%82%98%EB%9D%BC/id6477905499",
      },
    ],
    intoTxt: (
      <>
        <strong>주요 작업</strong>
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
    member: "Team 13 / Publishing 1",
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
        <p>
          <strong className="ut-font-bold">PC Web 환경 단독 담당</strong>
          <br />
          모바일 또는 크로스 플랫폼은 담당 업무 범위 내 포함 X
        </p>
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
    images: ["/img/visual/visual-cgv.png"],
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
    member: "Team 14 / Publishing 2",
    proInter: (
      <>
        신한은행 대환대출 서비스 신규 개발
        <br />
        기존 신한은행 앱(하이브리드) 운영 서비스 고도화
      </>
    ),
    intoTxt: (
      <>
        <strong>주요 작업</strong>
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
    images: [
      "/img/visual/visual-shinhan01.png",
      "/img/visual/visual-shinhan02.png",
    ],
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
    member: "Team 2 / Publishing 1",
    proInter: <>가전제품 렌탈 서비스 홈페이지 운영 및 고도화</>,
    url: [
      {
        name: "메인페이지",
        url: "https://rental.lghellovision.net/main/detail",
      },
      {
        name: "구매가이드",
        url: "https://rental.lghellovision.net/smartGuide/list",
      },
    ],
    intoTxt: (
      <>
        <strong>주요 작업</strong>
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
    images: ["/img/visual/visual-lg-pc03.png"],
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
    member: "Team 7 / Publishing 1",
    proInter: <>CU POST 전체 리뉴얼 프로젝트</>,
    url: [
      { name: "CU POST", url: "https://www.cupost.co.kr/postbox/main.cupost" },
    ],
    intoTxt: (
      <>
        <strong>주요 작업</strong>
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
    images: ["/img/visual/visual-cu-mo.png", "/img/visual/visual-cu-web.png"],
  },
];
