import React from "react";
import ReactDOM from "react-dom";
import {AiDisplay} from "./AiDisplay";
import {DisplayBoard} from "./DisplayBoard";
import {PiecesBoard} from "./PiecesBoard";
import {oneMove, piece_defs, id_dict} from "./oneMove";
import "./TestAi.css";


export class TestAi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {aiDisplay: true};
        this.board = this.props.board;
        this.aiStart = this.props.response['ai_start'];
        this.aiDest = this.props.response['ai_dest'];
        this.responseBoard = this.props.response['response_board'];
        this.updateAiDisplay = this.updateAiDisplay.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
    }

    componentDidMount() {
        document.body.className = "test-ai-body";
    }

    updateAiDisplay(boolVal) {
        this.setState({aiDisplay: boolVal})
    }

    updateBoard() {
        this.board = this.responseBoard;
    }

    render() {
        /**
         * DisplayBoard contains green and white squares, PiecesBoard contains pieces, and Ai board is layer highlighted Ai moves
         */

        return (
            <div>
                {this.state.aiDisplay && (<AiDisplay aiStart={this.aiStart} 
                                                     aiDest={this.aiDest} 
                                                     updateAiDisplay={this.updateAiDisplay} 
                                                     updateBoard={this.updateBoard} 
                />)}
                <PiecesBoard  board={this.board} idDict={id_dict} pieceDefs={piece_defs}/>
                <DisplayBoard />
            </div>
        )
    }
}

async function callBackend() {
    let response = await fetch('/update', {
                                method: "POST",
                                body:JSON.stringify({"board":oneMove['board'],
                                                     "records":oneMove['records'],
                                                     "color":oneMove['color'],
                                                     "ai_color":"B",
                                                     "defs":{"id_dict":id_dict, "piece_defs":piece_defs}
        })
    })
    let json_response = await response.json();
    return json_response;
}

function setAiMove() {
    return Promise.all([callBackend()]);
}

export let test = () => setAiMove().then(([json_response]) => {
    ReactDOM.render(<TestAi board={oneMove['board']} response={json_response} />, document.getElementById('root'));
})

