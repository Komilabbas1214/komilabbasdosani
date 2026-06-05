import React from "react";

function Manage_customers() {
  return (
    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Customers</h2>
      </div>

      <div className="card shadow border-0">

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle">

              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>1</td>

                  <td>
                    <img
                      src="https://via.placeholder.com/50"
                      alt=""
                      className="rounded-circle"
                    />
                  </td>

                  <td>John Doe</td>
                  <td>john@gmail.com</td>
                  <td>9876543210</td>

                  <td>
                    <span className="badge bg-success">
                      Active
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-warning btn-sm me-2">
                      Edit
                    </button>

                    <button className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>

                  <td>
                    <img
                      src="https://via.placeholder.com/50"
                      alt=""
                      className="rounded-circle"
                    />
                  </td>

                  <td>Jane Smith</td>
                  <td>jane@gmail.com</td>
                  <td>9999999999</td>

                  <td>
                    <span className="badge bg-success">
                      Active
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-warning btn-sm me-2">
                      Edit
                    </button>

                    <button className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Manage_customers;