import React from "react";
import "./style.css";

export default function App() {
  const [counter,setCounter]=React.useState(45);
  const handleClick = (incrementValue) =>setCounter(counter+incrementValue);
  return (
    <div>
    <Button onClickFunction={handleClick} increment={1} />
    <Button onClickFunction={handleClick} increment={2} />
    <Button onClickFunction={handleClick} increment={3} />
    <Button onClickFunction={handleClick} increment={4} />
    <Button onClickFunction={handleClick} increment={5} />
    <Display message={counter} />
    </div>
  );
}

function Display(props){
return(
<div>
{props.message}
</div>
);
}

function Button(props){
  const CClick=()=>props.onClickFunction(props.increment);
  return(
    <button onClick={CClick}>
    +{props.increment}
    </button>
  );
  
}
