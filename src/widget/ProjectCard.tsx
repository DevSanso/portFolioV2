import React,{Children, Component} from 'react';

import '@assets/css/widget/project-card.css';


interface Props {
    img : string,
    url : string | null,
    skills : Array<string>,
    children : string
}

class SkillBox extends Component<{text : string,color : string}> {
    public render() {
        return (
            <span className="project-card-widget-skill-box" style={{backgroundColor : this.props.color}}>{this.props.text}</span>
        );
    }
}

class ProjectCardWidget extends Component<Props> {
    public constructor(props : Props) {
        super(props);
    }
    public renderSkillBoxs = () => {
        const list = this.props.skills;
        const color = ["#FFE6E6","#FF8C8C","#34B3F1","#FAC213"];
        let colorIndex = 0;

        let setColorIndex = (index:number) => colorIndex = index %5;
        return list.map(value => {
            let c = colorIndex;
            setColorIndex(c+1);
            return (<SkillBox color={color[c]} text={value} />);
        });
    };
    private makeOnClick = () => {
        if(this.props.url != null) 
            return () => {location.href=this.props.url as string};
        
        return () => {};
    };
    private makeClassName = () => this.props.url == null ? "is-url-none" : "is-url";
    

    public render() {
        return (
            <div widget-project-card="" className={this.makeClassName()} >
                <header>
                    <img src={this.props.img}></img>
                    <span onClick={this.makeOnClick()}>{this.props.children}</span>
                </header>
                <section>
                    {this.renderSkillBoxs()}
                </section>
            </div>
        );
    }
}


export default ProjectCardWidget;