import React from "react";
import {v4 as uuidv4} from "uuid";
import PanoramaIcon from '@material-ui/icons/Panorama';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {getImgDict} from "../../../../API/getImgDict";
import {deleteImg} from "../../../../API/deleteImg";
import {getSetSampleImgs} from "../../../helpers/getSampleImgs";
import {filterStandardPieces} from "../../../helpers/filterStandardPieces";
import {ImgChoice} from "./ImgChoice";
import {ConfirmModal} from "../../../NavBar/ConfirmModal";
import {ImageNameDisplay} from "./ImageNameDisplay";
import {Close} from "../../../Reuseables/Close";
import {MuiButton as Button} from "../../../Reuseables/MuiButton";
import {SearchBox} from "../../../Reuseables/SearchBox";
import Box from "@material-ui/core/Box";
import {button, styles} from "./ChooseModal.jss";
import {fontSize} from "../../../styles/fontSize.jss";
import withStyles from "@material-ui/core/styles/withStyles";
import {close_icon} from "../../../NavBar/Help/MessageModal.jss";
import Typography from "@material-ui/core/Typography";

class ChooseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bValue: true,
            confirmDeleteModal: false,
            imgNameChoice: null,
            hoverText: null,
        };
        this.imgDict = {};
        this.imgNames = [];
        this.searchText = "";
        this.setChoice = this.setChoice.bind(this);
        this.submitChoice = this.submitChoice.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.acceptDeleteIcon = this.acceptDeleteIcon.bind(this);
        this.cancelDeleteIcon = this.cancelDeleteIcon.bind(this);
        this.openAskDeleteModal = this.openAskDeleteModal.bind(this);
        this.setHoverText = this.setHoverText.bind(this);
    }

    componentDidMount() {
        getImgDict().then(([imgDict]) => {
            if (!imgDict) {
                this.imgDict = getSetSampleImgs();
            } else {
                this.imgDict = imgDict;
            }

            this.imgDict = filterStandardPieces(this.imgDict);

            this.imgNames = Object.keys(this.imgDict);

            this.setState({bValue: !this.state.bValue});
        });
    }

    openAskDeleteModal() {
        this.setState({confirmDeleteModal: true});
    }

    acceptDeleteIcon() {
        deleteImg(this.state.imgNameChoice).then(([res]) => {
            this.props.resetIconWindowIfImageDeleted(
                this.imgDict[this.state.imgNameChoice]
            );
            delete this.imgDict[this.state.imgNameChoice];
            this.imgNames = Object.keys(this.imgDict);
            if (this.imgNames.length === 0) {
                this.imgDict = getSetSampleImgs();
                this.imgNames = Object.keys(this.imgDict);
            }
            this.setState({confirmDeleteModal: false, imgNameChoice: null});
        });
    }

    cancelDeleteIcon() {
        this.setState({confirmDeleteModal: false});
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({binaryValue: !this.state.binaryValue});
    }

    setChoice(imgNameChoice) {
        if (this.state.imgNameChoice === imgNameChoice)
            this.setState({imgNameChoice: null});
        else this.setState({imgNameChoice: imgNameChoice});
    }

    submitChoice() {
        this.props.setPieceImg(
            this.props.color,
            this.imgDict[this.state.imgNameChoice]
        );
        this.props.closeChooseModal();
    }

    setHoverText(imgName) {
        this.setState({hoverText: imgName});
    }

    applySearchFilter() {
        if (this.searchText !== "")
            return this.imgNames.filter((imgName) =>
                imgName.toLowerCase().startsWith(this.searchText)
            );
        else return this.imgNames;
    }

    getImages() {
        let imageNames = this.applySearchFilter();
        let imgPrevs = [];
        imageNames.forEach((name) => {
            imgPrevs.push(
                <ImgChoice
                    name={name}
                    key={uuidv4()}
                    theme={this.props.theme}
                    screenCase={this.props.screenCase}
                    base64ImgStr={this.imgDict[name]}
                    imgNameChoice={this.state.imgNameChoice}
                    setChoice={this.setChoice}
                    setHoverText={this.setHoverText}
                />
            );
        });
        return imgPrevs;
    }

    render() {
        return (
            <>
                <div className={this.props.classes.modal}>
                    <div className={this.props.classes.window}>
                        <Box className={this.props.classes.top_flexbox}>
                            <Close
                                theme={this.props.theme}
                                style={close_icon(fontSize)}
                                onClick={this.props.closeChooseModal}
                            />
                        </Box>
                        <Box className={this.props.classes.title_flexbox}>
                            <Typography className={this.props.classes.title}>Images</Typography>
                            <PanoramaIcon className={this.props.classes.title_icon} size='large' />
                            {/*<SearchBox updateSearch={this.updateSearch} screenCase={this.props.screenCase}/>*/}
                        </Box>
                        <Box className={this.props.classes.img_choices_border}>
                            <Box className={this.props.classes.image_choices}>
                                {this.getImages()}
                            </Box>
                        </Box>
                        <Box className={this.props.classes.bottom_flexbox}>
                            <Button
                                onClick={this.submitChoice}
                                imgNameChoice={this.state.imgNameChoice}
                                isDisabled={this.state.imgNameChoice}
                                style={{...button(fontSize), marginRight: '1em'}}
                                theme={this.props.theme}
                                variant='outlined'
                                startIcon={<CheckCircleOutlineIcon />}
                            >
                                Ok
                            </Button>
                            <Button
                                onClick={this.openAskDeleteModal}
                                imgNameChoice={this.state.imgNameChoice}
                                style={{...button(fontSize), marginLeft: '1em'}}
                                theme={this.props.theme}
                                variant='outlined'
                                startIcon={<DeleteForeverIcon />}
                            >
                                Delete
                            </Button>
                            <ImageNameDisplay
                                hoverText={this.state.hoverText}
                                imgNameChoice={this.state.imgNameChoice}
                                theme={this.props.theme}
                            />
                        </Box>
                    </div>
                </div>
                {this.state.confirmDeleteModal && (
                    <ConfirmModal
                        theme={this.props.theme}
                        text={`Are You Sure you want to delete image ${this.state.imgNameChoice}?`}
                        noClick={this.cancelDeleteIcon}
                        yesClick={this.acceptDeleteIcon}
                    />
                )}
            </>
        );
    }
}

export default withStyles(styles)(ChooseModal);
