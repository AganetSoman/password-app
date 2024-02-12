import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import bg from "./assets/Images/bg.jpeg"

function App() {
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{backgroundImage:`url(${bg})`}}>
      <Routes>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/signup' element={<SignupForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
