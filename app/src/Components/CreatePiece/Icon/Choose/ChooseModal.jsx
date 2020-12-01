import React from "react";
import { getImgDict } from "../../../../API/getImgDict";
import { deleteImg } from "../../../../API/deleteImg";
import { getSetSampleImgs } from "../../../helpers/getSampleImgs";
import { filterStandardPieces } from "../../../helpers/filterStandardPieces";
import { ImgChoice } from "./ImgChoice";
import { IconModalButton } from "../IconModalButton";
import { ConfirmModal } from "../../../NavBar/ConfirmModal";
import { ImageNameDisplay } from "./ImageNameDisplay";
import { SearchBox } from "../../../Reuseables/SearchBox";
import { Close } from "../../../Reuseables/Close";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./ChooseModal.jss";

class ChooseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imgNameChoice: null, bValue: true, confirmDeleteModal: false, hoverText: null };
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

            this.setState({ bValue: !this.state.bValue });
        });
    }

    openAskDeleteModal() {
        this.setState({ confirmDeleteModal: true });
    }

    acceptDeleteIcon() {
        deleteImg(this.state.imgNameChoice).then(([res]) => {
            this.props.resetIconWindowIfImageDeleted(this.imgDict[this.state.imgNameChoice]);
            delete this.imgDict[this.state.imgNameChoice];
            this.imgNames = Object.keys(this.imgDict);
            if (this.imgNames.length === 0) {
                this.imgDict = getSetSampleImgs();
                this.imgNames = Object.keys(this.imgDict);
            }
            this.setState({ confirmDeleteModal: false, imgNameChoice: null });
        });
    }

    cancelDeleteIcon() {
        this.setState({ confirmDeleteModal: false });
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    setChoice(imgNameChoice) {
        if (this.state.imgNameChoice === imgNameChoice) this.setState({ imgNameChoice: null });
        else this.setState({ imgNameChoice: imgNameChoice });
    }

    submitChoice() {
        this.props.setPieceImg(this.props.color, this.imgDict[this.state.imgNameChoice]);
        this.props.closeChooseModal();
    }

    setHoverText(imgName) {
        this.setState({ hoverText: imgName });
    }

    applySearchFilter() {
        if (this.searchText !== "")
            return this.imgNames.filter((imgName) => imgName.toLowerCase().startsWith(this.searchText));
        else return this.imgNames;
    }

    getImages() {
        let imageNames = this.applySearchFilter();
        let imgPrevs = [];
        imageNames.forEach((name) => {
            imgPrevs.push(
                <ImgChoice
                    name={name}
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
                        <Close theme="dark" clickMethod={this.props.closeChooseModal} />
                        <div className={this.props.classes.title}>
                            <img
                                src="/Images/text-labels/choose-icon-title.svg"
                                className={this.props.classes.title}
                                alt="title of window"
                            />
                        </div>
                        <SearchBox updateSearch={this.updateSearch} screenCase={this.props.screenCase} />
                        <div className={this.props.classes.image_choices}>{this.getImages()}</div>
                        <div className={this.props.classes.bottom_bar}>
                            <IconModalButton
                                buttonText="Ok"
                                buttonType="ok"
                                imgNameChoice={this.state.imgNameChoice}
                                clickMethod={this.submitChoice}
                            />
                            <IconModalButton
                                buttonText="Delete"
                                buttonType="delete"
                                imgNameChoice={this.state.imgNameChoice}
                                clickMethod={this.openAskDeleteModal}
                            />
                            <ImageNameDisplay
                                hoverText={this.state.hoverText}
                                imgNameChoice={this.state.imgNameChoice}
                            />
                        </div>
                    </div>
                </div>
                {this.state.confirmDeleteModal && (
                    <ConfirmModal
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
