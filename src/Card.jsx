import './Card.css';

const Card = ({ title, children, handleClick }) => {
  return (
    <div className="Card" onClick={() => handleClick(title)} >
      <h3>{ title }</h3>
      <div>{ children }</div>
    </div>
  );
};

export default Card;
