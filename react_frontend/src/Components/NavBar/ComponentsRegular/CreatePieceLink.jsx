import React from "react";
import {Link} from "react-router-dom";
import "../NavBarRegular.css";
import "./CreatePieceLink.css";

export class CreatePieceLink extends React.Component {
          
  constructor(props) {
    super(props);
    this.state = {selected: false};
    this.path = "/CreatePiece";
    this.helpText = "You are already on this page. Go to home page and follow the link from there to start over."
    this.select = this.select.bind(this);
    this.unselect = this.unselect.bind(this);
    this.checkDest = this.checkDest.bind(this);
  }  
      
      getBackgroundColor() {
        if (this.state.selected)
          return this.props.styles.backgroundColorSelected;
        else
          return this.props.styles.backgroundColor;
      }
      getIconColor() {
        if (this.state.selected)
          return this.props.styles.iconColorHover
        else
          return this.props.styles.iconColor
      }
    
      unselect() {
        this.setState({selected: false})
      }
    
      select() {
        this.setState({selected: true});
      }
  
      checkDest() {
        if (this.path === this.props.currentPage) {
          this.props.setHelpText("", this.helpText, "none")
          this.props.togleHelpModal(true);
        }
      }

      render() {
        return (
            <Link to="/CreatePiece" style={{ textDecoration: 'none' }} >
            <div className="create-piece-regular-link"
                style={{borderRight:this.props.styles.border, backgroundColor:this.getBackgroundColor()}} 
                onMouseEnter={this.select} 
                onMouseLeave={this.unselect}
                onClick={this.checkDest}>
                <div className="nav-bar-button-icon-container">
                    <img src={`/Images/Navbar/create-piece-invert-${this.getIconColor()}.svg`} 
                        style={{position:"relative", 
                                top:-3,
                                width:20, 
                                height:20}} 
                        alt="" 
                    />
                </div>
                <div className="nav-bar-button-text-container" style={{color: "#" + this.getIconColor()}}>
                    Create Piece  
                </div>
            </div>
            </Link>              
        )
      }
};