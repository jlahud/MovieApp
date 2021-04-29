import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white border-bottom shadow row align-items-center">
      <div className="col">
        <a className="navbar-brand ml-5">
          <img
            style={{ width: "120px", height: "80px" }}
            src="/assets/img/logo1.png"
            alt="MovieApp"
          />
        </a>
      </div>
      <div className="col">
        <h2 className="text-center text-dark">Welcome to MovieApp</h2>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Navbar;
