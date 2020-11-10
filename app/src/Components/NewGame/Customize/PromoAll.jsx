import React, { useState, useEffect } from "react";
import { fontSizes } from "../../styles/fontSizes";
import "./PromoAll.scss";

export function PromoAll({ screenCase, toglePromoAll }) {
    let [checkmark, setCheckmark] = useState(false);

    const getCheckmark = () => {
        if (checkmark) {
            return (
                <img
                    src="/Images/checkmark/silver-checkmark.svg"
                    className="customize-checked"
                    alt="checkmark shows all indicates all pieces promoted."
                />
            );
        } else {
            return null;
        }
    };
    return (
        <>
            <div className="customize-promo-all-label" style={{ fontSize: fontSizes[screenCase]["medium1"]() }}>
                Promo All
            </div>
            <div
                className="customize-promo-all-checkbox"
                onClick={() => {
                    setCheckmark(!checkmark);
                    toglePromoAll(!checkmark);
                }}
            >
                {getCheckmark()}
            </div>
        </>
    );
}

// export class PromoAll extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { checkmark: false };
//         this.togleCheck = this.togleCheck.bind(this);
//     }

//     togleCheck() {
//         if (this.state.checkmark) this.props.toglePromoAll(false);
//         else this.props.toglePromoAll(true);
//         this.setState({ checkmark: !this.state.checkmark });
//     }

//     getCheckmark() {
//         if (this.state.checkmark)
//             return (
//                 <img
//                     src="/Images/checkmark/checkmark.svg"
//                     className="customize-checked"
//                     alt="checkmark shows all indicates all pieces promoted."
//                 />
//             );
//         else return null;
//     }

//     getCheckbox() {
//         if (this.state.checkmark) return "customize-promo-all-checkbox-selected";
//         else return "customize-promo-all-checkbox";
//     }

//     render() {
//         return (
//             <>
//                 <div
//                     className="customize-promo-all-label"
//                     style={{ fontSize: fontSizes[this.props.screenCase]["medium1"]() }}
//                 >
//                     Promo All
//                 </div>
//                 <div className={this.getCheckbox()} onClick={this.togleCheck}>
//                     {this.getCheckmark()}
//                 </div>
//             </>
//         );
//     }
// }
