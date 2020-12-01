import {navBarHeight} from "../NavBar/sizeAndPosVariables.jss";

const margin = window.screen.availWidth * 0.0125;

const windowWidth = window.screen.availWidth * 0.99;
const windowHeight = window.screen.availHeight - navBarHeight;
const top = navBarHeight + navBarHeight * 0.1;
const left = 0;

const topBarWidth = windowWidth;
const topBarHeight = windowHeight * 0.05;
const topBarTop = navBarHeight + navBarHeight * 0.1;
const topBarLeft = 0;

const pieceProfilesWidth = windowWidth;
const pieceProfilesHeight = windowHeight * 0.6;
const pieceProfilesTop = topBarHeight;
const pieceProfilesLeft = 0;


const profileHeaderWidth = pieceProfilesWidth;
const profileHeaderHeight = pieceProfilesHeight * 0.1;

const profileGridTop = margin;
const columnGap = margin;
const profileWBHeight = (pieceProfilesHeight - profileHeaderHeight - columnGap * 3) * 0.5;
const row1 = profileWBHeight * 0.15;
const row2 = profileWBHeight * 0.85;
const col1 = row2;
const col2 = windowWidth * 0.4;
const col3 = col2;

const pieceNameWidth = (pieceProfilesHeight - profileHeaderHeight - margin * 3) * 0.5;

const subDropdownWidth = profileHeaderWidth * 0.2675;

const subListWidth = windowWidth * 0.5;
const subListHeight = windowHeight - (topBarHeight + pieceProfilesHeight + navBarHeight) * 1.15;
const subListTop = topBarHeight + pieceProfilesHeight;
const subListLeft = 0;

const promoListWidth = subListWidth;
const promoListHeight = subListHeight;
const promoListTop = subListTop;
const promoListLeft = windowWidth * 0.5;

const bottomBarWidth = windowWidth;
const bottomBarHeight = navBarHeight * 1.15;
const bottomBarTop = topBarHeight + pieceProfilesHeight + promoListHeight;
const bottomBarLeft = 0;

const promoAllCheckboxTop = bottomBarHeight * 0.48 - (bottomBarHeight * 0.7) * 0.5;
const promoAllCheckboxLeft = margin;

const playAsDropdownWidth = bottomBarWidth * 0.15;
const playAsDropdownHeight = bottomBarHeight * 0.7;
const playAsDropdownTop = bottomBarHeight * 0.5 - playAsDropdownHeight * 0.5;
const playAsDropdownLeft = bottomBarHeight * 0.2

const okButtonHeight = playAsDropdownHeight;
const okButtonWidth = okButtonHeight * 3;
const okButtonLeft = bottomBarWidth * 0.4;
const okButtonTop = bottomBarHeight * 0.5 - okButtonHeight * 0.5

export const loadDelete = {
    margin,
    windowWidth,
    windowHeight,
    top,
    left,
    topBarWidth,
    topBarHeight,
    topBarTop,
    topBarLeft,
    pieceProfilesWidth,
    pieceProfilesHeight,
    pieceProfilesTop,
    pieceProfilesLeft,
    profileHeaderWidth,
    profileHeaderHeight,
    profileGridTop,
    columnGap,
    profileWBHeight,
    row1,
    row2,
    col1,
    col2,
    col3,
    pieceNameWidth,
    subDropdownWidth,
    subListWidth,
    subListHeight,
    subListTop,
    subListLeft,
    promoListWidth,
    promoListHeight,
    promoListTop,
    promoListLeft,
    bottomBarWidth,
    bottomBarHeight,
    bottomBarTop,
    bottomBarLeft,
    promoAllCheckboxTop,
    promoAllCheckboxLeft,
    playAsDropdownWidth,
    playAsDropdownHeight,
    playAsDropdownTop,
    playAsDropdownLeft,
    okButtonHeight,
    okButtonWidth,
    okButtonLeft,
    okButtonTop,
}