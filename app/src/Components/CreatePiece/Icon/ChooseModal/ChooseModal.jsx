import React from "react";
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import PanoramaIcon from "@material-ui/icons/Panorama";
import {getImgDict} from "../../../../API/getImgDict";
import {deleteImg} from "../../../../API/deleteImg";
import {getSetSampleImgs} from "../../../helpers/getSampleImgs";
import {filterStandardPieces} from "../../../helpers/filterStandardPieces";
import {fontSize001725} from "../../../styles/fontSizes.jss";
import {Close} from "../../../Reuseables/Close";
import {ImgGrid} from "../../../Reuseables/ImgGrid/ImgGrid";
import "../../../styles/Scrollbar.scss";
import {styles} from "./ChooseModal.jss";
import {appBarHeight} from "../../../Reuseables/PersistentDrawer.jss";
import MediaQuery from "react-responsive/src";

class ChooseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bValue: false, imgNameChoice: null};
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
            this.setState({bValue: !this.state.bValue});
        });
    }

    deleteImg(imgNameChoice) {
        deleteImg(imgNameChoice).then(([r]) => {
            this.props.resetImg(this.imgDict[imgNameChoice]);
            delete this.imgDict[imgNameChoice];
            this.setState({imgNameChoice: null});
        });
    }

    submitChoice(imgNameChoice) {
        this.props.setPieceImg(this.props.color, this.imgDict[imgNameChoice]);
        this.props.closeAll();
    }

    setChoice(imgNameChoice) {
        if (this.state.imgNameChoice === imgNameChoice) {
            this.setState({imgNameChoice: null});
        } else {
            this.setState({imgNameChoice: imgNameChoice});
        }
    }

    render() {
        return (
            <div className={`scrollbar-${this.props.theme}`}>
                <div className={this.props.classes.modal}>
                    <MediaQuery minDeviceHeight={768}>
                        <ImgGrid
                            title={
                                <>
                                    <Typography className={this.props.classes.title}>Images</Typography>
                                    <PanoramaIcon className={this.props.classes.title_icon} size="large"/>
                                </>
                            }
                            imgDict={this.imgDict}
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
                                        fontSize: fontSize001725,
                                        width: "2em",
                                        height: "2em",
                                    }}
                                />
                            }
                            theme={this.props.theme}
                            screenCase={this.props.screenCase}
                        />
                    </MediaQuery>
                    <MediaQuery maxDeviceHeight={767}>
                        <ImgGrid
                            title={
                                <>
                                    <Typography className={this.props.classes.title}>Images</Typography>
                                    <PanoramaIcon className={this.props.classes.title_icon} size="large"/>
                                </>
                            }
                            rootStyle={{marginTop: appBarHeight}}
                            imgNameChoice={this.state.imgNameChoice}
                            imgDict={this.imgDict}
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
                                        fontSize: fontSize001725,
                                        width: "2em",
                                        height: "2em",
                                    }}
                                />
                            }
                            theme={this.props.theme}
                            screenCase={this.props.screenCase}
                        />
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ChooseModal);
