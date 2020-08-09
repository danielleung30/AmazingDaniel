import React, { Component } from 'react'
import Link from 'next/link';

import PropTypes from 'prop-types'


export class MenuItem extends Component {

    constructor(props){
        super(props);
        
    }

    render() {
        
        if(this.props.submenu.length<1){
            return (

                <div className="menuItem">
                    <Link href={this.props.link}><a>{this.props.item_name}</a></Link>
                    </div>                
                )
        }else{

            const submenu = this.props.submenu;
            return (
                
                <div className="menuItem">{this.props.item_name}
                <div className="subMenu">
                    {submenu.map((item)=>(
                       <div key={item.item_name} className="subMenuItem"><Link href={item.link}><a>{item.item_name}</a></Link></div> 
                    ))}
                </div>
            </div>
                )
        }

    }
}

export default MenuItem
