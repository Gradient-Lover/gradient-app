import "./App.css";
import { useState } from "react";
export default function App() {
  const [leftColor, setLeftColor] = useState("#fff700");
  const [rightColor, setRightColor] = useState("#ff0000");
  const [gradientType, setGradientType] = useState("linear");

  const copyCode = () => {
    if (gradientType == "linear") {
      navigator.clipboard.writeText(
        `linear-gradient(to right, ${leftColor} , ${rightColor})`
      );
    } else {
      navigator.clipboard.writeText(
        `radial-gradient(${leftColor} , ${rightColor})`
      );
    }
  };

  return (
    <div className="App">
      <div
        className="container"
        style={{
          background:
            gradientType === "radial"
              ? `radial-gradient(${leftColor} , ${rightColor})`
              : `linear-gradient(to right, ${leftColor} , ${rightColor})`,
          height: "90vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="left-color color-input">
          <input
            value={leftColor}
            onChange={(event) => {
              console.log(event.target.value);
              setLeftColor(event.target.value);
            }}
            type="color"
          />
          <div className="color" style={{ backgroundColor: "white" }}>
            <span>{leftColor}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(leftColor);
              }}
              class="clip"
            >
              📋
            </button>
          </div>
        </div>

        <div className="right-color color-input">
          <input
            value={rightColor}
            onChange={(event) => {
              setRightColor(event.target.value);
            }}
            type="color"
          />

          <div className="color" style={{ backgroundColor: "white" }}>
            {" "}
            <span>{rightColor}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(rightColor);
              }}
              class="clip"
            >
              📋
            </button>{" "}
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }} className="panel">
        <button
          className="control"
          onClick={() => {
            setGradientType("linear");
          }}
        >
          Linear Gradient
        </button>
        <button className="control" onClick={copyCode}>
          {" "}
          Copy Gradient code{" "}
        </button>
        <button
          className="control"
          onClick={() => {
            setGradientType("radial");
          }}
        >
          Radial Gradient
        </button>
      </div>
    </div>
  );
}
