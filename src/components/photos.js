import React from "react";
import dog1 from "./images/dog1.jpg";
import cat from "./images/cat.jpg";
import dog2 from "./images/dog2.jpg";
import cat2 from "./images/cat2.jpeg";
import "./css/photos.css";

function Photos() {
  return (
    <div className="container-fluid Photos">
      <div className="row">
        <div className="col">
          <img src={cat} alt="cat" />
        </div>
        <div className="col">
          <img src={cat2} alt="large cat" />
        </div>
        <div className="col">
          <img src={dog2} alt="small dog" />
        </div>

        <div className="col">
          <img src={dog1} alt="large dog" />
        </div>
      </div>
    </div>
  );
}

export default Photos;
