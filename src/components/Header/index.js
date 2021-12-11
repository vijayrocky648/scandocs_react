import React, { useEffect } from "react";
import mainlogo from '../../../src/applogo.png'
import "bootstrap/dist/css/bootstrap.min.css";

function HEADER(props) {
  
 
  return (
    <div className="container-fluid bg-blue-100 item"  id="navbarheader">
      <div className="row">
        <div className="col-md-12">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            
          >
            <div id="images" data-aos="fade-down" data-aos-delay="50">
              <img
                title="Scandocs"
                id="Details"
                src={mainlogo}
              />
               <a className="navbar-brand headerName" href="#" id="AppName" >
              Scandocs
               </a>
            </div>
           


            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-20" data-aos="fade-down" data-aos-delay="200">
                <li className="nav-item" id="SignIn">
                <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    id="Feature"
                  >
                    SignIn
                  </a>
                </li>
                <li className="nav-item" data-aos="fade-down" data-aos-delay="600">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    id="Feature"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item" id="Contact" data-aos="fade-down" data-aos-delay="800">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Contact
                  </a>
                </li>
                
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HEADER;
