import { useEffect, useState } from "react";

const FetchEx = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      {data.map((country, index) => (
        <img key={index} src={country.flags.png} alt="flag" width={100} />
      ))}
    </div>
  );
};
export default FetchEx;
