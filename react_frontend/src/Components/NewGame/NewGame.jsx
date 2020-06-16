
import React from "react";
import {PickType} from "./PickType/PickType";
import {PickName} from "./PickName/PickName";
import {GameRoot} from "../GameRoot/GameRoot";
import {Customize} from "./Customize/Customize"
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
    loadNewStandard() {
        //"New" is static entry
        this.dataDict[this.state.gameName] = this.dataDict["New"]
        this.setData()
    }
    loadNewCustom(dataDict) {
        this.dataDict[this.state.gameName] = dataDict;
        this.setData()
    }

    render() {

        if (this.state.gameName === "none")
            return <PickName setName={this.setName} />

        else if (this.state.gameType === "none")
            return <PickType setType={this.setType} />

        else if (this.state.gameData === "none") {

                if (this.state.gameType === "standard")
                    this.loadNewStandard()

                else if (this.state.gameType === "custom")
                    return <Customize defs={this.props.defs} loadNewCustom={this.loadNewCustom} standardNew={this.dataDict["new"]} />
                    
                else if (this.gameType === "council");
                    this.loadNewStandard() //TODO: include warning that only playing regular chess until standard is implement
        }

        else
            return <GameRoot dataEntrty={this.dataDict[this.state.gameName]} />

        
    }
}

export default NewGame;

