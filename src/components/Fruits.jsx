import Fruit from './Fruit'

const Fruits = () => {
       const person = {
    name: "Saif",
    age: 23,
    fruits: [
      {name: "Mango", price: 3, emoji: "🥭", Soldout: true},
      {name: "Mango", price: 6, emoji: "🍌", Soldout: false},
      {name: "Jam", price: 3, emoji: "🍇",Soldout: true}
    ]
  }
  return (
    <div>
     { person.fruits.map((fruit) => (
            <Fruit key = {fruit.name} name = {fruit.name} price = {fruit.price} emoji={fruit.emoji} Soldout = {fruit.Soldout}/>
      ))}
    </div>
  )
}

export default Fruits
