import { Route, Routes } from "react-router-dom";

import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/Home/Home";
import SignupForm from "./components/SignupForm/SignupForm";


function App() {
  return (
    <div  >
      <Routes>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/signup' element={ <SignupForm />}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
