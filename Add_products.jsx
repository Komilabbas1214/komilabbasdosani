import React from "react";

function Add_products() {
  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow">

            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Add Product</h4>
            </div>

            <div className="card-body">

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    Product Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Category
                  </label>

                  <select className="form-select">
                    <option>Select Category</option>
                    <option>Electronics</option>
                    <option>Fashion</option>
                    <option>Shoes</option>
                    <option>Accessories</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Product Price
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Product Price"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Product Description
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter Product Description"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Product Image URL
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Image URL"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success"
                >
                  Add Product
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Add_products;