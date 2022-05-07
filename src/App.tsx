import './App.css';
import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [city, setCity] = useState<string>("");
  const getWeather = (e:any) => {
    e.preventDefault();
    fetch("https://api.weatherapi.com/v1/current.json?key=056558385454427188155609220705&q=London&aqi=no").then(res => res.json().then(data => console.log(data)));
  }
  return (
    <div className="App">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result />
    </div>
  );
}

export default App;
