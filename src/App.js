import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Base from "./Components/Layout/Base";
import Home from "./Pages/Home";
import Form from "./Components/Elements/Form";
import { useState } from "react";
import { app } from "./firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  CreateUserWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate()

  const handleAction = (id) => {
    // console.log(id);
    const Authantication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(Authantication, email, password).then(
        (res) => {
          navigate("/home")
          sessionStorage.setItem("auth", res._tokenResponse.refreshToken)
        }
      );
    }
  };

  return (
    <>
      <>
        <Base>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route
              path="/login"
              element={
                <Form
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleAction={() => handleAction(1)}
                  title="login"
                />
              }
            />
            <Route
              path="/register"
              element={
                <Form
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleAction={() => handleAction(2)}
                  title="register"
                />
              }
            />
          </Routes>
        </Base>
      </>
    </>
  );
}

export default App;
