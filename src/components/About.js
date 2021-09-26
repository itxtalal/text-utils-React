import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "#082036" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h2 className="my-3">About us</h2>
      <div
        className="accordion"
        id="accordionExample"
        style={{
          backgroundColor: props.mode === "dark" ? "#082036" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#082036" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Analyze your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "dark" ? "#082036" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#082036" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#082036" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "#082036" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Free to Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "dark" ? "#082036" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#082036" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#082036" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2
            className="accordion-header"
            id="headingThree"
            style={{
              backgroundColor: props.mode === "dark" ? "#082036" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "dark" ? "#082036" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#082036" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
