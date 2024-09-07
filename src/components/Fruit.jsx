import PropTypes from 'prop-types';
const Fruit = ({name, price, emoji}) => {
  return (
    <div>
      <ul>
            <h1>
                  {emoji}{name} {price}
            </h1>
      </ul>
    </div>
  )
}
Fruit.propTypes = {
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
      }

export default Fruit
