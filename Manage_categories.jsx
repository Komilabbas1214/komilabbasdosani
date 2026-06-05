import React from "react";

function Manage_categories() {

  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Electronic Products"
    },
    {
      id: 2,
      name: "Fashion",
      description: "Fashion Products"
    },
    {
      id: 3,
      name: "Shoes",
      description: "All Types Of Shoes"
    }
  ];

  return (
    <div className="container py-5">

      <h2 className="mb-4">
        Manage Categories
      </h2>

      <div className="card shadow">

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">

              <tr>
                <th>ID</th>
                <th>Category Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {categories.map((cat) => (
                <tr key={cat.id}>

                  <td>{cat.id}</td>

                  <td>{cat.name}</td>

                  <td>{cat.description}</td>

                  <td>

                    <button className="btn btn-warning btn-sm me-2">
                      Edit
                    </button>

                    <button className="btn btn-danger btn-sm">
                      Delete
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Manage_categories;