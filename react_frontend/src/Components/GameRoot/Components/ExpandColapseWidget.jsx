import React from "react";

export class ExpandColapseWidget extends React.Component {

    constructor(props) {
        super(props);
        this.position = {
            position:"absolute",
            width: "20px", 
            height:"20px", 
            top:"12px", 
            left:"162px"};
        this.togleExpand = this.togleExpand.bind(this);
    }

    togleExpand() {
        this.props.togleExpand()
    }


    render() {
        return(
        <div style={this.position} onClick={this.togleExpand}>
            <img src={this.props.imgName} style={{width:"20px", height:"20px", cursor:"pointer"}} />
        </div>
        )
    }
}