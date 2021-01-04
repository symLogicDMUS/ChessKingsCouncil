import React from "react";
import { v4 as uuidv4 } from "uuid";
import PanoramaIcon from "@material-ui/icons/Panorama";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { getImgDict } from "../../../../API/getImgDict";
import { deleteImg } from "../../../../API/deleteImg";
import { getSetSampleImgs } from "../../../helpers/getSampleImgs";
import { filterStandardPieces } from "../../../helpers/filterStandardPieces";
import { ImgChoice } from "./ImgChoice";
import { StandardModal } from "../../../Reuseables/StandardModal";
import { ImageNameDisplay } from "./ImageNameDisplay";
import { Close } from "../../../Reuseables/Close";
import { MuiButton as Button } from "../../../Reuseables/MuiButton";
import { SearchBox } from "../../../Reuseables/SearchBox";
import Box from "@material-ui/core/Box";
import { button, styles } from "./ChooseModal.jss";
import { fontSize } from "../../../styles/fontSize.jss";
import withStyles from "@material-ui/core/styles/withStyles";
import { close_icon } from "../../../Reuseables/Help/MessageModal.jss";
import Typography from "@material-ui/core/Typography";
import {MuiDeleteButton as DeleteButton} from "../../../Reuseables/MuiDeleteButton";

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
        this.searchText = "";
        this.deleteImg = this.deleteImg.bind(this);
        this.setChoice = this.setChoice.bind(this);
        this.submitChoice = this.submitChoice.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
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
            this.setState({ bValue: !this.state.bValue });
        });
    }

    deleteImg() {
        deleteImg(this.state.imgNameChoice).then(([res]) => {
            this.props.resetImg(this.imgDict[this.state.imgNameChoice]);
            delete this.imgDict[this.state.imgNameChoice];
            this.setState({ imgNameChoice: null });
        });
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    setChoice(imgNameChoice) {
        if (this.state.imgNameChoice === imgNameChoice) {
            this.setState({ imgNameChoice: null });
        } else {
            this.setState({ imgNameChoice: imgNameChoice });
        }
    }

    submitChoice() {
        this.props.setPieceImg(
            this.props.color,
            this.imgDict[this.state.imgNameChoice]
        );
        this.props.closeAll();
    }

    setHoverText(imgName) {
        this.setState({ hoverText: imgName });
    }

    applySearchFilter() {
        if (this.searchText !== "")
            return Object.keys(this.imgDict).filter((imgName) =>
                imgName.toLowerCase().startsWith(this.searchText)
            );
        else return Object.keys(this.imgDict);
    }

    getImages() {
        let imageNames = this.applySearchFilter();
        let imgItems = [];
        imageNames.forEach((name) => {
            imgItems.push(
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
        return imgItems;
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
                                onClick={this.props.closeAll}
                            />
                        </Box>
                        <Box className={this.props.classes.title_flexbox}>
                            <Typography className={this.props.classes.title}>
                                Images
                            </Typography>
                            <PanoramaIcon
                                className={this.props.classes.title_icon}
                                size="large"
                            />
                        </Box>
                        <Box className={this.props.classes.img_choices_border}>
                            <Box className={this.props.classes.image_choices}>
                                {this.getImages()}
                            </Box>
                        </Box>
                        <Box className={this.props.classes.bottom_flexbox}>
                            <Button
                                onClick={() => this.submitChoice()}
                                isDisabled={this.state.imgNameChoice === null}
                                style={{
                                    ...button(fontSize),
                                    marginRight: "1em",
                                }}
                                variant="outlined"
                                theme={this.props.theme}
                                startIcon={<CheckCircleOutlineIcon />}
                            >
                                Ok
                            </Button>
                            <DeleteButton
                                onAcceptDelete={this.deleteImg}
                                modalTitle={`Are you sure you want to delete this image? ${this.state.imgNameChoice}?`}
                                isDisabled={this.state.imgNameChoice === null}
                                style={{...button(fontSize), marginLeft: "1em",}}
                                startIcon={<DeleteForeverIcon />}
                                theme={this.props.theme}
                                variant="outlined"
                            />
                            <ImageNameDisplay
                                hoverText={this.state.hoverText}
                                imgNameChoice={this.state.imgNameChoice}
                                theme={this.props.theme}
                            />
                        </Box>
                    </div>
                </div>
            </>
        );
    }
}

export default withStyles(styles)(ChooseModal);
