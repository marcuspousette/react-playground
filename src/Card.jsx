import './Card.css';

const Card = ({ color, children, handleClick }) => {
  return (
    <div className="Card" onClick={() => handleClick(color)} style={{ backgroundColor: color }}>
      <h3>{ color }</h3>
      <div>{ children }</div>
    </div>
  );
};

export default Card;
