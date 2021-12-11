// @flow
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./homepage.css";

export const HOMEPAGE = () => {
  React.useEffect(function () {
    var lefttext = document.getElementById("lefttext");
    setTimeout(() => {
      //lefttext.setAttribute("data-aos",'fade-down')
    }, 800);
  });

  return (
    <div id="homepage" className="item">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6  text-center item" id="lefttext">
            <h1 data-aos="fade-up" data-aos-delay="1400">
              Go <span>paperless</span> and keep important documents alongside
              your notes.
            </h1>
            <h5 data-aos="fade-up" data-aos-delay="1800">Scandocs is a digital document-keeping app using which you can add all your documents.</h5>
          </div>
        </div>
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="2400">
          <div className="col-md-4 d-flex justify-content-center">
            <div class="animatearrow">
              <div class="chevron"></div>
              <div class="chevron"></div>
              <div class="chevron"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
