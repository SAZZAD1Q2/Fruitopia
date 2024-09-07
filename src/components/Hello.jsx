import PropTypes from "prop-types";

const Hello = ({ person }) => {
  return (
    <div><h1>
      Hello {person.name}. I am {person.age} and My seat number is {person.seatNumber}.I like to have {person.fruits.map((fruit) => fruit)}
      
    </h1></div>
  );
};
Hello.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    seatNumber: PropTypes.number.isRequired,
    fruits: PropTypes.string.isRequired,
  })
}


 

export default Hello;
