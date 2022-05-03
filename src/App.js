import React, { useState, useEffect } from "react";

import "./App.css";
import Main from "./components/Main";

function App() {
  const [covidInfo, setCovidInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCovidStatisticsHandler();
  }, []);

  console.log(covidInfo);

  async function fetchCovidStatisticsHandler() {
    setIsLoading(true);
    const response = await fetch(
      "https://api.covid19api.com/dayone/country/lithuania"
    );
    const data = await response.json();

    const lastObject = data.length - 1;
    const newestData = data[lastObject];
    setCovidInfo(newestData);
    setIsLoading(false);
  }

  return (
    <div className="App">
      {!isLoading && <Main statistics={covidInfo} />}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
