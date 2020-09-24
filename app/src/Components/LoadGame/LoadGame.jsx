import React from "react";
import {SelectGame} from "./SelectGame";
import { Redirect } from "react-router-dom";
import { getGames } from "../../API/getGames";
import {initEmptyRanges} from "../../apiHelpers/initEmptyRanges";
import {offsetStrsToList} from "../../apiHelpers/offsetStrsToList";
import {parseData} from "../../apiHelpers/parseData";
import "./LoadGame.css";


export class LoadGame extends React.Component {

    constructor(props) {
        super(props)
        this.state = {gameName: "none", loaded:false, reload: 0}
        this.council = false;
        this.selected = false;
        this.dataEntry = null; 
        this.pieceDefs = null;
        this.games = null;
        this.gameList = [<option value="choose">Loading...</option>];
        this.load = this.load.bind(this);
        this.changeName = this.changeName.bind(this);

    }

  componentDidMount() {

    document.body.className = "load-game-body";

    this.gameList = [<option value="choose">Choose...</option>];
    getGames().then( ([games]) => {
      if (games)
          this.games = games
        else
          this.games = {}

        for (var name of Object.keys(this.games)) {
          this.gameList.push(<option value={name}>{name}</option>)
        }

        this.setState({gameName: "none", loaded: false, reload: ! this.state.reload});
    });

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

    load() {
          this.gameData = this.games[this.state.gameName];
          this.gameData['defs'] = initEmptyRanges(this.gameData['defs'])
          this.gameData['defs'] = offsetStrsToList(this.gameData['defs'])
          this.gameData = parseData(this.gameData)
          this.setState({loaded: true});
    }

  render() {

    if (this.state.loaded === false) {
      return <SelectGame handleChange={this.changeName} 
                         games={this.gameList} 
                         selected={this.selected} 
                         load={this.load} />
    }

    else {

      return (<Redirect to={{
                pathname:"/LoadGame/Play",
                state: {currentPage:"/LoadGame/Play",
                        gameName:JSON.parse(JSON.stringify(this.state.gameName)),
                        gameType:JSON.parse(JSON.stringify(this.gameData['type'])),
                        playerType:JSON.parse(JSON.stringify(this.gameData['pt'])),
                        gameData:JSON.parse(JSON.stringify(this.gameData))
                      }     
              }}/>);
    }
    /** 
     * note: the pieceDefs attribute passed as seperate prop because NewGame passes it is a seperate prop
     * because pieceDefs is not the same for every new game data, it is defined by the user.   
     */
  }
  
}

export default LoadGame;
