import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [searchString, setSearchString] = useState("");

  const debounceTimer = useRef(null);
  const throttleTimer = useRef(null);

  const handleDebounceChange = (event) => {
    const value = event.target.value;

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      setSearchString(value);
      console.log("Debounce 검색 쿼리:", value);
    }, 500);
  };

  const handleThrottleChange = (event) => {
    const value = event.target.value;

    if (!throttleTimer.current) {
      throttleTimer.current = setTimeout(() => {
        setSearchString(value);
        console.log("Throttle 검색 쿼리:", value);
        throttleTimer.current = null;
      }, 1000);
    }
  };

  return (
    <div className="container">
      <h1>
        debounce와 throttle을
        <br />
        이용한 검색
      </h1>
      <div>
        <h2>Debounce</h2>
        <input
          type="text"
          placeholder="Debounce를 이용한 검색..."
          onChange={handleDebounceChange}
        />
      </div>
      <div>
        <h2>Throttle</h2>
        <input
          type="text"
          placeholder="Throttle을 이용한 검색..."
          onChange={handleThrottleChange}
        />
      </div>
      <p>{searchString}</p>
    </div>
  );
}

export default App;
