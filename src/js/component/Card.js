import React from "react";
import ReactDOM from "react-dom";

function Card() {
    return(
        <div className="card" style={{width: "18rem"}}>
  <img src="https://placehold.it/500x325" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Card title</h5>
    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary d-flex justify-content-center">Go somewhere</a>
  </div>
</div>
    )
};

export default Card;
// export default function App() {
//     return <div className="App">{Array(3).fill(<Card />)}</div>;
// }