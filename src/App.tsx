//App.tsx

import './App.css';
import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });

  const getWeather = (e:any) => {
    e.preventDefault();
    fetch("https://api.weatherapi.com/v1/current.json?key=056558385454427188155609220705&q=London&aqi=no").then(res => res.json().then(data => 
      setResults({
        country: data.location.country,
        cityName: data.location.name,
        temperature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
    })
    ));
  }
  return (
    <div className="App">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results} />
    </div>
  );
}

export default App;
