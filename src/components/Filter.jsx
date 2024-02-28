const Filter = () => {
  const ar = [
    "GojoSatoru",
    "Ryomen Sukuna",
    "Sung Jin Woo",
    "Ayanakoji Kiyotaka",
    "Cha Hae In",
  ];
  const nums = [1, 2, 3, 4, 5, 6];
  const filteredNames = ar.filter((names) => names.includes("G"));
  const filteredNums = nums.filter((nums) => nums > 2);
  return (
    <div>
      {filteredNames.map((value, index) => (
        <h1 key={value}>
          {index + 1}.{value}
        </h1>
      ))}
      {filteredNums.map((value, index) => (
        <h1 key={value}>
          {index + 1}.{value}
        </h1>
      ))}
    </div>
  );
};
export default Filter;
