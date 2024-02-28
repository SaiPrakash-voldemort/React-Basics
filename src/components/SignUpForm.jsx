import { useState } from "react";
import axios from "axios";
const SignUpForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = data;
  const changeHandler = (dets) => {
    setData({ ...data, [dets.target.name]: [dets.target.value] });
    console.log(data);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://basicsofreact-default-rtdb.firebaseio.com/register.json",
        data
      )
      .then(() => alert("Submitted Successfully"));
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Sign Up Form</h1>
        <input
          type="text"
          onChange={changeHandler}
          name="username"
          value={username}
          placeholder="Enter Your User Name"
        ></input>
        <br />
        <input
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
          placeholder="Enter Your Email"
        ></input>
        <br />
        <input
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
          placeholder="Enter Your Password"
        ></input>
        <br />
        <input
          type="password"
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
        ></input>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SignUpForm;
