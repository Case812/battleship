import "./Piece.css";

export default function Piece(props: { hasShipPart: boolean, clicked: boolean }) {
  return (<>
    <div className="piece">
      {props.clicked && <>
        {props.hasShipPart ? 
        <>
        <img src="/Hit.png"></img>
        </> : 
        <>
        <img src="/Miss.png"></img>
        </>
        }
      </>}
    </div>
  </>);
}