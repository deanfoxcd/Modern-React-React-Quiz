export default function FinishScreen({ points, maxPoints }) {
  const perc = (points / maxPoints) * 100;

  return (
    <p className="result">
      You scored <strong>{points}</strong> points out of {maxPoints}! (
      {Math.ceil(perc)}%)
    </p>
  );
}
