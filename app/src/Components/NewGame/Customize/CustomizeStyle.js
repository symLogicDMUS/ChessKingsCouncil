import {navBarHeight} from "../../NavBar/NavBarStyle";
import {fontSizes} from "../../styles/fontSizes";
import {winWidth, winHeight} from "../../helpers/windowMeasurments";
import {getTextWidth} from "../../helpers/getTextWidth";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import checkBoxStyle from "../../Reuseables/CheckBox.jss";
import {pieceImgContainerWidth} from "../../helpers/pieceImgContainerWidth";
//import { themesJss } from "../../styles/themesJss";

export var styleObjects = {
    desktop: {
        margin: function () {
            return winWidth() * 0.0125;
        },
        customize: function () {
            const windowWidth = winWidth();
            const windowHeight = winHeight();
            const navHeight = navBarHeight();
            return {
                zIndex: 5,
                position: "absolute",
                border: "1px solid #707070",
                width: windowWidth * 0.99,
                height: windowHeight - navHeight,
                top: navHeight + navHeight * 0.1,
                left: 0,
            };
        },
        topBar: function () {
            /**title **/
            const customize = this.customize();
            return {
                position: "absolute",
                zIndex: "inherit",
                backgroundColor: "#515151",
                border: "1px solid blue",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                width: customize.width,
                height: customize.height * 0.05,
                top: 0,
                left: 0,
            };
        },
        title: function () {
            /***/
            return {
                position: "absolute",
                color: "#a9a9a9",
                fontSize: "200%",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                textAlign: "left",
                paddingLeft: "1%",
                border: "1px dashed green",
            };
        },
        pieceProfiles: function () {
            /***/
            const topBar = this.topBar();
            const customize = this.customize();
            const top = topBar.height;
            const height = customize.height * 0.6;
            const width = customize.width;
            const left = 0;
            return {width: width, height: height, top: top, left: left};
        },
        profileHeader: function () {
            const pieceProfiles = this.pieceProfiles();
            const height = pieceProfiles.height * 0.1;
            const width = pieceProfiles.width;
            return {width: width, height: height, zIndex: "inherit", backgroundColor: "#515151"};
        },
        profileGrid: function () {
            /***/
            const margin = this.margin()
            return {
                position: "relative",
                display: "inline-grid",
                columnGap: margin,
                // left: margin,
                top: margin,
            };
        },
        pieceName: function () {
            const profileHeader = this.profileHeader();
            const pieceProfiles = this.pieceProfiles()
            const margin = this.margin()
            const width = pieceImgContainerWidth(pieceProfiles.height, profileHeader.height, margin) * 0.845
            return {
                gridColumn: 1,
                width: width,
                fontSize: this.fontSize3(),
                zIndex: "inherit",
                color: "#a9a9a9",
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                textAlign: "left",
                overflow: "hidden",
                textOverflow: "ellipsis",
            };
        },
        promoCheckbox: function () {
            return {
                gridColumn: 2,
            };
        },
        subDropdown: function () {
            /**subDropdown colors in MuiSelect.sass */
            return {
                width: this.profileHeader().width * 0.2675,
                gridColumn: 3,
            };
        },
        subList: function () {
            const customize = this.customize();
            const topBar = this.topBar();
            const navHeight = navBarHeight();
            const pieceProfiles = this.pieceProfiles();
            const width = customize.width * 0.5;
            const height = customize.height - (topBar.height + pieceProfiles.height + navHeight) * 1.15;
            const top = topBar.height + pieceProfiles.height;
            const left = 0;
            return {width: width, height: height, top: top, left: left};
        },
        promoList: function () {
            const customize = this.customize();
            const topBar = this.topBar();
            const navHeight = navBarHeight();
            const pieceProfiles = this.pieceProfiles();
            const width = customize.width * 0.5;
            const height = customize.height - (topBar.height + pieceProfiles.height + navHeight) * 1.15;
            const top = topBar.height + pieceProfiles.height;
            const left = customize.width * 0.5;
            return {width: width, height: height, top: top, left: left};
        },
        bottomBar: function () {
            const customize = this.customize();
            const topBar = this.topBar();
            const navHeight = navBarHeight();
            const pieceProfiles = this.pieceProfiles();
            const heightRestOfWindow = topBar.height + pieceProfiles.height + this.promoList().height;
            const bottomBarHeight = navHeight * 1.15;
            const bottomBarWidth = customize.width;
            return {
                position: "absolute",
                backgroundColor: "#515151",
                borderTop: "1px solid #707070",
                width: bottomBarWidth,
                height: bottomBarHeight,
                top: heightRestOfWindow,
            };
        },
        labelDisp: function () {
            return this.bottomBar().width * 0.01;
        },
        itemDisp: function () {
            return this.labelDisp() * 6.65;
        },
        promoAllCheckbox: function (heightValue) {
            const bottomBar = this.bottomBar();
            const top = bottomBar.height * 0.48 - heightValue * 0.5;
            const left = this.margin();
            return {
                position: "absolute",
                top: top,
                left: left,
            };
        },
        playAsDropdown: function (heightValue) {
            /**note: height defined relative to font size see class*/
            const bottomBar = this.bottomBar();
            return {
                position: "absolute",
                width: bottomBar.width * 0.15,
                top: bottomBar.height * 0.5 - heightValue * 0.5,
                left: bottomBar.width * 0.4,
            };
        },
        OkButton: function () {
            const playAsDropdown = this.playAsDropdown();
            const height = playAsDropdown.height;
            const width = height * 3;
            const top = this.bottomBar().height * 0.5 - height * 0.5;
            const left = playAsDropdown.left + playAsDropdown.width + this.itemDisp();
            return {width: width, height: height, top: top, left: left, fontSize: playAsDropdown.fontSize};
        },

        /**fonts*/
        fontSize1: function () {
            return this.profileHeader().height * 0.6;
        },
        fontSize2: function () {
            return this.profileHeader().height * 0.35;
        },
        fontSize3: function () {
            return this.profileHeader().height * 0.7;
        },

    },
    /*
    mobile: {}
    */
};

export const fonts = {
    desktop: {
        fontSize1: createMuiTheme({
            fontSize: styleObjects.desktop.bottomBar().height * 0.15,
        }),
    },
    /*
    mobile: {
        fontSize1: createMuiTheme({
            fontSize: styleObjects.mobile.bottomBar().height * 0.8,
        }),
    },
    */
};
