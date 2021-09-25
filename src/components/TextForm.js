import React, { useState } from 'react'

export default function TextForm() {

    const [text,setText] = useState("");

    const handleOnChange = (e) =>{
        setText(e.target.value)
    }

    const handleUpper = () =>{

        const newText = text.toUpperCase();
        setText(newText) 
    }
    const handleLower = () =>{

        const newText = text.toLowerCase();
        setText(newText) 
    }

    const handleClear = () =>{
        setText("")
    }

    return (
        <>
        <div className="container">
            <div className="container my-3">
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Enter your Text Here</label>
                        <textarea className="form-control" onChange={handleOnChange} value = {text} id="text" rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary mx-1" onClick={handleUpper}>To Upper Case</button>
                    <button className="btn btn-primary mx-1" onClick={handleLower}>To Lower Case</button>
                    <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
