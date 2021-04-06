import React, { Component, useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {
    const [renderBall, setRenderBall] = useState(false);
    const [posi, setPosi] = useState(0);
    const [ballPosition, setBallPosition] = useState({ left: 0, top: 0 })
    
    const keyListener=(event)=>{ //once DOM loaded attach  event listener
        switch(event.keyCode){
            case 39:
                setPosi({
                    left: ballPosition.left+5,
                    top: ballPosition.top,
                })
            break;
            case 40:
                setPosi({
                    left: ballPosition.left,
                    top: ballPosition.top+5,
                })
            break;
            case 37:
                setPosi({
                    left: ballPosition.left-5,
                    top: ballPosition.top,
                })
            break;
            case 38:
                setPosi({
                    left: ballPosition.left,
                    top: ballPosition.top-5,
                })
            break;
            default:
            break;
        }
        setBallPosition(posi);
    };
 
    const buttonClickHandler = () => {
        setRenderBall(true);
    }
    const renderBallOrButton = () => {
        if (renderBall) {
            return <div className="ball" style={{
                left: ballPosition.left + "px",
                top: ballPosition.top + "px",
                position: "absolute",
            }}></div>
        } else {
            return <button onClick={buttonClickHandler} >Click For One Ball</button>
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown",keyListener);
        return ()=>{
            document.removeEventListener("keydown",keyListener);
        }
    },[ballPosition])

    return (
        <div className="playground">
            {renderBallOrButton()}
        </div>
    )

}


export default App;
