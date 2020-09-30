import React from "react";
import ReactDOM from "react-dom";
import "./SubDropdown.css";

export class SubDropdown extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.selectedPiece = "";

        this.subs = [
            <option value="None">None</option>,
            <option value="Rook">Rook</option>,
            <option value="Bishop">Bishop</option>,
            <option value="Knight">Knight</option>,
            <option value="Queen">Queen</option>
        ];  
    }

    handleChange(e) {
        this.selectedPiece = e.target.value;
        this.props.togleSub(this.props.piece, this.selectedPiece)
    }

    render() {

        if (this.props.newReplacement != null 
         && this.props.piece !== this.props.newReplacement 
         && this.props.newReplaced === this.selectedPiece)
              this.selectedPiece = <option value="None">None</option>;

        return (
            <select id="subs" onChange={this.handleChange} className="new-game-sub-dropdown" value={this.selectedPiece}>
                {this.subs}
            </select>
        );
    }
}

export let test = () => ReactDOM.render(<SubDropdown piece="Duke" />, document.getElementById('root'));