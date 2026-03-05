import "./App.css";
import Bird from "./Bird";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";

function App() {
  return (
    <div>
      <Heading color="Magenta" text="WHAT'S UP DUDE!" fontSize="20px" />
      <Heading color="Magenta" text="WHAT'S UP DUDE!" fontSize="48px" />
      {/* <Greeter person="Bill" from="Oscar" />
    <Greeter person="Dennis" from="Oscar" />
    <Greeter person="Okarun" from="Momo" /> */}
      {/* <Die numSides={20}/>
    <Die />
    <Die numSides={8}/> */}
      {/* <ListPicker values={[1,2,3]}/>
    <ListPicker values={["a", "b", "c"]}/> */}
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={["red", "white", "blue", "green"]} />
    </div>
  );
}

export default App;
