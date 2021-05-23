function SearchForm() {
  return (
    <div classname="card">
      <div classname="card-body">
        <h5 classname="card-title">Book Search</h5>
        <form className="d-flex flex-column">
          <div className="form-group">
            <label htmlFor="search">Book</label>
            <input type="text" className="form-control" id="search" />
          </div>
          <button className="btn btn-primary ml-auto">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
