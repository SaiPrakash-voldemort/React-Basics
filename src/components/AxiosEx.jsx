import { useEffect, useState } from "react";
import axios from "axios";

const AxiosEx = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setData(response.data));
  }, []);
  return (
    <div>
      <h1>Hemlo</h1>
      {data.map((country, index) => (
        <img key={index} src={country.flags.png} alt="flag" width={100} />
      ))}
    </div>
  );
};
export default AxiosEx;
