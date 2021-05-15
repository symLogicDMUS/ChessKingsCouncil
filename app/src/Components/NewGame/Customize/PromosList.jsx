import React from "react";
import {ListTitle} from "./ListTitle";
import { useStyles } from "./PromoList.jss";

const ScrollTable = React.lazy(() => import('../../Reuseables/ScrollTable/ScrollTable'));

export function PromosList(props) {
    const classes = useStyles({theme: props.theme});

    return <ScrollTable
        numRows={6}
        theme={props.theme}
        key="pawn-promotions-wide"
        className={classes.scroll_table}
        addedClassName={
            classes.drawer_component
        }
        listItemClassName={
            classes.scroll_table_list_item
        }
        arrowButtonClassName={
            classes.scroll_table_button
        }
        textClassName={
            classes.scroll_table_text
        }
        title={
            <ListTitle
                className={
                    classes
                        .scroll_table_title
                }
                theme={props.theme}
            >
                Pawn Promotions
            </ListTitle>
        }
    >
        {props.tools}
    </ScrollTable>;
}