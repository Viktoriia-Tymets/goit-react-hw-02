export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <>
      <button className={css.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
    </>
  );
}
