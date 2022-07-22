import { useState } from "react";
import datas from "./data.js";

function moveLeft(index,length){
  index -= 1;
  if(index < 0){
    index = length - 1 ;
  }
  return index;
}

function moveRight(index,length){
  index += 1;
  if(index >= length){
    index = 0 ;
  }
  return index;
}
let index = 0 ;
let length = datas.length;

function Data(){
  const [state,setState] = useState(datas[index]);
  async function leftClick(){
    index = await moveLeft(index,length);
    await setState(datas[index]);
  }
  async function rightClick(){
    index = moveRight(index,length);
    await setState(datas[index]);
  }
  return <>
      <div className = "Picture">
        <img src = {state.image} alt = "image"/>
      </div>
      <div className = "Name">{state.name}</div>
      <div className = "Age">Age : {state.age}</div>
      <div className="Buttons">
        <button className = "left" onClick={leftClick}>{"<"}</button>
        <button className = "right" onClick={rightClick}>{">"}</button>
      </div>
  </>;
}

function Card(props){
    return <div className = "Card">
      <Data/>
    </div> ;
}

function App() {
  return (
    <div className = "Background">
      <Card/>
    </div>
  );
}

export default App;
