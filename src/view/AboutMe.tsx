import React,{Component} from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import '@assets/css/view/about-me.css';
const profile = require("@assets/img/profile.jpg");




class AboutMeView extends Component {
    public render() {
        return (
            <div view-about-me="">
                <h3 className="view-about-me_title">저는 이러한 사람입니다.</h3>
                <header>
                    <img src={profile}></img>
                    <div>
                        <p className="view-about-me_p">안성근</p>
                        <p className="view-about-me_p">4년제 컴퓨터소프트웨어 공학 입학</p>
                    </div>
                </header>
                <section>
                    <h3 className="view-about-me_title">성격에 대한 이야기</h3>
                    <SimpleBar style={{maxHeight:"100px"}}>
                        <p className="view-about-me_p">
                            저는 늘 궁금한것이 있으면 그것에 열중하며 무언가를 알아가고 싶은 호기심을 가지고 있습니다.
                            허나 이것때문에 막 프로그래밍을 입문하면 시절에는 호기심을 해결하고자 효율적으로 자료를 찾아가는 방법을 몰랐기에,
                            모르는 것을 알기위해 지금 당장 해야하는일도 잊어먹고 몇시간 혹은 며칠을 궁금증에 인력과 시간을 허비하는날이 많았습니다. 
                            그렇기에 대학교를 입학하면서 호기심으로 인해 지금 당장 해결할 일을 해결 못하는 상황을 방지하기 위해 문제해결의 호기심 그리고 그외의 호기심간의 우선순위를 두며 해길할 일을 우선적으로 해결하면서
                            해결을 위한 자료를 효율적으로 찾아가는 법을 배워갔습니다. 그렇게 지금의 저는 프로그래밍의 문제해결을 예전보다 빠르게 해결하며,이제까지 많지 않으면서도 많은 프로그래밍 지식을 배웠지만 늘
                            보다 나은 코드를 작성하는 방식에 대한 호기심을 잃지 않는 삶을 살아가고있습니다. 
                        </p>
                    </SimpleBar>
                    <h3 className="view-about-me_title">개발자로써</h3>
                    <SimpleBar style={{maxHeight:"70px"}}>
                        <p className="view-about-me_p">
                            2016년부터 지금까지 C,C++,Java,Python등 여러 언어들과 프레임워크를 통하여 프로그래밍에 대해 알아갔으며,
                            유튜브 영상 시청, 구글링 그리고 독서를 통하여  백엔드 위주 공부를 하고있으며 
                            타입스크립트, 러스트 ,코틀린등을 사용하며 토이프로젝트를 진행해가면서 프로그래밍 기술들을 배우고 있는 신입 개발자 입니다.
                        </p>
                    </SimpleBar>
                </section>
            </div>
        )
    }
}



export default AboutMeView;