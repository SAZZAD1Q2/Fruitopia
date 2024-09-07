import Fruit from './Fruit'

const Fruits = () => {
       const person = {
    name: "Saif",
    age: 23,
    fruits: [
      {name: "Mango", price: 200, emoji: "🥭"},
      {name: "Mango", price: 600, emoji: "🍌"},
      {name: "Jam", price: 300, emoji: "🍇"}
    ]
  }
  return (
    <div>
     { person.fruits.map((fruit) => (
            <Fruit key = {fruit.name} name = {fruit.name} price = {fruit.price} emoji={fruit.emoji}/>
      ))}
    </div>
  )
}

export default Fruits
