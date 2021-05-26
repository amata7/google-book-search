import { Link } from "react-router-dom";

function SavedCard() {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-3">
          <img src="https://place-puppy.com/200x200" alt="placeholder puppy" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">Harry Potter</h5>
            <p className="card-text">J.K. Rowling</p>
            <p className="card-text">Dude with a wand</p>
            <div className="d-flex justify-content-end">
              <Link to="/" className="btn btn-info mr-3">
                {" "}
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedCard;
