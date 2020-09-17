import React from "react";
import { getColorName } from "../../helpers/getColorName";
import { HelpComponent } from "../../Help/HelpComponent";
import "../css/SaveResignTool.css";

export class SaveResignTool extends React.Component {

    constructor(props) {
        super(props);
        this.state = {saveHighlighted: false, resignHighlighted: false, saveAsHighlighted: false, isHelpModal: false};
        this.saveImg = null;
        this.saveAsImg = null;
        this.resignImg = null;
        this.gameDescriptionHelpText = "In order: The name of the game, and in parentheses the type of game, and what the player is playing as.";
        this.save = this.save.bind(this);
        this.openSaveAs = this.openSaveAs.bind(this);
        this.highlightSaveIcon = this.highlightSaveIcon.bind(this);
        this.unhighlightSaveIcon  = this.unhighlightSaveIcon.bind(this);
        this.highlightResignIcon  = this.highlightResignIcon.bind(this);
        this.unhighlightResignIcon = this.unhighlightResignIcon.bind(this);
        this.highlightSaveAsIcon = this.highlightSaveAsIcon.bind(this);
        this.unhighlightSaveAsIcon = this.unhighlightSaveAsIcon.bind(this);
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
        this.setState({saveHighlighted: true})
    }

    unhighlightSaveIcon() {
        this.setState({saveHighlighted: false})
    }

    highlightSaveAsIcon() {
        this.setState({saveAsHighlighted: true})
    }

    unhighlightSaveAsIcon() {
        this.setState({saveAsHighlighted: false})
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

        if (this.state.saveAsHighlighted)
            this.saveAsImg = "/Images/save-as-72e2ff.svg";
        else
            this.saveAsImg = "/Images/save-as-b1faae.svg";


        return (
            <div className="save-resign-tool">
                <div className="game-description">
                    <div className="game-name">
                        {this.props.gameName}
                    </div> 
                    <div className="gen-info">
                        ({this.props.gameType}, {getColorName(this.props.playerType)})
                    </div> 
                    {<HelpComponent helpTitle="Game Description" 
                                    helpText={this.gameDescriptionHelpText} 
                                    hmChildName="none" 
                                    setHelpText={this.props.setHelpText} 
                                    togleHelpModal={this.props.togleHelpModal} 
                                    style={{position:"absolute",
                                            left: 185,
                                            top: 5,
                                            width: 8,
                                            height: 8}}
                                    highlighted="/Images/question-mark-72e2ff.svg"
                                    normal="/Images/question-mark-b1faae.svg"
                                    color="#72e2ff"
                                />}
                </div>
                <div className="save-game-container">
                    <img src={this.saveImg} className="save-resign-img" onClick={this.save} onMouseEnter={this.highlightSaveIcon} onMouseLeave={this.unhighlightSaveIcon} alt="save icon" />
                </div>
                <div className="save-as-container">
                <img src={this.saveAsImg} className="save-resign-img" onClick={this.openSaveAs} onMouseEnter={this.highlightSaveAsIcon} onMouseLeave={this.unhighlightSaveAsIcon} alt="save icon" />
                </div>
                <div className="resign-container">
                    <img src={this.resignImg} className="save-resign-img" onClick={this.props.resign} onMouseEnter={this.highlightResignIcon} onMouseLeave={this.unhighlightResignIcon} alt="resign icon"  />
                </div>
            </div>
        );
    }
}