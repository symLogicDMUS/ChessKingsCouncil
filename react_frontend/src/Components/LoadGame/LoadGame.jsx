import React from "react";
import "../../../Images/Misc/parchment button.svg";
import "./LoadGame.css";
import {SelectGame} from "./SelectGame";
import GameRoot from "../GameRoot/GameRoot";
import { Redirect, Link } from "react-router-dom";


export class LoadGame extends React.Component {

  constructor(props) {
    super(props)
    this.state = {gameName: "none", loaded:false, reload: 0}
    this.selected = false; //refrenced by child
    this.dataEntry = "-"; //Entry in game data dict
    this.pieceDefs = "-";
    this.changeName = this.changeName.bind(this);
    this.load = this.load.bind(this);
    this.setGames();
  }

  componentDidMount() {
    document.body.className = "load-game-body";
  }

  componentDidUpdate(prevProps) {
    if (this.props.gameNames !== prevProps.gameNames) {
      this.setGames();
      this.setState({gameName: "none", loaded: false, reload: ! this.state.reload})
    }
  }

  changeName(name) {
    if (name === "choose") {
      this.selected = false; //refrenced by child
      this.setState({gameName: "none"})
    }
    else {
      this.selected = true; //referenced by child
      this.setState({gameName: name});
    }
  }

  setGames() {
    this.games = [<option value="choose">Choose...</option>];
    this.props.gameNames.forEach(name => {
      this.games.push(<option value={name}>{name}</option>)
    })
  }

  load() {
    this.dataEntry = this.props.getGame(this.state.gameName);
    this.setState({loaded: true});
  }

  render() {

    if (this.state.loaded === false) {
      return <SelectGame handleChange={this.changeName} 
                         games={this.games} 
                         selected={this.selected} 
                         load={this.load} />
    }

    //need "isCouncil" flag.
    else {
      //return <GameRoot gameName={this.state.gameName} dataEntry={this.dataEntry} />
      return (<Redirect to={{
                pathname:"/LoadGame/Play",
                state: {gameName: this.gameName, 
                        dataEntry:this.dataDict[this.gameName], 
                        isCouncil:false}
        }} />);
    }

    //note: the rangeDefs attribute passed as seperate prop because NewGame passes it is a seperate prop
    //because rangeDefs is not the same for every new game data, it is defined by the user.   

  }
  
}



export default LoadGame;
