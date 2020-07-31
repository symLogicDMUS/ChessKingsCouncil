import React from "react";
import {NavBar} from "../NavBar/NavBarRegular";
import {NavExpand} from "../NavBar/NavExpand";
import {NavColapse} from "../NavBar/NavColapse";
import "./ComingSoon.css";


export class ComingSoonComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {bValue: true};
    this.navExpanded = true;
    this.togleNav = this.togleNav.bind(this);
  }

  componentDidMount() {
    document.body.className="coming-soon-body";
  }

  togleNav(boolVal) {
    this.navExpanded = boolVal;
    this.setState({bValue: ! this.state.bValue});
  }

  render() {
    return (
      <div>
        <svg viewBox="0 0 1706.988 502.028" transform="translate(-0.613 65)">
          <g transform="translate(-0.613 150)">
            <path 
              d="M840.435,298.5c-14.363-4.419-28.386-17.287-28.386-26.048,0-11.029,6.934-20.58,21.736-29.939l14.246-9.007-12.581-8.275c-19.6-12.889-18.535-22.745,3.231-29.974,6.51-2.162,11.833-4.656,11.829-5.541s-3.064-3.658-6.8-6.161c-22.672-15.188-26.088-46.023-7.445-67.2C847.4,103.7,857.688,99.6,877.581,99.885c11.1.158,16.957,1.785,27.2,7.564,12.228,6.9,14.1,7.265,29.883,5.8l16.836-1.565v15.786L940,126.107c-6.322-.748-13.084-1.711-15.027-2.138-2.326-.511-3.324.866-2.921,4.032.336,2.645,1.237,9.677,2,15.628,1.794,13.95-6.157,29.613-19.974,39.346-7.858,5.536-13.63,7.277-29.388,8.865-19.192,1.935-33.521,7.471-35.617,13.761-2.014,6.042,19.434,12.474,49.89,14.962,17.2,1.406,32.694,3.995,37.475,6.263,16.757,7.952,23.178,31.842,13.03,48.485-6.2,10.167-23.735,21.211-38.819,24.445-16.483,3.535-46.7,2.906-60.216-1.254Zm61.295-5.837c24.707-7.631,36.547-25.114,27.922-41.23-4.836-9.036-21.059-13.954-48.188-14.608-21.946-.53-26.156.043-35.105,4.815-26.719,14.231-21.487,44.246,9.254,53.087,13.248,3.81,29.444,3.085,46.117-2.064ZM889.911,181.885c10.073-7.924,13.5-17.023,13.5-35.852,0-26.653-10.382-40.872-29.842-40.872-19.313,0-28.786,13.054-28.786,39.67,0,18.65,3.96,28.822,14.425,37.054,8.388,6.6,22.315,6.6,30.7,0Zm779.384,50.937c-4.334-1.7-4.245-1.948,1.2-3.4,12.549-3.356,30.178-.757,23.514,3.467-3.91,2.478-18.316,2.442-24.717-.057ZM83.1,225.546c-17.638-2.465-46.235-16.193-58.17-27.924-5.141-5.053-12.714-16.293-16.83-24.979C1.071,157.818.613,155.161.613,129.2c0-26.092.431-28.56,7.658-43.814,13.051-27.55,35.584-47.8,62.269-55.962,23.567-7.208,69.451-4.542,88.153,5.121,6.18,3.193,6.612,4.432,6.612,18.982,0,8.561-1.031,15.566-2.291,15.566s-4.085-3.78-6.278-8.4c-12.49-26.321-51.7-37.491-80.332-22.884C45.783,53.434,28.262,86.4,28.262,128.388c0,34.458,11.662,65.024,29.831,78.185,21.8,15.793,53.011,17.774,78.257,4.969,11.766-5.968,26.282-20.646,29.582-29.912.615-1.727,2.032-2.284,3.15-1.238S169,190.6,166.406,200.747L161.7,219.2l-10.693,3.071c-13.8,3.963-50.369,5.726-67.909,3.274Zm161.9-.354c-21.876-4.3-41.757-21.651-48.613-42.424-1.626-4.927-2.331-15.494-1.66-24.875,2.572-35.948,26.943-57.673,65.141-58.069,39.313-.407,68.982,27.551,68.9,64.931-.043,20.765-15.08,43.768-35.52,54.338-5.742,2.97-32.558,9.169-36.424,8.42-.749-.145-6.071-1.19-11.828-2.321Zm34.372-9.37c18.75-9.077,27.285-30.246,24.779-61.464-2.23-27.773-15.425-45.853-35.422-48.535-29.3-3.93-48.371,14.047-52.03,49.052-4.973,47.579,26.687,78.368,62.672,60.948Zm792.34,10.444c-12.11-2.33-28.552-8.455-31.174-11.615-3.55-4.277-.547-47.537,3.214-46.283,1.426.476,3.25,4.029,4.055,7.9,4.987,23.978,27.5,42.582,51.522,42.582,24.2,0,42.116-15.764,42.1-37.035-.014-19.455-8.931-28.349-51.415-51.3-35.907-19.4-47.15-32.9-47.15-56.609,0-15.605,5.247-26.935,16.514-35.659,13.865-10.735,23.647-13.611,46-13.523,16.383.071,22.463,1.144,30.654,5.446l10.218,5.366V53.518c0,18.077-2.9,23.674-5.9,11.371-2.657-10.919-12.379-23.641-21.3-27.874-4.778-2.267-14.325-3.982-22.17-3.982-22.817,0-37.186,12.189-37.186,31.543,0,8.579,1.37,11.356,9.231,18.718,5.077,4.754,21.938,15.519,37.468,23.921s32.1,18.672,36.827,22.82c22.429,19.693,23.354,56.852,1.97,79.112-11.492,11.962-24.488,16.827-46.986,17.586-11.263.38-23.184.17-26.49-.466Zm166.246-1.075c-37.279-7.327-58.9-44.03-48.342-82.052,4.02-14.474,19.225-31.582,33.546-37.742,17.415-7.492,42.616-7.694,58.979-.471,33.081,14.6,48.414,52.163,33.961,83.2-12.86,27.616-46.072,43.37-78.143,37.067Zm34.372-9.369c18.75-9.077,27.285-30.246,24.779-61.464-2.229-27.773-15.424-45.853-35.421-48.536-29.3-3.93-48.371,14.047-52.03,49.052-4.973,47.579,26.687,78.368,62.672,60.948Zm124.309,9.333c-30.553-5.9-50.9-31.064-50.789-62.817.128-37.265,26.265-62.122,65.714-62.5,31.275-.3,56.224,16.574,65.415,44.246C1492.31,190.247,1447.909,235.053,1396.636,225.155Zm30.145-7.143c19.767-7.452,30.933-29.942,29.094-58.6-1.559-24.291-10.212-42.653-23.229-49.294-22.681-11.571-46.182-3.457-58.752,20.284-7.669,14.484-7.473,50.8.359,66.706a42.049,42.049,0,0,0,52.528,20.9Zm242,6.805c3.611-2.3,23.6-2.3,27.193-.01,1.521.971-4.6,1.771-13.609,1.775s-15.119-.789-13.584-1.766ZM346.351,219.58c.432-1.3,3.96-3.208,7.84-4.246,12.059-3.225,13.07-6.851,13.07-46.92,0-33.6-.419-37.225-4.809-41.615-2.645-2.645-6.431-4.808-8.415-4.808a3.617,3.617,0,0,1-3.606-3.606,3.67,3.67,0,0,1,3.709-3.606c2.04,0,9.018-4.966,15.507-11.036,11.831-11.067,17.48-12.341,15.147-3.416-.687,2.628-.512,8.709.39,13.514l1.639,8.736,6.448-6.088c22.6-21.335,54.484-23.575,69.871-4.908l7.177,8.707,7.976-6.733c26.2-22.116,58.272-20.464,71.028,3.658,5.049,9.548,5.472,13.409,5.506,50.236.02,21.941.832,41.083,1.8,42.538s4.945,3.686,8.829,4.959,7.491,3.6,8.014,5.169c.7,2.1-7.062,2.855-29.5,2.855-22.954,0-30.212-.726-29.473-2.944.54-1.619,4.517-3.667,8.838-4.55s8.911-2.661,10.2-3.951c1.4-1.4,2.037-18.891,1.58-43.495l-.763-41.151-7.72-7.713c-6.723-6.718-9.283-7.69-19.833-7.531-12.057.182-19.846,3.6-30.751,13.5-5.185,4.706-5.41,6.524-5.41,43.866,0,42.388-.007,42.367,14.262,46.051,4.538,1.171,8.686,3.433,9.216,5.025.722,2.166-7.565,2.895-32.895,2.895-27.289,0-33.86-.647-33.86-3.339,0-1.956,3.735-4.037,9.016-5.024,14.929-2.79,15.027-3.067,15.027-42.659,0-41.5-2.6-50.681-15.951-56.258-11.071-4.626-29.817-.4-40.739,9.194l-8.225,7.222v78.563l11.229,3.171c20.08,5.671,14.553,7.923-19.674,8.013-20.213.057-32.188-.805-31.7-2.273Zm235.948-.329a20.045,20.045,0,0,1,10.218-3.494c3.053,0,7.74-2.189,10.416-4.865,4.563-4.563,4.824-7.434,4.207-46.282l-.658-41.417-9.016-4.405c-4.959-2.423-9.012-5.128-9.007-6.011s4.941-3.634,10.969-6.113,13.26-7.618,16.071-11.42,5.989-6.913,7.063-6.913,1.952,26.971,1.952,59.935c0,65.592-.014,65.521,14.373,68.681,17,3.734,7.689,5.841-25.707,5.82-31.631-.028-35.035-.409-30.882-3.517Zm73.471,1.343c0-1.306,4.412-3.081,9.8-3.944,12.976-2.075,14.246-5.983,14.205-43.725s-.71-40.4-11.04-43.8c-4.489-1.481-8.161-3.641-8.161-4.8s4.869-4.259,10.821-6.892c7.02-3.105,12.593-7.79,15.865-13.336,7.1-12.03,11.782-11.214,11.782,2.051v10.6l18.161-9.4c21.39-11.069,37.884-12.589,50.844-4.687,14.137,8.62,15.945,15.6,16.213,62.608.132,23.141,1.065,43.385,2.074,44.987s5.583,3.615,10.165,4.475c4.755.892,8.331,3,8.331,4.9,0,2.679-6.218,3.339-31.456,3.339-24.047,0-31.221-.706-30.457-3,.549-1.648,4.733-3.6,9.3-4.346,14.754-2.4,14.49-1.54,13.531-43.971-.96-42.492-3.233-51.074-14.946-56.41-14.094-6.422-37.08-.7-48.941,12.192-5.569,6.051-5.587,6.28-3.606,45.323L700.249,212l11.42,3.219c6.281,1.77,11.42,4.238,11.42,5.483,0,1.309-14.208,2.265-33.66,2.265-20.569,0-33.66-.924-33.66-2.376Zm841.49.257c0-1.166,4.758-3.317,10.573-4.781l10.572-2.662,1.421-16.256c.782-8.941.622-27.075-.353-40.3L1517.7,132.81l-7.814-3.439c-9.859-4.339-9.829-6.473.146-10.641,4.378-1.829,11.785-7.794,16.459-13.256s9.207-9.93,10.072-9.93,1.573,4.869,1.573,10.819.831,10.819,1.846,10.819,5.911-2.762,10.88-6.139c19.636-13.343,44.558-17,58.391-8.562,13.389,8.164,15.431,16.5,15.472,63.149.014,22.941.832,42.859,1.8,44.263s5.469,3.584,9.993,4.844,8.672,3.629,9.216,5.262c.752,2.256-6.614,2.969-30.666,2.969-24.207,0-31.421-.706-30.657-3,.55-1.648,5.08-3.66,10.068-4.471,10.758-1.749,13.96-5.691,12.24-15.072-.7-3.8-1.268-21.366-1.268-39.031,0-32.09-.007-32.126-7.016-39.971-6.424-7.189-8.215-7.852-21.226-7.852-11.635,0-16.354,1.325-26.043,7.312l-11.833,7.312-.713,34.763c-.771,37.608.5,50.383,5.029,50.4,6.273.028,20.928,5.15,20.928,7.312,0,1.343-13.929,2.291-33.659,2.291-18.513,0-33.66-.954-33.66-2.119Zm172.53-1.261c4.819-2.7,24.43-2.581,27.171.16,1.109,1.109-5.426,2.016-14.522,2.016-11.137,0-15.268-.711-12.649-2.177Zm-6.155-6.719c-5.5-5.5-3.431-11.54,3.955-11.54s16.265,7.7,13.69,11.87c-2.141,3.465-14.074,3.242-17.645-.329Zm22.266.329c-.869-1.406.363-4.7,2.738-7.326,5.683-6.279,15.425-5.1,18.1,2.19,1.208,3.293,1.137,4.98-.176,4.168a2.751,2.751,0,0,0-3.716,1.081c-2,3.231-14.934,3.145-16.948-.114Zm-6.627-10.605c-3.487-2.55-3.526-3.416-.355-7.942,1.957-2.794,3.268-5.951,2.913-7.015s.436-2.476,1.756-3.137,2.4.926,2.4,3.528,2.326,5.891,5.165,7.311c5.12,2.56,5.109,2.612-1.4,6.349-5.181,2.974-7.391,3.165-10.479.906Zm2.247-29.514c-.687-3.636-1.946-23.381-2.8-43.878s-2.977-48.358-4.725-61.915c-4.239-32.862-2-41.469,10.794-41.469,13.924,0,14.908,7.281,8.683,64.292-1.987,18.194-4.319,45.793-5.183,61.331C1686.783,178.609,1684.154,187.01,1681.521,173.081ZM600.642,59.634c-5.274-3.338,12.032-5.854,25.7-3.735,9.056,1.4,10.414,2.167,6.6,3.708-6.612,2.668-28.09,2.686-32.291.028Zm-4.975-6.673c0-.28,4.5-1.72,10-3.2a36.558,36.558,0,0,1,19.234-.348c5.079,1.289,9.235,1.5,9.235.476,0-4.67-22.086-6.372-32.3-2.489-3.491,1.328-6.167,1.41-6.167.192,0-3.32,12.558-5.318,28.209-4.489,12.675.672,14.065,1.255,13.247,5.559-.828,4.356-2.821,4.809-21.185,4.809-11.149,0-20.271-.229-20.271-.508Zm30.654-12.142c-13.339-1.8-4.077-18.525,9.4-16.982,5.364.615,6.824,2,6.824,6.5C642.55,37.311,635.252,42.025,626.321,40.819ZM593.88,37.241c-3.6-4.547-5.106-16.142-2.327-17.86,1.4-.868,1.72-.329.738,1.259-1.149,1.858.627,2.776,5.373,2.776,9.027,0,18.588,7.44,16.512,12.849-1.839,4.792-16.713,5.507-20.3.975ZM608.89,22.989c-3.967-2.686-5.426-4.3-3.242-3.6,4.226,1.37,8.021-5.946,8.976-17.307.223-2.648.985-2.713,3.857-.329,1.969,1.634,3.057,3.818,2.417,4.853C618.8,10,625.685,20.215,629.367,19.183c1.961-.549.024,1.259-4.306,4.021s-8.116,4.941-8.415,4.844-3.789-2.374-7.756-5.06Zm32.457-1.977c-2.167-1.4-2.463-2.345-.743-2.367a5.609,5.609,0,0,1,4.349,2.367c1.845,2.985,1.012,2.985-3.606,0Z"
              transform="translate(0 0)"
            />
          </g>
        </svg>
        {this.navExpanded && (<NavBar navBarPosTop={0} 
                                        navBarPosLeft={475} 
                                        backgroundColor="black" 
                                        iconColor="969696" 
                                        iconColorHover="ffffff" 
                                        backgroundColorSelected="#3d3d3d" 
                                        border="1px solid black" />)}
          {this.navExpanded && (<NavColapse left={1075}  
                                            top={-1} 
                                            togleNav={this.togleNav} 
                                            backgroundColor="black" 
                                            iconColor="b6b6b6" 
                                            border="1px solid #515151" />)}
          {! this.navExpanded && (<NavExpand left={1075}  
                                             top={-1} 
                                             togleNav={this.togleNav} 
                                             backgroundColor="black" 
                                             iconColor="b6b6b6" 
                                             border="1px solid #515151" />)}
      </div>
    );  
  }

};

export default ComingSoonComponent;
