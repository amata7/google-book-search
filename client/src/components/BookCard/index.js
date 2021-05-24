function BookCard() {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-3">
          <img
            src="http://books.google.com/books/content?id=KtrATnRZOlMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            alt="thumbnail image"
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">Start Quilting</h5>
            <p className="card-text">Alex Anderson</p>
            <p className="card-text">
              An expanded edition of the author's classic beginners' guide to
              quilting discusses equipment, fabric, tools, and techniques while
              offering patterns for six simple block quilts. Original.
            </p>
            <div className="d-flex justify-content-end">
              <a
                href="http://books.google.com/books?id=KtrATnRZOlMC&dq=quilting&hl=&source=gbs_api"
                class="btn btn-info mr-3"
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
