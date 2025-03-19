export default function Feedback({
  initialFeedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <p>Good: {initialFeedback.good}</p>
      <p>Neutral: {initialFeedback.neutral}</p>
      <p>Bad: {initialFeedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedback} </p>
    </div>
  );
}
