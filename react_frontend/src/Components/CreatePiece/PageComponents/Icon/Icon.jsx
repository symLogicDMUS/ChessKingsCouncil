import React from "react";
import ReactDOM from "react-dom";
import "./Icon.css"

export class Icon extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="icon-tool">
                <img src={require("./Icon.svg")} className="icon-title" />
                <img src={require("./White.svg")} className="white-title" />
                <img src={require("./Black.svg")} className="black-title" />
                <button className="black-upload"><img src={require("./Upload.svg")} style={{textAlign: "center", left:"21px", top:"7px"}} /></button>
                <button className="black-choose"><img src={require("./Choose.svg")} style={{textAlign: "center", left:"21px", top:"7px"}} /></button>
                <button className="white-upload"><img src={require("./Upload.svg")} style={{textAlign: "center", left:"21px", top:"7px"}} /></button>
                <button className="white-choose"><img src={require("./Choose.svg")} style={{textAlign: "center", left:"21px", top:"7px"}} /></button>
                <div className="white-window"></div>
                <div className="black-window"></div>
            </div>
        );
    }
}

export let test = () => ReactDOM.render(<Icon />, document.getElementById('root'))