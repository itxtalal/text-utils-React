import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpper = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLower = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = ()=>{
      navigator.clipboard.writeText(text);
  }
  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <div
        className="p-0 container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="container my-3">
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Enter your Text Here
            </label>
            <textarea
              className="form-control"
              onChange={handleOnChange}
              value={text}
              id="text"
              rows="8"
              style={{
                backgroundColor: props.mode === "dark" ? "#082036" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpper}>
            To Upper Case
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLower}>
            To Lower Case
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>
            Clear Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
            Copy Text
          </button>
        </div>
      </div>
      <div
        className=" container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text area above to preview it here"}
        </p>
      </div>
    </>
  );
}
