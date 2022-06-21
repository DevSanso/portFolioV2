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
            <div view-main="">
                <section>
                    <p className="title">{data.title}</p>
                    <p className="name">{`${data.name} 입니다`}</p>
                    <div style={this.emptyDivCss}></div>
                    <footer>
                        <p className="text">{data.text}</p>
                    </footer>
                </section>
            </div>
        );
    }
}


export default MainView;