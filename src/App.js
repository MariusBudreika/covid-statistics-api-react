import React, { useState, useEffect, useCallback } from "react";

import "./App.css";
import Main from "./components/Main";

function App() {
  const [covidInfo, setCovidInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCovidStatisticsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.covid19api.com/dayone/country/lithuania"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const lastObject = data.length - 1;
      const newestData = data[lastObject];
      setCovidInfo(newestData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCovidStatisticsHandler();
  }, [fetchCovidStatisticsHandler]);

  let content = <Main statistics={covidInfo} />;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className="App">
      <section>{content}</section>
    </div>
  );
}

export default App;
