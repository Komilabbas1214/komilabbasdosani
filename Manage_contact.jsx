import React from "react";

function Manage_contacts() {
  return (
    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Contacts</h2>
      </div>

      <div className="card shadow border-0">

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle">

              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>john@gmail.com</td>
                  <td>Product Inquiry</td>
                  <td>I want more details about this product.</td>

                  <td>
                    <button className="btn btn-info btn-sm me-2">
                      View
                    </button>

                    <button className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Jane Smith</td>
                  <td>jane@gmail.com</td>
                  <td>Order Issue</td>
                  <td>My order has not been delivered yet.</td>

                  <td>
                    <button className="btn btn-info btn-sm me-2">
                      View
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

export default Manage_contacts;