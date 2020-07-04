import React from "react";
import "../css/Save.css";

export class SaveButton extends React.Component {

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
    }
 
    save() {
        this.props.updateSpecialCase("saving")
        this.props.save();
        this.props.updateSpecialCase("save-success");
    }

    render() {
        return (
            <div className="save-button" onClick={this.save}>
                Save
            </div>
        )
    }
}