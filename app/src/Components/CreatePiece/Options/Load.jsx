import React, { useState } from "react";
import { Portal } from "@material-ui/core";

const Option = React.lazy(() => import('../../Reuseables/Clickables/Option'));
const ProfilesModal = React.lazy(() => import('./ProfilesModal'));
const ToolButton = React.lazy(() => import('../../Reuseables/MiniVariantTool/ToolButton'));

function Load(props) {
    const {
        load,
        erase,
        theme,
        buttonType,
        className,
    } = props;

    const [modal, setModal] = useState(false);

    return (
        <>
            {modal ? (
                <Portal>
                    <ProfilesModal
                        load={load}
                        erase={erase}
                        theme={theme}
                        close={() => setModal(false)}
                    />
                </Portal>
            ) : null}
            {buttonType === "option" ? (
                <Option
                    iconType="load"
                    name={"Load"}
                    theme={theme}
                    key="load-option"
                    className={className}
                    isGameOption={false}
                    onClick={() => setModal(true)}
                />
            ) : (
                <ToolButton
                    theme={theme}
                    onClick={() => setModal(true)}
                    isActive={modal}
                    iconName={"load_alt"}
                    text={"Load"}
                />
            )}
        </>
    );
}

export default Load;
