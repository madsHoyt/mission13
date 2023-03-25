import React from 'react';
import './App.css';
import { useState } from 'react';

function GoButton(props: any) {
  return (
    <div>
      <button onClick={props.BlahClick}>Go!</button>
      <br></br>
    </div>
  );
}
function AmountOfGo(props: any) {
  return <label>{props.num}</label>;
}
function App() {
  //now in app because you want all the children to have access
  const [count, setCount] = useState(0);
  const incrementGo = () => setCount(count + 1);
  return (
    <div>
      <GoButton blahClick={incrementGo} />
      {/*or you could do this */}
      {/*<GoButton blahClick={() => setCount(count + 1)} />*/}
      {/*giving a property */}
      <AmountOfGo num={count} />
    </div>
  );
}
export default App;
/* class Welcome extends React.Component {
  render() {
    return <h1>This website gives some rando numbers</h1>;
  }
}
class Conclusion extends React.Component {
  render() {
    return <h1>Hope you enjoyed</h1>;
  }
}
//function component just returns
function Rando() {
  return (
    <div>
      //ust random is the class random() is referencing the instance of the class
      <h2>Random Number: {Math.random()}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome />
      <Rando />
      <br />
      <Conclusion />
    </div>
  );
} */
