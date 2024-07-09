import React, { useState } from "react";

export default function TextForm(props) { 
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")
  };
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")
  };
  const handleClearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text has been Cleared","success")
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
   document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success")
  }

  const handleExtraSpaces =()=>{
      let newText=Text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extraspaces ","success")
  }
  const handleExtraLines =()=>{
    let newText=Text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extraspaces ","success")
}
  const handleGmail =()=>{
    let newText="www."+Text+".com";
    setText(newText);
    props.showAlert("Gmail form of the text created ","success")
  }
  const [Text, setText] = useState("");
  return (
    <>
      <div className="container"  style={{color: props.mode === "dark"?"white":props.mode1=== "grey"?"white":"#042743"}}
      >
        <h1 className="fst-italic mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' :props.mode1 === "grey"?"green":'white',color: props.mode === "dark"?"white":props.mode1=== "grey"?"white":"#042743"}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={Text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClearText}>
          Clear text
        </button>
        <button disabled={Text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
        
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy text
        </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove ExtraSpaces
        </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraLines}>
          Remove Lines
        </button>
        <button disabled={Text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleGmail}>
          Gmail form
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === "dark"?"white":props.mode1=== "grey"?"white":"#042743"}}>
        <h2>Your Text Summary</h2>
        <p>
          {Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} charaters{" "}
        </p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length+"  minutes"}</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
