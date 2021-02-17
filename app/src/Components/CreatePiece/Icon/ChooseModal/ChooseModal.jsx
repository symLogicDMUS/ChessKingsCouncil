import React from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {Typography} from "@material-ui/core";
import PanoramaIcon from "@material-ui/icons/Panorama";
import withStyles from "@material-ui/core/styles/withStyles";
import {deleteImg} from "../../../../API/deleteImg";
import {getImgDict} from "../../../../API/getImgDict";
import {saveImgDict} from "../../../../API/saveImgDict";
import {getSampleImgs} from "../../../../API/getSampleImgs";
import {filterStandardPieces} from "../../../helpers/filterStandardPieces";
import {sampleBase64ImgStrs} from "../../../../API/apiHelpers/sampleBase64ImgStrs";
import {appBarHeight} from "../../../Reuseables/PersistentDrawer.jss";
import {fontSize001725} from "../../../styles/fontSizes.jss";
import {ImgGrid} from "../../../Reuseables/ImgGrid/ImgGrid";
import {SearchBox} from "../../../Reuseables/SearchBox";
import {Close} from "../../../Reuseables/Close";
import "../../../styles/scrollbar.scss";
import {close_icon, img_grid_root, styles} from "./ChooseModal.jss";

class ChooseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imgNameChoice: null, searchText: "", loaded: false};
        this.imgDict = {};
        this.deleteImg = this.deleteImg.bind(this);
        this.submitChoice = this.submitChoice.bind(this);
        this.setChoice = this.setChoice.bind(this);
        this.updateSearchText = this.updateSearchText.bind(this);
    }

    componentDidMount() {
        getImgDict().then(([imgDict]) => {
            if (!imgDict) {
                saveImgDict(sampleBase64ImgStrs).then(([r]) => {
                    this.imgDict = getSampleImgs();
                    this.imgDict = filterStandardPieces(this.imgDict);
                    this.setState({ loaded: true });
                })
            } else {
                this.imgDict = imgDict;
                this.imgDict = filterStandardPieces(this.imgDict);
                this.setState({ loaded: true });
            }
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

    updateSearchText(searchText) {
        this.setState({searchText: searchText});
    }

    render() {
        return (
            <div className={`scrollbar-${this.props.theme}`}>
                <div className={this.props.classes.modal}>
                    <MediaQuery minAspectRatio={'1/1'} minDeviceWidth={992}>
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
                            imgNameChoice={this.state.imgNameChoice}
                            searchText={this.state.searchText}
                            defaultChecked={false}
                            confirmDeleteMessage={`Are you sure you want to delete image ${this.state.imgNameChoice}?`}
                            onOkClick={() =>
                                this.submitChoice(this.state.imgNameChoice)
                            }
                            onDeleteClick={() => this.deleteImg(this.state.imgNameChoice)}
                            topFlexbox={
                                <Close
                                    theme={this.props.theme}
                                    onClick={this.props.closeAll}
                                    style={close_icon('desktop')}
                                />
                            }
                            theme={this.props.theme}
                        />
                    </MediaQuery>
                    <MediaQuery maxAspectRatio={'1/1'}>
                        <ImgGrid
                            imgDict={this.imgDict}
                            setChoice={this.setChoice}
                            imgNameChoice={this.state.imgNameChoice}
                            rootStyle={img_grid_root('mobile')}
                            theme={this.props.theme}
                            defaultChecked={false}
                            loaded={this.state.loaded} /*this.state.loaded*/
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
                                    style={close_icon('mobile')}
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
