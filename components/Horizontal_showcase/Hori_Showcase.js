import React, { Component } from 'react'

export default class Hori_Showcase extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const props = this.props;

        if(props.direction=="l_to_r"){
            return (
                <div className="horizontal_showcase l_to_r">

                    <div className="showcase_img_container"> <img src={props.img_link}/></div>
                    <div className="case_des" style={{color:props.color}}>
                        <div className="case_title">{props.title}</div>
                        {props.line?<div style={{backgroundColor:props.bgColor}} className="line"></div>:<div></div>}
                        <div className="case_text">{props.text}</div>
                    </div>
                </div>
            )
        }else if(props.direction=="r_to_l"){
            return(
                <div className="horizontal_showcase r_to_l">
                    <div className="showcase_img_container"> <img src={props.img_link}/></div>
                    <div className="case_des" style={{color:props.color}}>
                        <div className="case_title">{props.title}</div>
                        {props.line?<div style={{backgroundColor:props.bgColor}} className="line"></div>:<div></div>}
                        <div className="case_text">{props.text}</div>
                    </div>
                </div>
            )
        }


    }
}
