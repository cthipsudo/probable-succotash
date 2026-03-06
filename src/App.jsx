import "./App.css";
import Bird from "./Bird";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";

// const data = [
//   { id: 1, item: "eggs", quantity: 12, completed: false },
//   { id: 2, item: "milk", quantity: 1, completed: true },
//   { id: 3, item: "chicken breasts", quantity: 4, completed: false },
//   { id: 4, item: "carrots", quantity: 12, completed: true },
// ];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <div>
      <Clicker />
      {/* <PropertyList data={properties} /> */}
      {/* <ShoppingList items={data} />
       <Heading color="Magenta" text="WHAT'S UP DUDE!" fontSize="20px" />
      <Heading color="Magenta" text="WHAT'S UP DUDE!" fontSize="48px" />
      <Greeter person="Bill" from="Oscar" />
      <Greeter person="Dennis" from="Oscar" />
      <Greeter person="Okarun" from="Momo" />
      <Die numSides={20} />
      <Die />
      <Die numSides={8} />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={["red", "white", "blue", "green"]} />
      <ColorList colors={["brown", "teal", "blue", "green"]} /> */}
    </div>
  );
}

export default App;
