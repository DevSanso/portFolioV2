import React,{useState,CSSProperties, MouseEvent} from 'react';


import '@assets/css/widget/change-box.css';
import arrowImg  from "@assets/img/material_arrow_down.png";

interface Props {
    width? : string
    height? : string
    children : Array<JSX.Element>
}


const ChangeBoxComponent = (props : Props) => {
    if(props.children.length == 0)
        throw "Scroll Component children count is zero";
    const boxWidth = (w? : string) : string => w != undefined? w : "100%";
    const boxHeight = (h? : string) : string => h != undefined? h : "100%";

    const elementArray = props.children;
    const [current,setCurrent] = useState(0);

    const styleProps : CSSProperties = {
        width : boxWidth(props.width),
        height : boxHeight(props.height)
    };

    const isOver =(val : number) => val >= elementArray.length;

    const renderChildOne = () => (<section>{elementArray[current]}</section>);
    const changeViewAction = () => {
        isOver(current+1) ? setCurrent(0) : setCurrent(current + 1);
    };
    return (
        <div widget-change-box="" style={styleProps}>
           {renderChildOne()}
            <nav>
                <div onClick={changeViewAction}>
                    <img width="100%" height="100%" src={arrowImg}/>
                </div>
            </nav>
        </div>
    )
};


export default ChangeBoxComponent ;

