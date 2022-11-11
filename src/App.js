import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, useNavigate } from "react-router-dom";
import Base from "./Components/Layout/Base";
import Home from "./Pages/Home";
import Form from "./Components/Elements/Form";
import { useState } from "react";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAction = (id) => {
    // console.log(id);
    const Authantication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(Authantication, email, password)
        .then((res) => {
          navigate("/home");
          sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
          addDoc(collection(db, "users"), {
            email: email,
            password: password,
          }).then((docRef) =>
            // console.log("Document written with ID: ", docRef.id)
            toast.info("Register successfully")
          );
        })
        .catch((e) => {
          if (e.code === "auth/wrong-password") {
            toast.error("please check the password");
          }
          if (e.code === "auth/user-not-found") {
            toast.error("please check the email");
          }
        });
    }
    if (id === 1) {
      signInWithEmailAndPassword(Authantication, email, password)
        .then((res) => {
          navigate("/home");
          sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
        }).then((docRef) =>
        // console.log("Document written with ID: ", docRef.id)
        toast.info("Login successfully")
      )
        .catch((e) => {
          if (e.code === "auth/wrong-password") {
            toast.error("please check the password");
          }
          if (e.code === "auth/user-not-found") {
            toast.error("please check the email");
          }
        });
    }

   
  };

  return (
    <>
      <>
        <Base>
          <ToastContainer />
          <Routes>
            <Route path="/home" element={<Home email={email} setEmail={setEmail}  />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <Form
                email={email}
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
                email={email}
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
