import React, { Component } from 'react'
import './Button.css';
export default class Button extends Component {

    state={
        disabled:false,
        button : "enabled"
    }

    disablebutton = ()=>{

        this.setState({
            disabled:true,
            button: "disabled"
        })

        setTimeout(()=>{
            this.setState({disabled:false , button: "enabled"})
        },5000)
    }
    render() {
        return (
            <div>
                <h1>Button {this.state.button}</h1>
             
                <button disabled={this.state.disabled} onClick={this.disablebutton}><h1>CLICK HERE</h1></button>
            </div>
        )
    }
}
