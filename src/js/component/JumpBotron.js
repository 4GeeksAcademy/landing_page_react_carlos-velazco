import React from "react";
import ReactDOM from "react-dom";

function JumpBotron() {
  return(
    <div className="jumbotron mx-auto pb-5" style= {{backgroundColor: "#e3f2fd"}}>
  <h1 className="display-4 fw-bold">A Warm Welcome!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
  )
};
export default JumpBotron;