import React from "react";
import "../css/SaveGame.css";

export class SaveGame extends React.Component {

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
    }
 
    save() {
        this.props.updateSpecialCase("saving");
        this.props.update();
        this.props.save();
        this.props.updateSpecialCase("save-success");
        this.props.update();
    }

    render() {
        return (
            <div className="save-game" onClick={this.save}>
                <div className="label">
                    Save
                </div>
                <div className="button">
                    <img src="/Images/floppyd.svg" style={{height:"40px"}} />
                </div>
            </div>
        )
    }
}