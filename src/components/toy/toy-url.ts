export type ToyUrlProps = {
    tit:string;
    url:string;
    useLang:string;
    infoTxt:string;
}

export const toy_data:ToyUrlProps[] = [
    {
        tit:`NewJeans 웹 팬게임`,
        url:``,
        useLang:`HTML, CSS, Vanila Javascript`,
        infoTxt:`순수 Vanila Javacript 숙련도 증진을 위해 작업한 습작입니다.\n2종의 웹게임과 1종의 웹모션 습작으로 이루어져 있습니다.`,
    },
    {
        tit:`다마고치`,
        url:`https://yuella1219.github.io/practice_collection/index.html`,
        useLang:`HTML, CSS, Vanila Javascript`,
        infoTxt:`순수 Vanila Javacript 숙련도 증진을 위해 작업한 습작입니다.\n직접 디자인 한 슬라임 캐릭터를 다양한 상호작용으로 키우는 다마고치형 육성 웹게임 입니다.`,
    },
    {
        tit:`포켓몬스터 카드 리스트`,
        url:``,
        useLang:`React.js`,
        infoTxt:`React js 숙련도 증진 및 api 연동 연습을 위해 작업한 습작입니다.\n오픈 api인 poke api를 통해 포켓몬 도감 데이터를 호출하고 필요한 데이터를 화면에 마운트 하는 간단한 카드 리스트 페이지 입니다.`,
    },
]