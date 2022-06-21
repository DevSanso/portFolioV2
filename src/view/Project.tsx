import React,{ Component,CSSProperties, useDebugValue } from "react";

import ProjectCardWidget from '@app/widget/ProjectCard';

import "@assets/css/view/project.css";

import projectData from "@assets/json/project.json";

const imageCard = require("@assets/img/icon/material-card.png");
const imageClock = require("@assets/img/icon/material-clock.png");
const imageComment = require("@assets/img/icon/material-comment.png");
const imagePost = require("@assets/img/icon/material-post.png");
const imageToy = require("@assets/img/icon/material-toy.png");
const imageBook = require("@assets/img/icon/material-book.png");

const icon = {
    "Crawling Youtube Comment" : imageComment,
    "StorageTransWord" : imageBook,
    "toss payment module" : imageCard,
    "Blog" : imagePost,
    "Rapi" : imageClock,
    "PortFolio" : imagePost
} as Record<string,string>;

const projectKeys = [
    "Crawling Youtube Comment",
    "StorageTransWord",
    "toss payment module" ,
    "Blog",
    "Rapi",
    "PortFolio"
] 


interface jsonType {
    comment : string
    skill : Array<string>
    url : string | null
}
type jsonFileType  = {
    [key : string] : jsonType
}

class ProjectView extends Component {
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
            <div data-aos="fade-down" view-project="">
               <header>토이프로젝트</header>
               <section>
                    {this.renderChild()}
               </section>
            </div>
        );
    }
}


export default ProjectView;