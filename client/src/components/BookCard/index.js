function BookCard({ title, authors, description, image, link }) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-3">
          <img src={image} alt={`thumbnail of ${title}`} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{authors.join(", ")}</p>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-end">
              <a
                href={link}
                className="btn btn-info mr-3"
                rel="noopener noreferrer"
                target="_blank"
              >
                View
              </a>
              <button className="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
