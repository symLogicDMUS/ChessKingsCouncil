import React from "react";
import { getImgDict } from "../../../../API/getImgDict";
import { deleteImg } from "../../../../API/deleteImg";
import { getSetSampleImgs } from "../../../helpers/getSampleImgs";
import { filterStandardPieces } from "../../../helpers/filterStandardPieces";
import { ImgChoice } from "./ImgChoice";
import { AskDeleteIconButton } from "./AskDeleteIconButton";
import { ConfirmDeleteIconModal } from "./ConfirmDeleteIconModal";
import { Ok } from "./IconChooseOk";
import { SearchBar } from "./SearchBar";
import "./ChooseModal.css";

export class ChooseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imgNameChoice: null, bValue: true, confirmDeleteModal: false };
        this.imgDict = {};
        this.imgNames = [];
        this.searchText = "";
        this.setChoice = this.setChoice.bind(this);
        this.submitChoice = this.submitChoice.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.acceptDeleteIcon = this.acceptDeleteIcon.bind(this);
        this.cancelDeleteIcon = this.cancelDeleteIcon.bind(this);
        this.openAskDeleteModal = this.openAskDeleteModal.bind(this);
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
        this.props.setUnsaved(true);
        this.props.setPieceImg(this.props.color, this.imgDict[this.state.imgNameChoice]);
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
                    base64ImgStr={this.imgDict[name]}
                    imgNameChoice={this.state.imgNameChoice}
                    setChoice={this.setChoice}
                />
            );
        });
        return imgPrevs;
    }

    render() {
        return (
            <>
                <div className="choose-modal">
                    <div className="choose-main">
                        <div className="close" onClick={this.props.closeChooseModal}>
                            <img src="/Images/close.svg" className="x" alt="close window" />
                        </div>
                        <div className="title-div">
                            <img src="/Images/choose-icon-title.svg" className="title" alt="title of window" />
                        </div>
                        <SearchBar updateSearch={this.updateSearch} />
                        <div className="pieces-profiles">{this.getImages()}</div>
                        <div className="bottom-bar">
                            <Ok
                                imgNameChoice={this.state.imgNameChoice}
                                submitChoice={this.submitChoice}
                                closeChoose={this.props.closeChooseModal}
                            />
                            <AskDeleteIconButton
                                imgNameChoice={this.state.imgNameChoice}
                                openAskDeleteModal={this.openAskDeleteModal}
                            />
                        </div>
                    </div>
                </div>
                {this.state.confirmDeleteModal && (
                    <ConfirmDeleteIconModal
                        cancelDeleteIcon={this.cancelDeleteIcon}
                        acceptDeleteIcon={this.acceptDeleteIcon}
                        imgNameChoice={this.state.imgNameChoice}
                    />
                )}
            </>
        );
    }
}
