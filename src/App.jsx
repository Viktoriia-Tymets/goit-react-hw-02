import { useState, useEffect } from "react";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

export default function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(initialFeedback);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = good + neutral + bad;

  const positiveFeedback = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;
  return (
    <div className={css.container}>
      <h1 className={css.main - text}>Sip Happens Café</h1>
      <h2 className={css.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </h2>
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
