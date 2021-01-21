import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { getImgDict } from "../../../../API/getImgDict";
import { deleteImg } from "../../../../API/deleteImg";
import { getSetSampleImgs } from "../../../helpers/getSampleImgs";
import { filterStandardPieces } from "../../../helpers/filterStandardPieces";
import { ImgGrid } from "../../../Reuseables/ImgGrid";
import "../../../styles/Scrollbar.scss";
import { styles } from "./ChooseModal.jss";

class ChooseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bValue: false, imgNameChoice: null}
        this.imgDict = {};
        this.deleteImg = this.deleteImg.bind(this);
        this.submitChoice = this.submitChoice.bind(this);
        this.setChoice = this.setChoice.bind(this);
    }

    componentDidMount() {
        getImgDict().then(([imgDict]) => {
            if (!imgDict) {
                this.imgDict = getSetSampleImgs();
            } else {
                this.imgDict = imgDict;
            }
            this.imgDict = filterStandardPieces(this.imgDict);
            this.setState({ bValue: !this.state.bValue });
        });
    }

    deleteImg(imgNameChoice) {
        deleteImg(imgNameChoice).then(([r]) => {
            this.props.resetImg(this.imgDict[imgNameChoice]);
            delete this.imgDict[imgNameChoice];
            this.setState({imgNameChoice: null})
        });
    }

    submitChoice(imgNameChoice) {
        this.props.setPieceImg(this.props.color, this.imgDict[imgNameChoice]);
        this.props.closeAll();
    }

    setChoice(imgNameChoice) {
        if (this.state.imgNameChoice === imgNameChoice) {
            this.setState({imgNameChoice: null})
        }
        else {
            this.setState({imgNameChoice: imgNameChoice})
        }
    }

    render() {
        return (
            <div className={`scrollbar-${this.props.theme}`}>
                <div className={this.props.classes.modal}>
                    <ImgGrid
                        title="Images"
                        imgDict={this.imgDict}
                        imgNameChoice={this.state.imgNameChoice}
                        setChoice={this.setChoice}
                        onOkClick={() => this.submitChoice(this.state.imgNameChoice)}
                        onDeleteClick={() => this.deleteImg(this.state.imgNameChoice)}
                        onClose={this.props.closeAll}
                        screenCase={this.props.screenCase}
                        theme={this.props.theme}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ChooseModal);
