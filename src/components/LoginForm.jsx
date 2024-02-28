import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("", "");
  const [password, setPassword] = useState("", "");
  const usernameHandler = (dets) => {
    setUsername(dets.target.value);
  };
  const passwordHandler = (dets) => {
    setPassword(dets.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Enter your Email"
            value={username}
            onChange={usernameHandler}
          ></input>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={passwordHandler}
          ></input>
          <br />
          <button onClick={submitHandler}>Submit</button>
        </form>
      </center>
    </div>
  );
};
export default LoginForm;
