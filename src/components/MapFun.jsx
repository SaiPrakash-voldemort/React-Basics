const MapFun = () => {
  const ar = [
    "GojoSatoru",
    "Ryomen Sukuna",
    "Sung Jin Woo",
    "Ayanakoji Kiyotaka",
    "Cha Hae In",
  ];
  const Objar = [
    {
      Name: "GojoSatoru",
      Powers: "Infinity",
    },
    {
      Name: "Ryomen Sukuna",
      Powers: "Cleave and Dismantle",
    },
    {
      Name: "Sung Jin Woo",
      Powers: "Shadow Monarch",
    },
    {
      Name: "Ayanakoji Kiyotaka",
      Powers: "Manipulation,Strength",
    },
  ];
  return (
    <div>
      {ar.map((value, index) => (
        <li key={index}>
          {index + 1}.{value}
        </li>
      ))}
      {Objar.map((value, index) => (
        <div>
          <h1 key={index}>{value.Name}</h1>
          <h2 key={index}>{value.Powers}</h2>
        </div>
      ))}
    </div>
  );
};
export default MapFun;
