import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import WallpaperIcon from '@material-ui/icons/Wallpaper'
import {getImgComponents} from "../../../Reuseables/Modals/getImgComponents";
import {Close} from "../../../Reuseables/Modals/Close";
import {SearchBox} from "../../../Reuseables/UserInput/SearchBox";
import {MuiGrid} from "../../../Reuseables/Modals/MuiGrid";
import withStyles from "@material-ui/core/styles/withStyles";
import {deleteImg} from "../../../../API/deleteImg";
import {getImgDict} from "../../../../API/getImgDict";
import {saveImgUrls} from "../../../../API/saveImgUrls";
import {getSampleImgUrls} from "../../../../API/getSampleImgUrls";
import {sampleImgUrls} from "../../../../API/apiHelpers/sampleImgUrls/dev1";
import {decrementImgRefCount} from "../../../../API/decrementImgRefCount";
import {styles} from "./ImgChoicesModal.jss";

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
                saveImgUrls(sampleImgUrls).then(([r]) => {
                    this.imgDict = getSampleImgUrls();
                    this.updateImgComponents();
                    this.setState({ loaded: true });
                });
            } else {
                this.imgDict = imgDict;
                this.updateImgComponents();
                this.setState({ loaded: true });
            }
        });
    }

    updateImgComponents() {
        this.imgItems = getImgComponents(
            this.imgDict,
            this.setChoice,
            this.state.imgNameChoice,
            this.state.searchText,
            this.state.showNames,
            this.props.theme,
        );
    }

    deleteImg(imgNameChoice) {
        decrementImgRefCount(this.imgDict[imgNameChoice]).then(r => {
            deleteImg(imgNameChoice).then(([r]) => {
                this.props.resetImg(this.imgDict[imgNameChoice]);
                delete this.imgDict[imgNameChoice];
                this.setState({ imgNameChoice: null }, () => {
                    this.updateImgComponents();
                    this.triggerRender();
                });
            });
        })
    }

    submitChoice(imgNameChoice) {
        this.props.setPieceImg(this.props.color, this.imgDict[imgNameChoice]);
        this.props.closeAll();
    }

    setChoice(imgNameChoice) {
        if (this.state.imgNameChoice === imgNameChoice) {
            this.setState({ imgNameChoice: null }, () => {
                this.updateImgComponents();
                this.triggerRender();
            });
        } else {
            this.setState({ imgNameChoice: imgNameChoice }, () => {
                this.updateImgComponents();
                this.triggerRender();
            });
        }
    }

    updateSearchText(searchText) {
        this.setState({ searchText: searchText }, () => {
            this.updateImgComponents();
            this.triggerRender();
        });
    }

    toggleShowNames() {
        this.setState({showNames: ! this.state.showNames}, () => {
            this.updateImgComponents();
            this.triggerRender();
        })
    }
    triggerRender() {
        this.setState({bValue: ! this.state.bValue})
    }

    render() {

        return (
            // <div className={`scrollbar-${this.props.theme}`}>
                <div className={this.props.classes.modal}>
                    <MediaQuery minWidth={1040}>
                        <MuiGrid
                            setChoice={this.setChoice}
                            selectedItem={this.state.imgNameChoice}
                            rootClassProp={classes.img_grid_root}
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
                                    classProp={classes.close_icon}
                                    theme={this.props.theme}
                                    onClick={this.props.closeAll}
                                />
                            }
                            title={
                                <>
                                    <Box className={this.props.classes.title_box}>
                                        <Typography className={this.props.classes.title}>Images</Typography>
                                        <WallpaperIcon className={this.props.classes.title_icon} size="small"/>
                                    </Box>
                                    <SearchBox
                                        theme={this.props.theme}
                                        updateSearchText={this.updateSearchText}
                                        style={{
                                            alignSelf: 'flex-end', marginRight: '2.25vw',
                                            transform: 'translate(0, -1em)'
                                        }}
                                        width='20em'
                                    />
                                </>
                            }
                            confirmDeleteMessage={`Are you sure you want to delete image ${this.state.imgNameChoice}?`}
                        >
                            {this.imgItems}
                        </MuiGrid>
                    </MediaQuery>
                    <MediaQuery maxWidth={1040}>
                        <MuiGrid
                            setChoice={this.setChoice}
                            selectedItem={this.state.imgNameChoice}
                            rootClassProp={classes.img_grid_root}
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
                                    classProp={classes.close_icon}
                                />
                            }
                            title={
                                <>
                                    <Typography
                                        className={this.props.classes.title}
                                    >
                                        Images
                                    </Typography>
                                    <WallpaperIcon
                                        className={
                                            this.props.classes.title_icon
                                        }
                                        size="small"
                                    />
                                    <SearchBox
                                        theme={this.props.theme}
                                        updateSearchText={this.updateSearchText}
                                        width={5}
                                    />
                                </>
                            }
                            confirmDeleteMessage={`Are you sure you want to delete image ${this.state.imgNameChoice}?`}
                        >
                            {this.imgItems}
                        </MuiGrid>
                    </MediaQuery>
                </div>
            // </div>
        );
    }
}

export default withStyles(styles)(ImgChoicesModal);
