// import { useRef, useState } from "react";
// import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainComp from "./components/MainComp";

// function App() {
//   // let [login, setLogin] = useState("");
//   // let [name, setName] = useState("");
//   // let [surname, setSurname] = useState("");
//   // let [password, setPassword] = useState("");
//   // let [email, setEmail] = useState("");
//   // let [inputsValue, setInputsValue] = useState({
//   //   login: "",
//   //   name: "",
//   //   surname: "",
//   //   password: "",
//   //   email: "",
//   // });
//   // let isActive = useRef(true);
//   // let input = useRef(null);

//   // function handleGetValues(ev) {
//   //   setInputsValue({ ...inputsValue, [ev.target.name]: ev.target.value });
//   //   console.log(inputsValue);
//   //   console.log(input);
//   //   checkValue();
//   // }

//   // function checkValue() {
//   //   console.log(isActive);

//   //   if (
//   //     [
//   //       inputsValue.login,
//   //       inputsValue.name,
//   //       inputsValue.surname,
//   //       inputsValue.password,
//   //       inputsValue.email,
//   //     ].every((item) => item.length >= 8)
//   //   ) {
//   //     return false;
//   //   } else {
//   //     return true;
//   //   }
//   // }

//   // isActive.current = checkValue();

//   return (
//     <>
//       {/* <Header/>
//      <MainComp/>
//      <Footer/> */}
//       <form>
//         <input
//           type="text"
//           ref={input}
//           onChange={handleGetValues}
//           name="login"
//           placeholder="login"
//         />
//         <input
//           type="text"
//           onChange={handleGetValues}
//           name="name"
//           placeholder="name"
//         />
//         <input
//           type="text"
//           onChange={handleGetValues}
//           name="surname"
//           placeholder="surname"
//         />
//         <input
//           type="text"
//           onChange={handleGetValues}
//           name="password"
//           placeholder="password"
//         />
//         <input
//           type="text"
//           onChange={handleGetValues}
//           name="email"
//           placeholder="email"
//         />
//         <button disabled={isActive.current}>REGISTER</button>
//       </form>
//       <p>{inputsValue.login}</p>
//       <p>{inputsValue.name}</p>
//       <p>{inputsValue.surname}</p>
//       <p>{inputsValue.password}</p>
//       <p>{inputsValue.email}</p>
//     </>
//   );
// }

// export default App;



