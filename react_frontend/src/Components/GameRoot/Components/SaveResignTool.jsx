import React from "react";
import "../css/SaveResignTool.css";

export class SaveResignTool extends React.Component {

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
        this.resign = this.resign.bind(this);
    }

    save() {
        this.props.updateSpecialCase("saving");
        this.props.update();
        this.props.save();
        this.props.updateSpecialCase("save-success");
        this.props.update();
    }

    resign() {
        console.log("not yet implemented");
        return;
    }

    render() {
        return (
            <div className="save-resign-tool">
                <div className="save-game-container">
                    <img src="/Images/save-game.svg" className="save-resign-img" onClick={this.save} />
                </div>
                <div className="resign-container">
                    <img src="/Images/resign-game.svg" className="save-resign-img" onClick={this.resign}  />
                </div>
            </div>
        );
    }
}