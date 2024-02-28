import AudioEx from "../components/AudioEx";
import AxiosEx from "../components/AxiosEx";
import Contact from "../components/Contact";
import FetchEx from "../components/FetchEx";
import Filter from "../components/Filter";
import ImagesEx from "../components/ImagesEx";
import MapFun from "../components/MapFun";
import Name from "../components/Name";
import SignUpForm from "../components/SignUpForm";
import UseRefEx from "../components/UseRefEx";
import Usercard from "../components/Usercard";
import VideoEx from "../components/VideoEx";
import LoginForm from "../components/loginForm";
import userData from "../utils/Data";
const About = ({ name }) => {
  return (
    <div>
      <UseRefEx />
      {/* <VideoEx /> */}
      {/* <AudioEx /> */}
      {/* <ImagesEx /> */}
      {/* <AxiosEx /> */}
      {/* <FetchEx /> */}
      {/* <SignUpForm /> */}
      {/* <Name name={name} />
      <Contact />
      <MapFun />
      <Filter />
      <LoginForm /> */}
      {/* {userData.map(({ name, age, powers }) => (
        <Usercard name={name} age={age} powers={powers} />
      ))} */}
    </div>
  );
};
export default About;
