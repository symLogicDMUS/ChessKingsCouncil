import React from "react";
import "./UploadButton.css";


export class UploadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bValue: true}
        this.imgStr = null;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        const files = event.target.files;
        const currentFile = files[0];
        const myFileItemReader = new FileReader();

        myFileItemReader.addEventListener(
            "load", 
            () => {
                this.imgStr = myFileItemReader.result;
                const imgStr = this.imgStr;
                this.imgStr = null;
                this.props.setUnsaved(true);
                this.props.setPieceImg(this.props.color, imgStr);
                //this.setState({bValue: ! this.state.bValue}) 
            }, 
            false
        );

        myFileItemReader.readAsDataURL(currentFile);
        
    }

    render() {

        // if (this.props.currentIconColor) {
            return(
                <div>
                    <label htmlFor="choose-img" className={`${this.props.color}-upload`}>
                        Upload...
                    </label>
                    <input id="choose-img" type="file" onChange={this.handleChange} style={{display: "none"}} />
                </div>
            )            
        // }

    //     else {
    //         return (
    //             <button className={`${this.props.color}-upload`} onClick={this.props.setCurrentIconColor}>
    //                 Upload...
    //             </button>
    //         )
    //     }
    }
}