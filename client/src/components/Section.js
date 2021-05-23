function Section({ title, children }) {
  return (
    <div classname="card">
      <div classname="card-body">
        <h2 classname="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Section;
