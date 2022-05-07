//Form.tsx

import React from "react";

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: any) => void;
}

const Form = (props: FormPropsType) => {

  return (
    <form action="">
      <input type="text"  name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
      <button type="submit" onClick={props.getWeather}>Get Weather</button>
    </form>
  );
};

export default Form;
// https://api.weatherapi.com/v1/current.json?key=056558385454427188155609220705&q=London&aqi=no
