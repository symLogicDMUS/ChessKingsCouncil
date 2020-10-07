import React from "react";
import {getImgDict} from "../../../../API/getImgDict";
import {getSampleImgs} from "../../../../apiHelpers/getSampleImgs"
import {ImgChoice} from "./ImgChoice.jsx";
import {Ok} from "./IconChooseOk";
import {SearchBar} from "./SearchBar";
import "./ChooseModal.css";

export class ChooseModal  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {imgNameChoice: null, bValue: true};
        this.imgDict = null;
        this.imgNames = null;
        this.searchText = "";
        this.closeChoose = this.closeChoose.bind(this);
        this.setChoice = this.setChoice.bind(this);
        this.submitChoice = this.submitChoice.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.showHideClassName = this.props.show ? "choose-modal display-block" : "choose display-none";
    }
   
    componentDidMount() {
        getImgDict().then( ([imgDict]) => {
            
            if (! imgDict) {
                this.imgDict = getSampleImgs()
            }
            else {
                this.imgDict = imgDict;
            }
            
            this.imgNames = Object.keys(this.imgDict)
        });
        this.setState({bValue: ! this.state.bValue});
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    closeChoose() {
        this.props.closeChoose(this.props.color);
    }
    
    setChoice(imgNameChoice) {
        if (this.state.imgNameChoice === imgNameChoice)
            this.setState({imgNameChoice: null})
        else
            this.setState({imgNameChoice: imgNameChoice})
    }

    submitChoice() {
        this.props.setUnsaved(true);
        this.props.setPieceImg(this.props.color, this.imgDict[this.state.imgNameChoice]);
    }

    applySearchFilter() {
        if (this.searchText !== "")
            return this.imgNames.filter(imgName => imgName.toLowerCase().startsWith(this.searchText));
        else
            return this.imgNames;
    }

    getImages() {
        let imageNames = this.applySearchFilter();
        let imgPrevs = [];
        imageNames.forEach(name => {imgPrevs.push(
            <ImgChoice 
              name={name} 
              base64ImgStr={this.imgDict[name]} 
              imgNameChoice={this.state.imgNameChoice} 
              setChoice={this.setChoice} 
            />
        )})
        return imgPrevs;
    }

    render() {

        this.showHideClassName = this.props.show ? "choose-modal display-block" : "choose display-none";
        
        return (
            <div className={this.showHideClassName}>
                <div className="choose-main">
                    <div className="close" onClick={this.closeChoose}>
                        <img src="/Images/close.svg" className="x" alt="close window"/>
                    </div>
                    <div className="title-div">
                        <img src="/Images/choose-icon-title.svg" className="title" alt="title of window" />
                    </div>
                    <SearchBar updateSearch={this.updateSearch} />
                    <div className="pieces-profiles">
                        {this.getImages()}
                    </div>
                    <div className="bottom-bar">
                        <Ok imgNameChoice={this.state.imgNameChoice} submitChoice={this.submitChoice} closeChoose={this.closeChoose} />
                    </div>
                </div>                
            </div>
        );    
    }
};