function BookCard({ book }) {
  const { title, authors, description, imageLinks, infoLink } = book.volumeInfo;
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-3">
          <img src={imageLinks.thumbnail} alt={`thumbnail of ${title}`} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{authors.join(", ")}</p>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-end">
              <a
                href={infoLink}
                class="btn btn-info mr-3"
                rel="noopener noreferrer"
                target="_blank"
              >
                View
              </a>
              <button class="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
