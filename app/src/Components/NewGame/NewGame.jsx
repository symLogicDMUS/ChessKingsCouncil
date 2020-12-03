import React from "react";
import { Redirect } from "react-router-dom";
import Customize from "./Customize/Customize";
import {GameOptions} from "./GameOptions/GameOptions";
import { firstUpdate } from "../../apiHelpers/firstUpdate";
import { newData, new_standard_ranges, enemyRanges, standard_id_dict, standard_piece_defs, standard_promo_names } from "./NewData";
import { styles } from "./NewGame.jss";
import {copy} from "../helpers/copy";
import {availHeight} from "../helpers/windowMeasurments";

/**
 * NewGame selects what CreatPiece created, then sends it to the backend which
 * assigns ids to piece-names for pieces the player chose for that game. the
 * id:piece-Name arrangement is unique to that game, and is stored in game-Name.defs
 * in the game's folder.
 */
class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { step: "set-options", gameName: "", gameType: "", playerType: "", theme:"dark" };
        this.gameData = {};
        this.setGameOptions = this.setGameOptions.bind(this);
        this.loadNewStandard = this.loadNewStandard.bind(this);
        this.loadNewCustom = this.loadNewCustom.bind(this);
    }

    componentDidMount() {
        document.body.className = "new-game-body";
    }

    setGameOptions(gameName, gameType, playerType) {
        const nextStep = (gameType === 'customize') ? "load-new-custom" : 'load-new-standard'
        this.setState({gameName: gameName, gameType: gameType, playerType: playerType, set: nextStep})
    }

    /**
     * first declare the data we don't need then backend for, then get rest of data from backend.
     *
     * load the data for new-game but then change the idDict to
     * one chosen by customise. note: unlike loadNewCouncil and
     * loadNewStandard, loadNewCustom is called from child.
     *
     * 1. set data that is same for any new game
     * 2. set what the player will play as: W, B, or test
     * 4. set data that is unique to this game.
     * 5. format the data that backend needs together into an object.
     * 6. get the starting ranges for our custom new game from the backend, then update state
     */
    loadNewCustom(idDict, defs, promos) {
        this.gameData = copy(newData) //1.
        this.gameData["game_name"] = this.state.gameName;
        this.gameData["type"] = this.state.gameType;
        this.gameData["pt"] = this.state.playerType
        this.gameData["promos"] = promos; //4.
        this.gameData["id_dict"] = idDict; //4.

        this.gameData["piece_defs"] = {}; //4.
        let name;
        for (const id of Object.keys(idDict)) {
            if (id !== "k" && id !== "p") {
                name = idDict[id];
                this.gameData["piece_defs"][name] = defs[name]; //4.
            }
        }

        const dataEntry = firstUpdate(
            this.gameData["board"],
            this.gameData["json_records"],
            "W",
            this.gameData["pt"],
            this.gameData["piece_defs"],
            this.gameData["id_dict"]
        );
        this.gameData["ranges"] = dataEntry["ranges"];
        this.gameData["enemy_ranges"] = dataEntry["enemy_ranges"];

        this.setState({ step: "play-game" });
    }

    loadNewStandard() {
        this.gameData = copy(newData);
        this.gameData["game_name"] = this.gameName;
        this.gameData["pt"] = this.state.playerType;
        this.gameData["type"] = this.state.gameType;
        this.gameData["promos"] = copy(standard_promo_names);
        this.gameData["id_dict"] = copy(standard_id_dict);
        this.gameData["piece_defs"] = copy(standard_piece_defs);
        this.gameData["ranges"] = copy(new_standard_ranges);
        this.gameData["enemy_ranges"] = copy(enemyRanges);
        if (this.gameType === "council") this.gameData.promos.push("King");
        this.setState({ step: "play-game" });
    }

    play() {
        return (
            <Redirect
                to={{
                    pathname: "/NewGame/Play",
                    state: {
                        currentPath: "/NewGame/Play",
                        gameName: copy(this.state.gameName),
                        gameType: copy(this.state.gameType),
                        playerType: copy(this.state.playerType),
                        gameData: copy(this.gameData),
                    },
                }}
            />
        );
    }

    render() {
        return (
            <>
                {this.state.step === 'set-options' && <GameOptions setGameOptions={this.setGameOptions} fontSize={availHeight() * 0.13} />}
                {this.state.step === "load-new-custom" && <Customize loadNewCustom={this.loadNewCustom} theme={this.state.theme} />}
                {this.state.step === "load-new-standard" && this.loadNewStandard()}
                {this.state.step === "play-game" && this.play()}
            </>
        );
    }
}

export default NewGame;
