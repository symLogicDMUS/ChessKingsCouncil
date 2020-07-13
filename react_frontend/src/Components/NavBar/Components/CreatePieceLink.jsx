import React from "react";
import {Link} from "react-router-dom";
import "../NavBar.css";

export const CreatePieceLink = () => {

    
    return(
        <div className="create-piece">
            <Link to="CreatePiece">
                <svg viewBox="0 0 150 150" className="link-icon" fill="#424242">
                    <g transform="translate(-0.36 -0.589)">
                        <path d="M.36.589v150h150V.589ZM54.3,12.617c6.855,0,13.131,14.187,7.779,17.584-1.879,1.193,11.668,32.17,14.069,32.17S92.1,31.395,90.218,30.2c-5.7-3.616,1.041-17.584,8.481-17.584,7.65,0,12.724,13.533,6.927,18.475-2.393,2.04-2.246,5.061.99,20.274,2.092,9.832,4.245,18.331,4.785,18.886s4.166-1.225,8.058-3.954c4.86-3.409,6.735-6.075,5.988-8.513a9.355,9.355,0,0,1,8.893-12c12.063,0,14.5,12.177,3.748,18.7-12.329,7.473-22.735,34.029-20.982,53.547.579,6.444,1.7,13.815,2.482,16.38l1.429,4.664H31.282l1.429-4.664c2.945-9.613,3.478-28.236,1.032-36.059C28.2,80.627,21.513,68.91,14.526,64.675c-11.052-6.7-8.837-18.888,3.432-18.888a9.355,9.355,0,0,1,8.893,12c-.747,2.438,1.128,5.1,5.988,8.513,3.892,2.73,7.518,4.509,8.058,3.954s2.694-9.054,4.785-18.886c3.236-15.214,3.384-18.234.99-20.274-6.1-5.2-.622-18.475,7.628-18.475Z" />
                    </g>
                </svg>
            </Link>
        </div>
    )   
}