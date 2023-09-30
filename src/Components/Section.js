import { Component } from "react";
import styled from "styled-components";

export class Section extends Component{

    render(){
        return(
            <h1>{this.props.title}</h1>
            
        )
    }
}