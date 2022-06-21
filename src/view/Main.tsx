import React,{ Component,CSSProperties } from "react";

import '@assets/css/view/main.css';
import data from '@assets/json/main.json';

class MainView extends Component {
    private emptyDivCss : CSSProperties = {
        width : "100%",
        marginTop : "30px",
        marginBottom : "30px"
    };


    public render() {
        return (
            <div  data-aos="fade-down" view-main="">
                <section>
                    <p data-aos="fade-right"
                        data-aos-duration="1000"
                        className="title">{data.title}</p>
                    <p data-aos="fade-left"
                        data-aos-duration="1500"
                        className="name">{`${data.name} 입니다`}</p>
                    <div style={this.emptyDivCss}></div>
                    <footer data-aos="fade-left"
                        data-aos-duration="2000">
                        <p className="text">{data.text}</p>
                    </footer>
                </section>
            </div>
        );
    }
}


export default MainView;