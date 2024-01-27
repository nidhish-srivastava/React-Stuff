import React, { useEffect, useState } from "react";
import "./Carousel2.css";

const Carousel2 = () => {
  const [state, setState] = useState(0);
  let box = document.querySelector(".product-container");

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  const stateUpdate = () => {
    console.log("Check");
    setState(state + 1);
  };
  useEffect(() => {
    stateUpdate(); //* UseEffect is being used coz it makes a render(side process) when the document mounts,during this render,client width null error will be removed
  }, []);
  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <div className="product-container">
        <Mycard cardno="1" />
        <Mycard cardno="2" />
        <Mycard cardno="3" />
        <Mycard cardno="4" />
        <Mycard cardno="5" />
        <Mycard cardno="6" />
        <Mycard cardno="7" />
        <Mycard cardno="8" />
        <Mycard cardno="9" />
        <Mycard cardno="10" />
        <Mycard cardno="11" />
        <Mycard cardno="12" />
        <Mycard cardno="13" />
      </div>
    </div>
  );
};

export default Carousel2;

const Mycard = (props) => {
  return <div className="mycard">Mycard No. {props.cardno}</div>;
};
