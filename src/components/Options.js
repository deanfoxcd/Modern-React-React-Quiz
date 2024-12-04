export default function Options({ question }) {
  return (
    <>
      <div className="options">
        {question.options.map((o) => (
          <button className="btn btn-option" key={o}>
            {o}
          </button>
        ))}
      </div>
      <div></div>
    </>
  );
}
