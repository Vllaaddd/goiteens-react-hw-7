import { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export class FeedbackOptions extends Component{
    render(){
        return(
            <Wrapper>
                {this.props.options && this.props.options.map(option => (
                    <button onClick={this.props.onLeaveFeedback} key={option} className={option}>{option}</button>
                ))}
            </Wrapper>
        )
    }
}