import React, { Component } from 'react'

export default class Block extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return (
            <div className="block_container">
                <img src={props.img_link}/>
                {
                    props.title?
                    <div className="case_des" style={{color:props.color}}>
                    <div className="case_title">{props.title}</div>
                    <div className="case_text">{props.text}</div>
                    </div>
                    :
                    <div></div>
                }

            </div>
        )
    }
}
