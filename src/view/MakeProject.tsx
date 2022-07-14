import React,{ Component,CSSProperties, useDebugValue } from "react";

import ProjectCardWidget from '@app/widget/ProjectCard';

import "@assets/css/view/make-project.css";

import projectData from "@assets/json/makeProject.json";


const imageMusic = require("@assets/img/icon/material-music.png");
const imageBlock = require("@assets/img/icon/material-block.png");


const icon = {
    "AccessRestrictionServer" : imageBlock,
    "AudioServer" : imageMusic,
} as Record<string,string>;

const projectKeys = [
    "AccessRestrictionServer",
    "AudioServer"
]; 


interface jsonType {
    comment : string
    skill : Array<string>
    url : string | null
}
type jsonFileType  = {
    [key : string] : jsonType
}

class MakeProjectView extends Component {
    private renderCard = (key : string,delay : number) => {
        const data : jsonType = (projectData as jsonFileType)[key];
        return (
            <div data-aos="fade-up-left" data-aos-duration={`${delay}`} >
                <ProjectCardWidget 
                skills={data.skill} img={icon[key]} url={data.url}>
                {`${key}-${data.comment}`}
            </ProjectCardWidget>
            </div>
        );
    };

    private renderChild = () => projectKeys.map((value,index,arr) => this.renderCard(value,1000 + 300 * index));
    

    public render() {
        return (
            <div data-aos="fade-down" view-make-project="">
               <header>토이프로젝트-제작중</header>
               <section>
                    {this.renderChild()}
               </section>
            </div>
        );
    }
}


export default MakeProjectView;