import React from "react";

function Admin() {
  return (
    <div className="container py-5">

      <h2 className="text-center mb-5">
        Admin Dashboard
      </h2>

      <div className="row g-4">

        {/* Categories */}
        <div className="col-md-3">
          <div className="card shadow border-0 text-center">
            <div className="card-body">
              <h1>10</h1>
              <h5>Total Categories</h5>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-md-3">
          <div className="card shadow border-0 text-center">
            <div className="card-body">
              <h1>50</h1>
              <h5>Total Products</h5>
            </div>
          </div>
        </div>

        {/* Customers */}
        <div className="col-md-3">
          <div className="card shadow border-0 text-center">
            <div className="card-body">
              <h1>100</h1>
              <h5>Total Customers</h5>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="col-md-3">
          <div className="card shadow border-0 text-center">
            <div className="card-body">
              <h1>75</h1>
              <h5>Total Orders</h5>
            </div>
          </div>
        </div>

      </div>

      {/* Revenue Card */}
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card shadow border-0 text-center">
            <div className="card-body">
              <h1>₹25,000</h1>
              <h4>Total Revenue</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card shadow border-0 mt-5">
        <div className="card-header">
          <h4 className="mb-0">Recent Activities</h4>
        </div>

        <div className="card-body">
          <ul className="list-group">

            <li className="list-group-item">
              New Product Added
            </li>

            <li className="list-group-item">
              New Category Created
            </li>

            <li className="list-group-item">
              Customer Registered
            </li>

            <li className="list-group-item">
              New Order Received
            </li>

          </ul>
        </div>
      </div>

    </div>
  );
}

export default Admin;