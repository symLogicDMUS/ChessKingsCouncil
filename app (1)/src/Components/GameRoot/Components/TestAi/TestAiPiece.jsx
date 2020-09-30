import React from 'react';
import "./TestAiPiece.css";

export function TestAiPiece({imgName}) {
  return (<img src={`/Images/Pieces/${imgName}`} className="test-ai-piece" alt="icon of piece" />);
}