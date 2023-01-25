import React from "react";
function About() {
  return (
    <div
      className="Certification container-fluid container-lg py-5 px-4  px-md-5 "
      id="certification"
    >
      <div className="row ">
        <div className="col ">
          <div className="certificationHeading">
            <h4 className="text-success d-inline morocoCountingFont">02. </h4>
            <h2 className="text-secondary d-inline">Certifications</h2>
            <div className="vl border-top border-2 border-primary d-inline-block"></div>
          </div>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-12 col-md-6">
          <div className="px-md-2 rounded">
            <img
              src={require("../assets/wmdCertificate.png")}
              alt="Ahmad"
              className="img image-fluid px-md-2 certificationsImages"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 pt-md-0 pt-3">
          <div className="rounded">
            <img
              src={require("../assets/jsCertificate.jpg")}
              alt="Ahmad"
              className="img image-fluid px-md-2 certificationsImages"
              style={{paddingTop: "5px"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
