import React from "react";
import { getColorName } from "../../helpers/getColorName";
import "../css/SaveResignTool.scss";

export class SaveResignTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saveHighlighted: false,
            resignHighlighted: false,
            saveAsHighlighted: false,
            isHelpModal: false,
        };
        this.saveImg = null;
        this.saveAsImg = null;
        this.resignImg = null;
        this.save = this.save.bind(this);
        this.openSaveAs = this.openSaveAs.bind(this);
        this.highlightSaveIcon = this.highlightSaveIcon.bind(this);
        this.unhighlightSaveIcon = this.unhighlightSaveIcon.bind(this);
        this.highlightResignIcon = this.highlightResignIcon.bind(this);
        this.unhighlightResignIcon = this.unhighlightResignIcon.bind(this);
        this.highlightSaveAsIcon = this.highlightSaveAsIcon.bind(this);
        this.unhighlightSaveAsIcon = this.unhighlightSaveAsIcon.bind(this);
    }
    
    getStyle() {
        return {
            left: window.screen.availWidth * 0.638,
            top: window.screen.availHeight * 0.1459,
            width: window.screen.availWidth * 0.16,
            height: window.screen.availHeight * 0.16,
        };
    }

    save() {
        this.props.updateSpecialCase("saving");
        this.props.update();
        this.props.save();
        this.props.updateSpecialCase("save-success");
        this.props.update();
    }

    openSaveAs() {
        this.props.togleSaveAs(true);
        this.props.update();
    }

    highlightSaveIcon() {
        this.setState({ saveHighlighted: true });
    }

    unhighlightSaveIcon() {
        this.setState({ saveHighlighted: false });
    }

    highlightSaveAsIcon() {
        this.setState({ saveAsHighlighted: true });
    }

    unhighlightSaveAsIcon() {
        this.setState({ saveAsHighlighted: false });
    }

    highlightResignIcon() {
        this.setState({ resignHighlighted: true });
    }

    unhighlightResignIcon() {
        this.setState({ resignHighlighted: false });
    }

    render() {
        if (this.state.saveHighlighted) this.saveImg = "/Images/save/save-72e2ff.svg";
        else this.saveImg = "/Images/save/save-b1faae.svg";

        if (this.state.resignHighlighted) this.resignImg = "/Images/resign-game/resign-game-72e2ff.svg";
        else this.resignImg = "/Images/resign-game/resign-game-b1faae.svg";

        if (this.state.saveAsHighlighted) this.saveAsImg = "/Images/save-as/save-as-72e2ff.svg";
        else this.saveAsImg = "/Images/save-as/save-as-b1faae.svg";

        return (
            <div className="save-resign-tool" style={this.getStyle()}>
                <div className="game-description">
                    <div className="game-name">{this.props.gameName}</div>
                    <div className="gen-info">
                        ({this.props.gameType}, {getColorName(this.props.playerType)})
                    </div>
                </div>
                <img
                    src={this.saveImg}
                    className="save-game-container"
                    onClick={this.save}
                    onMouseEnter={this.highlightSaveIcon}
                    onMouseLeave={this.unhighlightSaveIcon}
                    alt="save icon"
                />
                <img
                    src={this.saveAsImg}
                    className="save-as-container"
                    onClick={this.openSaveAs}
                    onMouseEnter={this.highlightSaveAsIcon}
                    onMouseLeave={this.unhighlightSaveAsIcon}
                    alt="save icon"
                />
                <img
                    src={this.resignImg}
                    className="resign-container"
                    onClick={this.props.resign}
                    onMouseEnter={this.highlightResignIcon}
                    onMouseLeave={this.unhighlightResignIcon}
                    alt="resign icon"
                />
            </div>
        );
    }
}
