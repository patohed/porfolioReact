import React from "react";
import "./Progress.css";

const Progress = () => {
    function mostrar () { 
        console.log('estoi haciendo click')
    }

  return (
    <div className="container row col-1" id="progress">
    <h5 className="titleDos">Skills Bar</h5>
      <div className="container-skills">
        <span className="titleDos">HTML</span>
        <div className="barra-html">
          <span className="skill-per html">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>
      <div className="container-skills">
        <span className="titleDos">JavaScript</span>
        <div className="barra-html">
          <span className="skill-per js">
            <span className="tooltip">35%</span>
          </span>
        </div>
      </div>
      <div className="container-skills">
        <span className="titleDos">CSS</span>
        <div className="barra-html">
          <span className="skill-per css">
            <a className="tooltip">50%</a>
          </span>
        </div>
      </div>
      <div className="container-skills">
        <span className="titleDos">React</span>
        <div className="barra-html">
          <span className="skill-per react">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
      <div className="container-skills">
        <span className="titleDos">NodeJS</span>
        <div className="barra-html">
          <span className="skill-per nodejs">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
    </div>

  );
};

export { Progress };
