import Hello from "./components/Hello";
function App() {
  const person = {
    name: 'Sazzad',
    age: 23,
    seatNumber: 35,
    fruits: ["Mango","Apple","Jam"]
  }
  return (
    <div className="App">
     <Hello person = {person} />
    </div>
  );
}

export default App;
