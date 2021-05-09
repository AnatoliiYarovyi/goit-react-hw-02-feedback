import React, { Component } from "react";
import style from "./App.module.css";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";

class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  goodIncrement = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badIncrement = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = (good * 100) / total;
    return Math.round(positiveFeedbackPercentage);
  }
  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={style.conteiner}>
        <Section title="Please leave feedback">
          <Statistics
            onGoodIncrement={this.goodIncrement}
            onNeutralIncrement={this.neutralIncrement}
            onBadIncrement={this.badIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <FeedbackOptions
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
