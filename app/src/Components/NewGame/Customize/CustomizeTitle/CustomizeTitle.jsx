import React from "react";
import MediaQuery from "react-responsive/src";
import {CustomizeTitleContentLg} from "./CustomizeTitleContentLg";
import {CustomizeTitleContentMd} from "./CustomizeTitleContentMd";
import {CustomizeTitleContentXSm} from "./CustomizeTitleContentXSm";
import {CustomizeTitleContentSm} from "./CustomizeTitleContentSm";

export function CustomizeTitle(props) {
    const {
        theme,
        onClick,
        updateSearchText,
        className,
        ...other
    } = props;

    return (
        <>
            <MediaQuery maxWidth={375}>
                <CustomizeTitleContentXSm
                    theme={theme}
                    className={className}
                    promoAllClick={onClick}
                    updateSearchText={updateSearchText}
                    {...other}
                />
            </MediaQuery>
            <MediaQuery minWidth={375} maxWidth={600}>
                <CustomizeTitleContentSm
                    theme={theme}
                    clasName={className}
                    promoAllClick={onClick}
                    updateSearchText={updateSearchText}
                    {...other}
                />
            </MediaQuery>
            <MediaQuery minWidth={600} maxWidth={960}>
                <CustomizeTitleContentMd
                    theme={theme}
                    className={className}
                    promoAllClick={onClick}
                    updateSearchText={updateSearchText}
                    {...other}
                />
            </MediaQuery>
            <MediaQuery minWidth={960}>
                <CustomizeTitleContentLg
                    theme={theme}
                    className={className}
                    promoAllClick={onClick}
                    updateSearchText={updateSearchText}
                    {...other}
                />
            </MediaQuery>
        </>
    );
}