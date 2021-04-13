import React, { useState } from "react";
import { Portal } from "@material-ui/core";
import { ProfilesModal } from "./ProfilesModal";
import { Option } from "./Option";
import { ToolButton } from "../../Reuseables/Clickables/ToolButton";

export function Load({
    load,
    theme,
    className,
    buttonType,
    miniVariantTool,
    toggleMiniVariantTool,
}) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            {modal ? (
                <Portal>
                    <ProfilesModal
                        load={load}
                        theme={theme}
                        close={() => {
                            toggleModal();
                            toggleMiniVariantTool(null);
                        }}
                    />
                </Portal>
            ) : null}
            {buttonType === "option" ? (
                <Option
                    iconType="load"
                    theme={theme}
                    key="load-option"
                    className={className}
                    onClick={toggleModal}
                />
            ) : (
                <ToolButton
                    theme={theme}
                    onClick={() => {
                        toggleModal();
                        toggleMiniVariantTool("Load");
                    }}
                    isActive={miniVariantTool === "Load"}
                    iconName={"load_alt"}
                    text={"Load"}
                />
            )}
        </>
    );
}
