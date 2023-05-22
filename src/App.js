import "./App.css";
import { useState } from "react";
export default function App() {
  const [leftColor, setLeftColor] = useState("#fff700");
  const [rightColor, setRightColor] = useState("#ff0000");

  const [radialGradient, setRadialGradient] = useState(
    `radial-gradient(${leftColor} , ${rightColor})`
  );
  const [linearGradient, setLinearGradient] = useState(
    `linear-gradient(to right , ${leftColor} , ${rightColor})`
  );
  const [gradientType, setGradientType] = useState("radial");

  const copyCode = () => {
    navigator.clipboard.writeText(
      `linear-gradient(to right, ${leftColor} , ${rightColor})`
    );
  };

  return (
    <div className="App">
      <div
        className="container"
        style={{
          background:
            gradientType === "radial" ? radialGradient : linearGradient,
          height: "90vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="left-color">
          <input
            value={leftColor}
            onChange={(event) => {
              console.log(event.target.value);
              setLeftColor(event.target.value);
              setLinearGradient(
                `linear-gradient(to right, ${leftColor} , ${rightColor})`
              );
              setRadialGradient(
                `raidal-gradient(${leftColor} , ${rightColor})`
              );
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

        <div className="right-color">
          <input
            value={rightColor}
            onChange={(event) => {
              setRightColor(event.target.value);
              setLinearGradient(
                `linear-gradient(to right, ${leftColor} , ${rightColor})`
              );
              setRadialGradient(
                `raidal-gradient(${leftColor} , ${rightColor})`
              );
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
          onClick={() => {
            setGradientType("linear");
          }}
        >
          Linear Gradient
        </button>
        <button onClick={copyCode}> Copy Gradient code </button>
        <button
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
