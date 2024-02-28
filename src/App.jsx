import About from "./screens/About";
import MainScreen from "./screens/MainScreen";
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <About name={"Gojo Satoru"} />
      {/* <BrowserRouter>
        <MainScreen />
        <Routes>
          <Route path="/SignUpForm" exact Component={SignUpForm} />
          <Route path="/About" exact Component={About} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
export default App;
