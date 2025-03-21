import { useState, useEffect } from "react";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification";

const getInitialFeedback = () => {
  const savedFeedback = localStorage.getItem("feedback");
  return savedFeedback
    ? JSON.parse(savedFeedback)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

export default function App() {
  const [feedback, setFeedback] = useState(() => getInitialFeedback());

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <h2>
        Please leave your feedback about our service by selecting one of the
        options below.
      </h2>
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
