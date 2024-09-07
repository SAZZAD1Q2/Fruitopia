 import PropTypes from 'prop-types';
 const Hello = ({person}) => {
  return (
  <div>
    <ul style={{ listStyleType: 'none' }}>
    <h1>Hi, I am {person.name}. You are {person.age} years old. I like {person.fruits.map((fruit) => (<li key = {fruit}>{fruit.emoji}{fruit.name} {fruit.price}</li>))}</h1>
    </ul>
  </div>
  )
};
Hello.propTypes = {
  person: PropTypes.shape = ({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  })
}
export default Hello;