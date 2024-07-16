// import Button from "./Button"
// import styles from "./App.module.css"
import { useState, useEffect } from "react";

function Hello() {
  useEffect(()=>{
    console.log('hi :)');
    return () => console.log('bye :(');
  }, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () =>setShowing((prev) => !prev)
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}
// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick =()=> setValue((prev) => prev + 1);
//   const onChange = (e) => setKeyword(e.target.value);
//   console.log('i run all the time');
//   useEffect(() => {
//     console.log('i run only once');
//   }, []);
//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search" />
//       <h1 className={styles.title}>hello!</h1>
//       <h2>counter : {counter}</h2>
//       <Button text={"Continue"}/>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

export default App;
