import { Component } from "react";
import { Section } from "./Components/Section";
import { Statisticks } from "./Components/Statisticks";
import { FeedbackOptions } from "./Components/FeedbackOptions";
import Notification from "./Components/Notification";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (ev) => {
    if(ev.target.className === 'Good'){
      this.setState({good: this.state.good + 1})
    }else if(ev.target.className === 'Neutral'){
      this.setState({neutral: this.state.neutral + 1})
    }else if(ev.target.className === 'Bad'){
      this.setState({bad: this.state.bad + 1})
    }
  }

  onClick = () => {
    this.setState({good: 20})
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    const total = good + neutral + bad;
    return total;
  }
  
  countPositiveFeedbackPercentage = () => {
    const positiveFeedbacks = 100 / this.countTotalFeedback() * this.state.good;
    return positiveFeedbacks.toFixed(1);
  }

  options = ['Good', 'Neutral', 'Bad']

  render(){
    const {good, neutral, bad} = this.state
    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackOptions options={this.options} onLeaveFeedback={this.onLeaveFeedback} />
          {good === 0 && neutral === 0 && bad === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statisticks good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
          )}
      </>
    );
  }
  
}

export default App;
