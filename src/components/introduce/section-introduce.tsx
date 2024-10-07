import React, { useEffect } from 'react';
import {CompSectionTitle} from '../'
import AOS from 'aos';

export const SectionIntroduce = () =>{
    
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return(
        <div id="src-intro" className="section-intro">
            <CompSectionTitle txtDash="Introduce" txtNom="Me" />
            <div className="wrap">
                <p className="itr-tit" data-aos="fade-up">Take constantly, and keep striving continuously.</p>
                <p className="itr-txt" data-aos="fade-up">
                    저는 항상 프로젝트를 진행할 때 책임감을 가장 중요한 덕목으로 여깁니다.<br/>
                    책임감은 스스로를 채찍질하여 좋은 퀄리티의 결과물을 만들어내고 팀원과의 원활한 커뮤니케이션과 조율을 이끌어낼 수 있는 최고의 아드레날린이라 생각하기 때문입니다.<br/>
                    그렇기에 프로젝트가 종료된 후, 훗날 향상된 실력을 가진 제가 과거를 뒤돌아 보았을 때 부끄럽지 않은 모습으로 보일 수 있도록 책임감을 가지고 업무에 임하고 있습니다. <br/><br/>

                    또한 단순 마크업만 해내는 퍼블리셔가 아닌 상향된 기술력을 갖춘 사람이 되고싶습니다. <br/>
                    아무것도 반응하지 않는 단순한 웹페이지보다 제가 의도한 대로 움직이며 데이터를 출력해내는 동적요소가 포함된 결과물을 만드는 과정의 즐거움과 결과물을 보고 느끼는 희열을 알고 있습니다. <br/>
                    이는 저를 끊임없이 정진할 수 있도록 이끌어주는 도파민이 되어줍니다.<br/>                    
                    현재는 React를 숙련중이며 언젠가 프론트 엔지니어로 프로젝트에 참여할 수 있을만큼 실력을 향상시키고자 노력중입니다.<br/>
                </p>
            </div>
        </div>
    )
}