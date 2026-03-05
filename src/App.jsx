
import './App.css'
import Bird from './Bird'
import Greeter from './Greeter'
import Die from './Die'

function App() {
  return <div>
    {/* <Greeter person="Bill" from="Oscar" />
    <Greeter person="Dennis" from="Oscar" />
    <Greeter person="Okarun" from="Momo" /> */}
    <Die numSides={20}/>
    <Die numSides={6}/>
    <Die numSides={8}/>
  </div>
}

export default App
