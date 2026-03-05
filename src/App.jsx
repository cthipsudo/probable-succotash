
import './App.css'
import Bird from './Bird'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'

function App() {
  return <div>
    {/* <Greeter person="Bill" from="Oscar" />
    <Greeter person="Dennis" from="Oscar" />
    <Greeter person="Okarun" from="Momo" /> */}
    {/* <Die numSides={20}/>
    <Die />
    <Die numSides={8}/> */}
    <ListPicker values={[1,2,3]}/>
    <ListPicker values={["a", "b", "c"]}/>
  </div>
}

export default App
