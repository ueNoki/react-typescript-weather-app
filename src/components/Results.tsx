// Result.tsx

type ResultsStateType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  }
}


const Result = ({results}: ResultsStateType) => {
  const { cityName, country, temperature, conditionText, icon } = results;
  return (
    <div>
      {cityName && <div>{cityName}</div>}
      {country && <div>{country}</div>}
      {temperature && <div>{temperature}<span>℃</span></div>}
      {conditionText &&
      <div>
        <img src="{icon}" alt="icon" />
          <span>{conditionText}</span>
        </div>
      }
    </div>
  );
};

export default Result;
