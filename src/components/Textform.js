import React, { useState } from "react";

export default function Textform(props) {
const handleOnChange=(evt)=>{
    console.log("change")
    setText(evt.target.value);
}

    const handleUpClick=()=>{
console.log("click")
let newText = text.toUpperCase();
setText(newText);
props.showAlert("Converted to uppercase", "success")
    }

    const handleCamClick=()=>{
      console.log("click")
      let newText = text.toLocaleLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "success")
          }

    const clearText=()=>{
      let newText = "";
      setText(newText);
      props.showAlert("TextBox is empty", "success")
    }

    const removeSpaces=()=>{
      let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const copyText=()=>{
      navigator.clipboard.writeText(text); 
      props.showAlert("Copied to Clipboard!", "success");
    }
      

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
      <h2 className="my-3">{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1" value={text}
          rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#b4abab':'white'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={handleCamClick}>Convert to LocaleLowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={clearText}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={removeSpaces}>Remove extra spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={copyText}>Copy text</button>

    </div>
    <div className="container my-4" style={{color: props.mode==='dark'? 'white':'black'}}>
      <h2>Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Charcters</p>
      <h4 className="my-3">Text Preview</h4>
      <p>{text.length>0?text:"Nothing To Preview"}</p>
    </div>
    </>

  );
}

