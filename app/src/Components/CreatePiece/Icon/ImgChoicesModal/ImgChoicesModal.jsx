import React from "react";
import {copy} from "../../../helpers/copy";
import withStyles from "@material-ui/core/styles/withStyles";
import {sampleImgUrls} from "../../../../API/sampleData/sampleImgUrls";
import {decrementImgRefCount} from "../../../../API/decrementImgRefCount";
import {getImgComponents} from "../../../Reuseables/Modals/getImgComponents";
import {MuiGrid} from "../../../Reuseables/Modals/MuiGrid";
import {Close} from "../../../Reuseables/Modals/Close";
import {getImgDict} from "../../../../API/getImgDict";
import {deleteImg} from "../../../../API/deleteImg";
import {ImgChoicesTitle} from "./ImgChoicesTitle";
import {UserContext} from "../../../../UserContext";
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
        this.uid  = null;
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
        this.uid = UserContext;
        if (this.uid) {
            getImgDict().then(([imgDict]) => {
                if (!imgDict) {
                    this.imgDict = {}
                } else {
                    this.imgDict = imgDict;
                    this.updateImgComponents();
                    this.setState({loaded: true});
                }
            });
        }
        else {
            this.imgDict = copy(sampleImgUrls)
        }
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
                this.setState({imgNameChoice: null}, () => {
                    this.updateImgComponents();
                    this.triggerRender();
                });
            });
        })
    }

    submitChoice(imgNameChoice) {
        this.props.setPieceImg(this.props.color, this.imgDict[imgNameChoice]);
        this.props.close();
    }

    setChoice(imgNameChoice) {
        if (this.state.imgNameChoice === imgNameChoice) {
            this.setState({imgNameChoice: null}, () => {
                this.updateImgComponents();
                this.triggerRender();
            });
        } else {
            this.setState({imgNameChoice: imgNameChoice}, () => {
                this.updateImgComponents();
                this.triggerRender();
            });
        }
    }

    updateSearchText(searchText) {
        this.setState({searchText: searchText}, () => {
            this.updateImgComponents();
            this.triggerRender();
        });
    }

    toggleShowNames() {
        this.setState({showNames: !this.state.showNames}, () => {
            this.updateImgComponents();
            this.triggerRender();
        })
    }

    triggerRender() {
        this.setState({bValue: !this.state.bValue})
    }

    render() {

        return (
            <div className={this.props.classes.modal}>
                    <MuiGrid
                        setChoice={this.setChoice}
                        selectedItem={this.state.imgNameChoice}
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
                                className={this.props.classes.close}
                                iconClassName={this.props.classes.close_icon}
                                theme={this.props.theme}
                                onClick={this.props.close}
                            />
                        }
                        title={
                            <ImgChoicesTitle
                                theme={this.props.theme}
                                updateSearchText={this.updateSearchText}
                            />
                        }
                        className={this.props.classes.mui_grid}
                        confirmDeleteMessage={`Are you sure you want to delete image ${this.state.imgNameChoice}?`}
                    >
                        {this.imgItems}
                    </MuiGrid>
            </div>
        );
    }
}

export default withStyles(styles)(ImgChoicesModal);
