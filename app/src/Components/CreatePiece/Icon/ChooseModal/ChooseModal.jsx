import React from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PanoramaIcon from "@material-ui/icons/Panorama";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { getImgDict } from "../../../../API/getImgDict";
import { deleteImg } from "../../../../API/deleteImg";
import { getSetSampleImgs } from "../../../helpers/getSampleImgs";
import { filterStandardPieces } from "../../../helpers/filterStandardPieces";
import { Close } from "../../../Reuseables/Close";
import { MuiButton as Button } from "../../../Reuseables/MuiButton";
import { close_icon } from "../../../Reuseables/Help/MessageModal.jss";
import { MuiDeleteButton as DeleteButton } from "../../../Reuseables/MuiDeleteButton";
import { ImgChoice } from "./ImgChoice";
import { button, styles } from "./ChooseModal.jss";
import { fontSize } from "../../../styles/fontSize.jss";
import withStyles from "@material-ui/core/styles/withStyles";
import {MuiCheckbox} from "../../../Reuseables/MuiCheckbox";

class ChooseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imgNameChoice: null, showNames: false, bValue: true};
        this.imgDict = {};
        this.deleteImg = this.deleteImg.bind(this);
        this.setChoice = this.setChoice.bind(this);
        this.submitChoice = this.submitChoice.bind(this);
        this.toggleShowNames = this.toggleShowNames.bind(this);
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

    setChoice(imgName) {
        if (this.state.imgNameChoice === imgName) {
            this.setState({ imgNameChoice: null });
        } else {
            this.setState({ imgNameChoice: imgName });
        }
    }

    submitChoice() {
        this.props.setPieceImg(
            this.props.color,
            this.imgDict[this.state.imgNameChoice]
        );
        this.props.closeAll();
    }

    getImages() {
        let imgItems = [];
        let imageNames = Object.keys(this.imgDict);
        imageNames.forEach((name) => {
            imgItems.push(
                <ImgChoice
                    name={name}
                    key={uuidv4()}
                    theme={this.props.theme}
                    setChoice={this.setChoice}
                    base64ImgStr={this.imgDict[name]}
                    screenCase={this.props.screenCase}
                    showName={this.state.showNames}
                    isSelected={name === this.state.imgNameChoice}
                />
            );
        });
        return imgItems;
    }

    toggleShowNames () {
        this.setState({showNames: ! this.state.showNames})
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
                                style={{
                                    ...button(fontSize),
                                    marginLeft: "1em",
                                }}
                                startIcon={<DeleteForeverIcon />}
                                theme={this.props.theme}
                                variant="outlined"
                            />
                            <MuiCheckbox
                                onClick={this.toggleShowNames}
                                style={{fontSize: fontSize}}
                                rootStyle={{ marginLeft: "2.15em",}}
                                theme={this.props.theme}
                            >
                                Show Names
                            </MuiCheckbox>
                        </Box>
                    </div>
                </div>
            </>
        );
    }
}

export default withStyles(styles)(ChooseModal);
