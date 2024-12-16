import { useQuiz } from '../context/QuizContext';

export default function FinishScreen() {
  const { points, maxPoints, highScore, dispatch } = useQuiz();
  const perc = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> points out of {maxPoints}! (
        {Math.ceil(perc)}%)
      </p>
      <p className="highscore">(High Score: {highScore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Reset the game
      </button>
    </>
  );
}
