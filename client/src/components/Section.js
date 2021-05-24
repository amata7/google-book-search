function Section({ title, children }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Section;
