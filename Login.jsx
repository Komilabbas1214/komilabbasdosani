import React from "react";

function Login() {
  return (
    <div className="container-fluid bg-light">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-5 col-lg-4">

          <div className="card shadow-lg border-0">

            <div className="card-body p-5">

              <div className="text-center mb-4">
                <h1 className="fw-bold text-primary">
                  Admin Panel
                </h1>

                <h4>Welcome Back!</h4>

                <p className="text-muted">
                  Please sign in to continue
                </p>
              </div>

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                    />
                    Remember Me
                  </div>

                  <a href="#" className="text-decoration-none">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Sign In
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;