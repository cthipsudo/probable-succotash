import "./App.css";
import Bird from "./Bird";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import ShoppingList from "./ShoppingList";

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "chicken breasts", quantity: 4, completed: false },
  { id: 4, item: "carrots", quantity: 12, completed: true },
];

function App() {
  return (
    <div>
      <ShoppingList items={data} />
      {/* <Heading color="Magenta" text="WHAT'S UP DUDE!" fontSize="20px" />
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
