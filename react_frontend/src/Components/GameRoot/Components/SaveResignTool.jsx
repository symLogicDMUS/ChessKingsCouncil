import React from "react";
import "../css/SaveResignTool.css";

export class SaveResignTool extends React.Component {

    constructor(props) {
        super(props);
        this.state = {saveHighlighted: false, resignHighlighted: false};
        this.saveImg = null;
        this.resignImg = null;
        this.save = this.save.bind(this);
        this.highlightSaveIcon = this.highlightSaveIcon.bind(this)
        this.unhighlightSaveIcon  = this.unhighlightSaveIcon.bind(this)
        this.highlightResignIcon  = this.highlightResignIcon.bind(this)
        this.unhighlightResignIcon = this.unhighlightResignIcon.bind(this)
    }

    save() {
        this.props.updateSpecialCase("saving");
        this.props.update();
        this.props.save();
        this.props.updateSpecialCase("save-success");
        this.props.update();
    }

    highlightSaveIcon() {
        this.setState({saveHighlighted: true})
    }

    unhighlightSaveIcon() {
        this.setState({saveHighlighted: false})
    }


    highlightResignIcon() {
        this.setState({resignHighlighted: true})
    }

    unhighlightResignIcon() {
        this.setState({resignHighlighted: false})
    }


    render() {

        if (this.state.saveHighlighted)
            this.saveImg = "/Images/save-72e2ff.svg";
        else
            this.saveImg = "/Images/save-b1faae.svg";

        if (this.state.resignHighlighted)
            this.resignImg = "/Images/resign-game-72e2ff.svg";
        else
            this.resignImg = "/Images/resign-game-b1faae.svg";

        return (
            <div className="save-resign-tool">
                <div className="save-game-container">
                    <img src={this.saveImg} className="save-resign-img" onClick={this.save} onMouseEnter={this.highlightSaveIcon} onMouseLeave={this.unhighlightSaveIcon} alt="save icon" />
                </div>
                <div className="resign-container">
                    <img src={this.resignImg} className="save-resign-img" onClick={this.props.resign} onMouseEnter={this.highlightResignIcon} onMouseLeave={this.unhighlightResignIcon} alt="resign icon"  />
                </div>
            </div>
        );
    }
}