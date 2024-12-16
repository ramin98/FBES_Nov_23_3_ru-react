import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //       console.log(users);
  //     });
  // }, [value]);

  // useEffect(() => {
  //   function getKey(ev) {
  //     console.log(ev.key);
  //   }

  //   document.addEventListener("keydown", getKey);

  //   return () => {
  //     document.removeEventListener("keydown", getKey);
  //   };
  // }, [value]);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setCount((c) => c + 1);
        console.log(count)
      }, 1000);
    } 

    return () => {
      clearInterval(timer);
    }
  }, [isActive]);

  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "STOP" : "PLAY"}
      </button>
      <p>{count}</p>
      <input type="text" onChange={(ev) => setValue(ev.target.value)} />
      <ul>
        {users.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
