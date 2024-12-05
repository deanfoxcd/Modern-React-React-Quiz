export default function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  // if (index < numQuestions - 1)
  //   return (
  //     <button
  //       className="btn btn-ui"
  //       onClick={() => dispatch({ type: 'nextQuestion' })}
  //     >
  //       Next
  //     </button>
  //   );

  // if (index === numQuestions - 1)
  //   return (
  //     <button
  //       className="btn btn-ui"
  //       onClick={() => dispatch({ type: 'finish' })}
  //     >
  //       Finish
  //     </button>
  //   );

  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        index < numQuestions - 1
          ? dispatch({ type: 'nextQuestion' })
          : dispatch({ type: 'finish' });
      }}
    >
      {index < numQuestions - 1 ? 'Next' : 'Finish'}
    </button>
  );
}
