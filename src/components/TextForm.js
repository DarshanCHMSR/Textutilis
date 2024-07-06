import React, { useState } from "react";

export default function TextForm(props) { 
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleClearText = () => {
    let newText = '';
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(Text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
        }
    }
}
  const handleCopy =()=>{
    var Text=document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
  }

  const handleExtraSpaces =()=>{
      let newText=Text.split(/[ ]+/);
      setText(newText.join(" "))
  }
  const [Text, setText] = useState("");
  return (
    <>
      <div className="container"  style={{color: props.mode === "dark"?"white":"#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark' ? "#042743" : 'white',color: props.mode === "dark"?"white":"#042743"}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Clear text
        </button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
        
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove ExtraSpaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === "dark"?"white":"#042743"}}>
        <h2>Your Text Summary</h2>
        <p>
          {Text.split(" ").length} words and {Text.length} charaters{" "}
        </p>
        <p>{0.008 * Text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  );
}
