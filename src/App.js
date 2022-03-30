// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
  // let myVar = 12;
  return (
    <div classNameName="App">
      {/* <header classNameName="App-header">
        <div>{myVar*2+12}</div>
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Header/>
      <Todos/>
      <Footer/>

      <p>My App works</p>
    </div>
  );
}

export default App;
