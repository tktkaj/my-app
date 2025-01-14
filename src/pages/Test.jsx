import React, { useState } from "react";

function Test() {
  let [y, setY] = useState("-200px");

  const slideUp = () => {
    if (y === "0px") {
      setY("-200px");
    } else {
      setY("0px");
    }
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <button style={{ cursor: "pointer" }} onClick={slideUp}>
        click
      </button>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          height: "600px",
          alignItems: "center",
          position: "relative",
          backgroundColor: "blue",
          overflowY: "hidden",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "red",
            position: "absolute",
            zIndex: "1040",
            bottom: y,
            transition: "0.8s ease",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Test;
