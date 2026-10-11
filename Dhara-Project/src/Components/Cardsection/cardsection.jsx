import react from "react";
import "./cardsection.css";


const Cardsection = () => {
  return (
    <>
      <div className="cardsection">
        <div className="card-container">
          <div className="col-lg-12">
            {/* <Card /> */}
            <div className="row d-flex  flex-column">
              <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                <div className="col-lg-3">
                  <p>image</p>
                </div>
                <div className="col-lg-3">
                  <p>image</p>
                </div>
                <div className="col-lg-3">
                  <p>image</p>
                </div>
                <div className="col-lg-3">
                  <p>image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cardsection;

