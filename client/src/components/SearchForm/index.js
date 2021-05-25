import Section from "../Section.js";

function SearchForm({ search, onSearchChange, onSubmit, booksLoading }) {
  return (
    <Section title="Book Search">
      <form className="d-flex flex-column" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="search">Book</label>
          <input
            type="text"
            className="form-control"
            id="search"
            value={search}
            onChange={onSearchChange}
            disabled={booksLoading}
          />
        </div>
        <button className="btn btn-primary ml-auto" disabled={booksLoading}>
          Search
        </button>
      </form>
    </Section>
  );
}

export default SearchForm;
