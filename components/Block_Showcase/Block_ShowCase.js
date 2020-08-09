import React, { Component } from 'react'
import Block from './Block';



export default class Block_ShowCase extends Component {

    constructor(props){
        super(props);
        
    }

    render() {
        const props = this.props;

        const blocks = this.props.blocks;


        if(props.direction=="b_to_t"){
            return (
                <div className="block_showcase b_to_t">

                    <div className="blocks_container">
                        {blocks.map((item,index)=>(
                            <Block key={index} img_link={item.img_link} title={item.title} text={item.text}/>
                        ))}
                    
                    </div>
                    
                    
                    <div className="case_des" style={{color:props.color}}>
                        <div className="case_title">{props.title}</div>
                        {props.line?<div style={{backgroundColor:props.bgColor}} className="line"></div>:<div></div>}
                        
                    </div>
                </div>
            )
        }else{
            
            return(
                <div className="block_showcase t_to_b">
                <div className="blocks_container">
                    
                {blocks.map((item,index)=>(
                            <Block key={index} img_link={item.img_link} title={item.title} text={item.text}/>
                ))}
                </div>
                
                <div className="case_des" style={{color:props.color}}>
                    <div className="case_title">{props.title}</div>
                    {props.line?<div style={{backgroundColor:props.bgColor}} className="line"></div>:<div></div>}
                </div>
            </div>
            )

        }
    }
}
