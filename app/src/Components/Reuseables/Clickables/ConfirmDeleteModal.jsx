import React from "react";
import clsx from "clsx";
import * as PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { StandardModal } from "../Modals/StandardModal";

/**extension of MuiDeleteButton*/
export function ConfirmDeleteModal(props) {
    const { title, text, size, theme, onClick, closeClick, classes } = props;
    return (
        <StandardModal
            title={title}
            text={text}
            theme={theme}
            closeClick={closeClick}
        >
            <Button
                onClick={onClick}
                variant={"text"}
                size={size}
                className={clsx(classes.button, {
                    [classes.primary]: true,
                })}
            >
                Delete
            </Button>
            <Button
                size={size}
                variant={"text"}
                onClick={closeClick}
                className={clsx(classes.button, {
                    [classes.secondary]: true,
                })}
            >
                Cancel
            </Button>
        </StandardModal>
    );
}

ConfirmDeleteModal.propTypes = {
    title: PropTypes.any,
    text: PropTypes.any,
    theme: PropTypes.any,
    closeClick: PropTypes.func,
    onClick: PropTypes.func,
    size: PropTypes.any,
    classes: PropTypes.any,
};
