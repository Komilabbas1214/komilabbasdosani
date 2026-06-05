import React from "react";

function Manage_products() {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 1999,
      image: "https://via.placeholder.com/80"
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 2999,
      image: "https://via.placeholder.com/80"
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Shoes",
      price: 2499,
      image: "https://via.placeholder.com/80"
    }
  ];

  return (
    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Products</h2>

        <button className="btn btn-success">
          Add New Product
        </button>
      </div>

      <div className="card shadow">

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle">

              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {products.map((product) => (
                  <tr key={product.id}>

                    <td>{product.id}</td>

                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        width="60"
                        height="60"
                        className="rounded"
                      />
                    </td>

                    <td>{product.name}</td>

                    <td>{product.category}</td>

                    <td>₹{product.price}</td>

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

    </div>
  );
}

export default Manage_products;