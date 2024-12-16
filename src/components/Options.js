import { useQuiz } from '../context/QuizContext';

export default function Options({ question }) {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <>
      <div className="options">
        {question.options.map((o, i) => (
          <button
            className={`btn btn-option ${i === answer ? 'answer' : ''} ${
              hasAnswered
                ? i === question.correctOption
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
            key={o}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: 'newAnswer', payload: i })}
          >
            {o}
          </button>
        ))}
      </div>
      <div></div>
    </>
  );
}
