import React from "react";

function Add_categories() {
  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Add Category</h4>
            </div>

            <div className="card-body">

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    Category Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category Name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Category Description
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter Category Description"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Category Image URL
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Image URL"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success"
                >
                  Add Category
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Add_categories;