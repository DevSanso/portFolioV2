import React,{Component} from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


import '@assets/css/font/roboto.css';
import '@assets/css/view/skill.css';


const mainLang = ["Java","Kotlin","Go","Typescript","Rust"];
const subLang = ["C","C++","Python","C#","Dart","Javascript"];
const framework = ["Spring Boot","React","Express","Koa","Flutter"];

class AboutMeView extends Component {

    private renderSectionElements = (eles : Array<String>) => 
        eles.map(value => (<span>{value}</span>));
    

    public render() {
        return (
            <div view-skill="">
                <SimpleBar style={{height:"100%"}}>
                    <h3 className="view-skill-h3">Skill</h3>
                    <div className="view-skill-content-container">
                        <header>메인 언어</header>
                        <section>
                            {this.renderSectionElements(mainLang)}
                        </section>
                    </div>
                    <div className="view-skill-content-container">
                        <header>서브 언어</header>
                        <section>
                            {this.renderSectionElements(subLang)}
                        </section>
                    </div>
                    <div className="view-skill-content-container">
                        <header>프레임워크</header>
                        <section>
                            {this.renderSectionElements(framework)}
                        </section>
                    </div>
                </SimpleBar>
            </div>
        )
    }
}



export default AboutMeView;