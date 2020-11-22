import {navBarHeight} from "../../NavBar/NavBarStyle";
import {winWidth} from "../../helpers/windowMeasurments";
export const margin = window.screen.availWidth * 0.0125;

export const customizeWidth = window.screen.availWidth * 0.99;
export const customizeHeight = window.screen.availHeight - navBarHeight;
export const customizeTop = navBarHeight + navBarHeight * 0.1;
export const customizeLeft = 0; 

export const topBarWidth = customizeWidth;
export const topBarHeight = customizeHeight * 0.05;
export const topBarTop = navBarHeight + navBarHeight * 0.1;
export const topBarLeft = 0;

export const pieceProfilesWidth = customizeWidth;
export const pieceProfilesHeight = customizeHeight * 0.6;
export const pieceProfilesTop = topBarHeight;
export const pieceProfilesLeft = 0;


export const profileHeaderWidth = pieceProfilesWidth;
export const profileHeaderHeight = pieceProfilesHeight * 0.1;

export const profileGridTop = margin;
export const columnGap = margin;
export const profileWBHeight = (pieceProfilesHeight - profileHeaderHeight - columnGap * 3) * 0.5;
export const row1 = profileWBHeight * 0.15;
export const row2 = profileWBHeight * 0.85;
export const col1 = row2;
export const col2 = customizeWidth * 0.4;
export const col3 = col2;

export const pieceNameWidth = (pieceProfilesHeight - profileHeaderHeight - margin * 3) * 0.5;

export const subDropdownWidth =  profileHeaderWidth * 0.2675;

export const subListWidth = customizeWidth * 0.5;
export const subListHeight = customizeHeight - (topBarHeight + pieceProfilesHeight + navBarHeight) * 1.15;
export const subListTop = topBarHeight + pieceProfilesHeight;
export const subListLeft = 0;

export const promoListWidth = subListWidth;
export const promoListHeight = subListHeight;
export const promoListTop = subListTop;
export const promoListLeft = customizeWidth * 0.5;

export const bottomBarWidth = customizeWidth;
export const bottomBarHeight = navBarHeight * 1.15;
export const bottomBarTop = topBarHeight + pieceProfilesHeight + promoListHeight;
export const bottomBarLeft = 0;

export const promoAllCheckboxTop = bottomBarHeight * 0.48 - (bottomBarHeight*0.7) * 0.5;
export const promoAllCheckboxLeft = margin;

export const playAsDropdownWidth = bottomBarWidth * 0.15;
export const playAsDropdownHeight = bottomBarHeight * 0.7;
export const playAsDropdownTop = bottomBarHeight*0.5 - playAsDropdownHeight * 0.5;
export const playAsDropdownLeft = bottomBarHeight * 0.2

export const okButtonHeight = playAsDropdownHeight;
export const okButtonWidth = okButtonHeight * 3;
export const okButtonLeft = bottomBarWidth * 0.4;
export const okButtonTop = bottomBarHeight*0.5 - okButtonHeight*0.5