import { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start
    gap: 10px;
`

export class Statisticks extends Component{
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(
            <Wrapper>
                <p>Good: {this.props.good}</p>
                <p>Neutral: {this.props.neutral}</p>
                <p>Bad: {this.props.bad}</p>
                <p>Total: {this.props.total}</p>
                <p>Total: {this.props.positivePercentage}%</p>
            </Wrapper>
        )
    }
}