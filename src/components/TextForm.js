import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText= text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success");

    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success");

    }

    const RemoveSpaces = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Space Removed","success");

    }

    const ClearText = ()=>{
        let newText=""
        setText(newText);
        props.showAlert("Text Cleared","success");
        
    }
    const SentenceCase = ()=>{
        let arr= text.split(".");
        const res=arr.map((word)=>{
            return word.charAt(0).toUpperCase()+word.slice(1);
        })
        setText(res.join("."));
    }

    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    // text="jgdsjg" wrong way to change the text in react
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>
        <div className="mb-3">
            <h3>{props.heading}</h3>
            <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"#13466e":"white",color: props.mode==='dark'?"white":"#042743"}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-0 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={RemoveSpaces}>Remove Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-0" onClick={ClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={SentenceCase}>SentenceCase</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
