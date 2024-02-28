import { useEffect, useState } from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  //   function buttonHandler(event) {
  //     event.preventDefault();
  //     console.log("Hello");
  //   }

  // Normal way of declaring use state
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [count, setCount] = useState(0);

  // use useEffect usage
  //   useEffect(() => console.log(count), [count]);
  // console.log(count);

  const [data, setData] = useState("", "");
  const { userName, password } = data;
  // console.log(email);
  // console.log(password);

  const change = (dets) => {
    setData({ ...data, [dets.target.name]: [dets.target.value] });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Change</button>

      <div className={styles.contactMeForm}>
        <h1>Contact me:</h1>
        <form onSubmit={console.log(data)}>
          <input
            type="Email"
            placeholder="Email"
            onChange={change}
            value={userName}
            // onChange={(dets) => setEmail(dets.target.value)}
          ></input>
          <input
            type="Password"
            placeholder="Password"
            // onChange={(dets) => setPassword(dets.target.value)}
            onChange={change}
            value={password}
          ></input>
          <button type="submit" name="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    // Conditional Rendering
    // <div>
    //   {/* <form>
    //     <input type="email" placeholder="Enter Email"></input>
    //     <button onClick={buttonHandler}>Submit</button>
    //   </form> */}
    //   {age > 18 ? (
    //     <div>
    //       <h1>You are eligble for voting</h1>
    //     </div>
    //   ) : (
    //     <div>
    //       <h1>You are not eligible for voting</h1>
    //     </div>
    //   )}
    // </div>
  );
};
export default Contact;
