import React from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import { Typography } from "@material-ui/core";
import PanoramaIcon from "@material-ui/icons/Panorama";
import withStyles from "@material-ui/core/styles/withStyles";
import { deleteImg } from "../../../../API/deleteImg";
import { getImgDict } from "../../../../API/getImgDict";
import { getSetSampleImgs } from "../../../../API/getSetSampleImgs";
import { filterStandardPieces } from "../../../helpers/filterStandardPieces";
import { appBarHeight } from "../../../Reuseables/PersistentDrawer.jss";
import { fontSize001725 } from "../../../styles/fontSizes.jss";
import { ImgGrid } from "../../../Reuseables/ImgGrid/ImgGrid";
import { SearchBox } from "../../../Reuseables/SearchBox";
import { Close } from "../../../Reuseables/Close";
import "../../../styles/Scrollbar.scss";
import {styles} from "./ChooseModal.jss";

class ChooseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imgNameChoice: null, searchText: "", loaded: false };
        this.imgDict = {};
        this.deleteImg = this.deleteImg.bind(this);
        this.submitChoice = this.submitChoice.bind(this);
        this.setChoice = this.setChoice.bind(this);
        this.updateSearchText = this.updateSearchText.bind(this);
    }

    componentDidMount() {
        getImgDict().then(([imgDict]) => {
            if (!imgDict) {
                this.imgDict = getSetSampleImgs();
            } else {
                this.imgDict = imgDict;
            }
            this.imgDict = filterStandardPieces(this.imgDict);
            this.setState({ loaded: true });
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

    updateSearchText(searchText) {
        this.setState({ searchText: searchText });
    }

    render() {
        return (
            <div className={`scrollbar-${this.props.theme}`}>
                <div className={this.props.classes.modal}>
                    <MediaQuery minDeviceWidth={768}>
                        <ImgGrid
                            title={
                                <>
                                    <Box
                                        className={this.props.classes.title_box}
                                    >
                                        <Typography
                                            className={this.props.classes.title}
                                        >
                                            Images
                                        </Typography>
                                        <PanoramaIcon
                                            className={
                                                this.props.classes.title_icon
                                            }
                                            size="large"
                                        />
                                    </Box>
                                    <SearchBox
                                        updateSearchText={this.updateSearchText}
                                        theme={this.props.theme}
                                    />
                                </>
                            }
                            imgDict={this.imgDict}
                            setChoice={this.setChoice}
                            loaded={this.state.loaded}
                            defaultChecked={false}
                            searchText={this.state.searchText}
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
                    <MediaQuery maxDeviceWidth={767}>
                        <ImgGrid
                            imgDict={this.imgDict}
                            setChoice={this.setChoice}
                            imgNameChoice={this.state.imgNameChoice}
                            rootStyle={{ marginTop: appBarHeight }}
                            screenCase={this.props.screenCase}
                            theme={this.props.theme}
                            defaultChecked={false}
                            loaded={this.state.loaded}
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
                            title={
                                <>
                                    <Typography
                                        className={this.props.classes.title}
                                    >
                                        Images
                                    </Typography>
                                    <PanoramaIcon
                                        className={
                                            this.props.classes.title_icon
                                        }
                                        size="large"
                                    />
                                    <SearchBox
                                        theme={this.props.theme}
                                        updateSearchText={this.updateSearchText}
                                        style={{color: 'green'}}
                                    />
                                </>
                            }
                            confirmDeleteMessage={`Are you sure you want to delete image ${this.state.imgNameChoice}?`}
                        />
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ChooseModal);
