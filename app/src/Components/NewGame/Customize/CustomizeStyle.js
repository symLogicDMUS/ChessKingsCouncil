import { navBarHeight } from "../../NavBar/NavBarStyle";
import { fontSizes } from "../../styles/fontSizes";
// import { getButtonSize } from "../../styles/button/button-size";
import { winWidth, winHeight } from "../../helpers/windowMeasurments";
import { getTextWidth } from "../../helpers/getTextWidth";

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
                width: windowWidth * 0.99,
                height: windowHeight - navHeight,
                top: navHeight + navHeight * 0.1,
                left: 0,
            };
        },
        topBar: function () {
            const customize = this.customize();
            return {
                width: customize.width,
                height: customize.height * 0.05,
                top: 0,
                left: 0,
            };
        },
        PieceProfiles: function () {
            const topBar = this.topBar();
            const customize = this.customize();
            const top = topBar.height;
            const height = customize.height * 0.6;
            const width = customize.width;
            const left = 0;
            return { width: width, height: height, top: top, left: left };
        },
        ProfileHeader: function () {
            const pieceProfiles = this.PieceProfiles();
            const height = pieceProfiles.height * 0.1;
            const width = pieceProfiles.width;
            return { width: width, height: height };
        },
        ProfileGrid: function () {
            const margin = this.margin();
            const profileHeader = this.ProfileHeader();
            const height = profileHeader.height * 0.7;
            const width = profileHeader.width - margin;
            const top = profileHeader.height * 0.5 - height * 0.5;
            const left = margin;
            const row = height;
            const pieceName = (this.PieceProfiles().height - profileHeader.height - margin * 3) * 0.425;
            const promoLabel = width * 0.095;
            const promoCheckbox = row;
            const subLabel = promoLabel;
            const subDropdown = promoCheckbox * 7.15;
            const gridTemplateRows = `${row}`;
            const gridTemplateColumns = `${pieceName}px ${promoLabel}px ${promoCheckbox}px ${subLabel}px ${subDropdown}px`;
            return {
                width: width,
                height: height,
                left: margin,
                top: top,
                gridTemplateColumns: gridTemplateColumns,
                gridTemplateRows: gridTemplateRows,
                columnGap: this.margin(),
            };
        },
        PieceName: function () {
            return {
                gridColumn: 1,
                gridRow: 1,
                position: "relative",
                fontSize: fontSizes["desktop"]["textDivRatio1"](this.ProfileGrid().height),
            };
        },
        PromoLabel: function () {
            return {
                gridColumn: 2,
                gridRow: 1,
                // border: "1px dashed #b1faae",
                fontSize: fontSizes["desktop"]["textDivRatio1"](this.ProfileGrid().height),
            };
        },
        PromoCheckbox: function () {
            return {
                gridColumn: 3,
                gridRow: 1,
            };
        },
        SubLabel: function () {
            return {
                gridColumn: 4,
                gridRow: 1,
                fontSize: fontSizes["desktop"]["textDivRatio1"](this.ProfileGrid().height),
            };
        },
        SubDropdown: function () {
            return {
                gridColumn: 5,
                gridRow: 1,
                fontSize: fontSizes["desktop"]["textDivRatio2"](this.ProfileGrid().height),
            };
        },
        SubList: function () {
            const customize = this.customize();
            const topBar = this.topBar();
            const navHeight = navBarHeight();
            const pieceProfiles = this.PieceProfiles();
            const width = customize.width * 0.5;
            const height = customize.height - (topBar.height + pieceProfiles.height + navHeight) * 1.15;
            const top = topBar.height + pieceProfiles.height;
            const left = 0;
            return { width: width, height: height, top: top, left: left };
        },
        PromoList: function () {
            const customize = this.customize();
            const topBar = this.topBar();
            const navHeight = navBarHeight();
            const pieceProfiles = this.PieceProfiles();
            const width = customize.width * 0.5;
            const height = customize.height - (topBar.height + pieceProfiles.height + navHeight) * 1.15;
            const top = topBar.height + pieceProfiles.height;
            const left = customize.width * 0.5;
            return { width: width, height: height, top: top, left: left };
        },
        bottomBar: function () {
            const customize = this.customize();
            const topBar = this.topBar();
            const navHeight = navBarHeight();
            const pieceProfiles = this.PieceProfiles();
            const heightRestOfWindow = topBar.height + pieceProfiles.height + this.PromoList().height;
            const bottomBarHeight = navHeight * 1.15;
            const bottomBarWidth = customize.width;
            return {
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
        PromoAllLabel() {
            const fontSize = fontSizes["desktop"]["medium4"]();
            const top = (this.bottomBar().height - fontSize * 1.2) * 0.45;
            const left = this.customize().width * 0.5;
            return { fontSize: fontSize, top: top, left: left };
        },
        PromoAllCheckbox: function () {
            //to make same height as text label next to it:
            const promoAllLabel = this.PromoAllLabel();
            const bottomBar = this.bottomBar();
            const height = bottomBar.height * 0.6;
            const top = bottomBar.height * 0.48 - height * 0.5;
            const width = height;
            const promoAllTextWidth = getTextWidth(
                "Promo All",
                promoAllLabel.fontSize,
                '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
            );
            const left = promoAllLabel.left + promoAllTextWidth + this.labelDisp();
            return { width: width, height: height, top: top, left: left };
        },
        PlayAsLabel: function () {
            const promoAllCheckbox = this.PromoAllCheckbox();
            const promoAllLabel = this.PromoAllLabel();
            const fontSize = promoAllLabel.fontSize;
            const top = promoAllLabel.top;
            const left = promoAllCheckbox.left + promoAllCheckbox.width + this.itemDisp();
            return { top: top, left: left, fontSize: fontSize };
        },
        PlayAsDropdown: function () {
            const promoAllCheckbox = this.PromoAllCheckbox();
            const playAsLabel = this.PlayAsLabel();
            const bottomBar = this.bottomBar();
            const height = promoAllCheckbox.height;
            const width = bottomBar.width * 0.15;
            const playAsLabelWidth = getTextWidth(
                "Play As",
                playAsLabel.fontSize,
                '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
            );
            const top = bottomBar.height * 0.5 - height * 0.5;
            const left = playAsLabel.left + playAsLabelWidth + this.labelDisp();
            return {
                fontSize: fontSizes["desktop"]["medium2"](),
                width: width,
                height: height,
                top: top,
                left: left,
            };
        },
        OkButton: function () {
            const playAsDropdown = this.PlayAsDropdown();
            const height = playAsDropdown.height;
            const width = height * 3;
            const top = this.bottomBar().height * 0.5 - height * 0.5;
            const left = playAsDropdown.left + playAsDropdown.width + this.itemDisp();
            return { width: width, height: height, top: top, left: left, fontSize: playAsDropdown.fontSize };
        },
    },
    // mobile: {

    // }
};
