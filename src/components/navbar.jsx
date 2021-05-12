import React, { Component } from "react";
//sfc ile stateless functional component ile class yerine oluşturulup çağrılır
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
