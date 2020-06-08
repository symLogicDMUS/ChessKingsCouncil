
import React from "react";
import {PickType} from "./PageComponents/PickType/PickType";
import {PickName} from "./PageComponents/PickName/PickName";
import {GameRoot} from "../GameRoot/GameRoot";
// import "./NewGame.css";


export class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.dataDict = this.props.dataDict;
        this.state = {gameType: "none", gameName: "none", gameData:"none"}
        this.setType = this.setType.bind(this)
        this.setName = this.setName.bind(this)
        this.setData = this.setData.bind(this)
    }
    setType(type) {
        this.setState({gameType: type})
    }
    setName(name) {
        this.setState({gameName: name})
    }
    setData() {
        this.setState({gameData: this.dataDict[this.state.gameName]})
    }

    addRecord() {
        switch(this.state.gameType) {
            case "standard":
                this.dataDict[this.state.gameName] = this.dataDict["New"]
                this.setData();
                break;
            case "custom":
                this.dataDict[this.state.gameName] = this.dataDict["NewCustom"]
                this.setData();
                break;
            case "council":
                this.dataDict[this.state.gameName] = this.dataDict["NewCouncil"]
                this.setData();
                break;
            default:
                console.log("ERROR! invalid game type!")
                break;
        }
    }

    render() {

        if (this.state.gameType === "none") {
            return(
                <PickType setType={this.setType} />
            );    
        }

        else if (this.state.gameName === "none") {
            return <PickName setName={this.setName} />
        }

        else if (this.state.gameData === "none") {
            this.addRecord()
            return <GameRoot data={this.dataDict[this.state.gameName]} />
        }

        else {
            return <GameRoot data={this.dataDict[this.state.gameName]} />
        }
    }
}

export default NewGame;

