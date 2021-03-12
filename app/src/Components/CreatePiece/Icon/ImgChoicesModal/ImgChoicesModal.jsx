import React from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import { Typography } from "@material-ui/core";
import PanoramaIcon from "@material-ui/icons/Panorama";
import "../../../styles/scrollbar.scss";
import { getImgComponents } from "../../../Reuseables/Modals/getImgComponents";
import { Close } from "../../../Reuseables/Modals/Close";
import { SearchBox } from "../../../Reuseables/UserInput/SearchBox";
import { MuiGrid } from "../../../Reuseables/Modals/MuiGrid";
import withStyles from "@material-ui/core/styles/withStyles";
import { deleteImg } from "../../../../API/deleteImg";
import { getImgDict } from "../../../../API/getImgDict";
import { saveImgDict } from "../../../../API/saveImgDict";
import { getSampleImgUrls } from "../../../../API/getSampleImgUrls";
import { sampleImgUrls } from "../../../../API/apiHelpers/sampleImgUrls/dev1";
import { close_icon, img_grid_root, styles } from "./ImgChoicesModal.jss";

class ImgChoicesModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgNameChoice: null,
            searchText: "",
            loaded: false,
            showNames: false,
            bValue: true
        };
        this.imgDict = {};
        this.imgItems = []
        this.deleteImg = this.deleteImg.bind(this);
        this.submitChoice = this.submitChoice.bind(this);
        this.setChoice = this.setChoice.bind(this);
        this.updateSearchText = this.updateSearchText.bind(this);
        this.toggleShowNames = this.toggleShowNames.bind(this);
        this.triggerRender = this.triggerRender.bind(this);
    }

    componentDidMount() {
        getImgDict().then(([imgDict]) => {
            if (!imgDict) {
                saveImgDict(sampleImgUrls).then(([r]) => {
                    this.imgDict = getSampleImgUrls();
                    this.imgItems = getImgComponents(
                        this.imgDict,
                        this.setChoice,
                        this.state.imgNameChoice,
                        this.state.searchText,
                        this.state.showNames,
                        this.props.theme,
                    );
                    this.setState({ loaded: true });
                });
            } else {
                this.imgDict = imgDict;
                this.imgItems = getImgComponents(
                    this.imgDict,
                    this.setChoice,
                    this.state.imgNameChoice,
                    this.state.searchText,
                    this.state.showNames,
                    this.props.theme,
                );
                this.setState({ loaded: true });
            }
        });
    }

    deleteImg(imgNameChoice) {
        deleteImg(imgNameChoice).then(([r]) => {
            this.props.resetImg(this.imgDict[imgNameChoice]);
            delete this.imgDict[imgNameChoice];
            this.imgItems = getImgComponents(
                this.imgDict,
                this.setChoice,
                this.state.imgNameChoice,
                this.state.searchText,
                this.state.showNames,
                this.props.theme,
            );
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

    toggleShowNames() {
        this.setState({showNames: ! this.state.showNames}, () => {
            this.imgItems = getImgComponents(
                this.imgDict,
                this.setChoice,
                this.state.imgNameChoice,
                this.state.searchText,
                this.state.showNames,
                this.props.theme,
            );
            this.triggerRender();
        })
    }
    triggerRender() {
        this.setState({bValue: ! this.state.bValue})
    }

    render() {
        return (
            <div className={`scrollbar-${this.props.theme}`}>
                <div className={this.props.classes.modal}>
                    <MediaQuery minDeviceWidth={1040}>
                        <MuiGrid
                            setChoice={this.setChoice}
                            selectedItem={this.state.imgNameChoice}
                            rootStyle={img_grid_root("desktop")}
                            toggleShowNames={this.toggleShowNames}
                            loaded={this.state.loaded}
                            theme={this.props.theme}
                            defaultChecked={false}
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
                                    style={close_icon("desktop")}
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
                        >
                            {this.imgItems}
                        </MuiGrid>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1040}>
                        <MuiGrid
                            setChoice={this.setChoice}
                            selectedItem={this.state.imgNameChoice}
                            rootStyle={img_grid_root("mobile")}
                            toggleShowNames={this.toggleShowNames}
                            loaded={this.state.loaded}
                            theme={this.props.theme}
                            defaultChecked={false}
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
                                    style={close_icon("mobile")}
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
                        >
                            {this.imgItems}
                        </MuiGrid>
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ImgChoicesModal);
