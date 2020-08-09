import React, { Component } from 'react'

export default class Vertical_Showcase extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const props = this.props;

        if(props.direction=="b_to_t"){
            return (
                <div className="vertical_showcase b_to_t">

                    <div className="showcase_img_container"> <img src={props.img_link}/></div>
                    <div className="case_des" style={{color:props.color}}>
                        <div className="case_title">{props.title}</div>
                        {props.line?<div style={{backgroundColor:props.bgColor}} className="line"></div>:<div></div>}
                        <div className="case_text">{props.text}</div>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="vertical_showcase">

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
