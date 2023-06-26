import "./App.css";
import { useEffect, useState } from "react";
export default function App() {
  const [leftColor, setLeftColor] = useState("#fff700");
  const [rightColor, setRightColor] = useState("#ff0000");
  const [gradientType, setGradientType] = useState("linear");
  const [notes, setNotes] = useState("");

  const getNotes = () => {
    let savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  };

  const saveNotes = () => {
    localStorage.setItem("notes", notes);
  };

  const handleNotes = (event) => {
    setNotes(event.target.value);

    saveNotes();
  };

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

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="App">
      <div
        className="container"
        style={{
          background:
            gradientType === "radial"
              ? `radial-gradient(${leftColor} , ${rightColor})`
              : `linear-gradient(to right, ${leftColor} , ${rightColor})`,
          height: "89vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <>
          {/* Button trigger modal */}
          <button
            type="button"
            className="control profile-button btn btn-primary position-absolute top-0 end-0 mt-5"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            ❤
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable border-0">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 p-3" id="exampleModalLabel">
                    Favourites : <br />
                    Copy and paste your fav gradient / colour(s) here!
                  </h1>

                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 p-3"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <textarea
                    value={notes}
                    onChange={handleNotes}
                    class="area p-2"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    onClick={saveNotes}
                    type="button"
                    className="btn btn-dark w-25"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>

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
