import PropTypes from "prop-types";
const Fruit = ({ name, price, emoji, Soldout }) => {
  return price < 20 ? (
    <h1>
      <ul style={{ listStyle: "none" }}>
        <li>
          {name}
          {emoji}${price} {Soldout? "Soldout":""}
        </li>
      </ul>
    </h1>
  ) : (
    ""
  );
};

Fruit.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  Soldout:PropTypes.string.isRequired,
};

export default Fruit;
