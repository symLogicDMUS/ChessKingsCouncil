import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { getImgDict } from "../../../../API/getImgDict";
import { deleteImg } from "../../../../API/deleteImg";
import { getSetSampleImgs } from "../../../helpers/getSampleImgs";
import { filterStandardPieces } from "../../../helpers/filterStandardPieces";
import { ImgGrid } from "../../../Reuseables/ImgGrid";
import "../../../styles/Scrollbar.scss";
import { styles } from "./ChooseModal.jss";
import { Close } from "../../../Reuseables/Close";
import { fontSize001685 as fontSize } from "../../../styles/fontSize.jss";
import Box from "@material-ui/core/Box";
import {MuiCheckbox} from "../../../Reuseables/MuiCheckbox";

class ChooseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bValue: false, imgNameChoice: null };
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
            this.setState({ imgNameChoice: null });
        });
    }

    submitChoice(imgNameChoice) {
        this.props.setPieceImg(this.props.color, this.imgDict[imgNameChoice]);
        this.props.closeAll();
    }

    setChoice(imgNameChoice) {
        if (this.state.imgNameChoice === imgNameChoice) {
            this.setState({ imgNameChoice: null });
        } else {
            this.setState({ imgNameChoice: imgNameChoice });
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
                        defaultChecked={false}
                        confirmDeleteMessage={`Are you sure you want to delete image ${this.state.imgNameChoice}?`}
                        onOkClick={() =>
                            this.submitChoice(this.state.imgNameChoice)
                        }
                        onDeleteClick={() =>
                            this.deleteImg(this.state.imgNameChoice)
                        }
                        topFlexbox={
                            <Close
                                theme={this.props.theme}
                                onClick={this.props.closeAll}
                                style={{
                                    fontSize: fontSize,
                                    width: "2em",
                                    height: "2em",
                                }}
                            />
                        }
                        theme={this.props.theme}
                        screenCase={this.props.screenCase}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ChooseModal);
