import Inputs from "./Inputs";
import { FaUser, FaLock } from "react-icons/fa";
import BtnForm from "./btnForm";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="wrapper">
      <form className="login-form">
        <h1 className="title">Login</h1>
        <Inputs tipo="email" legenda="Email" icon={<FaUser />} />
        <Inputs tipo="password" legenda="Password" icon={<FaLock />} />
        <BtnForm />
        <span className="sign-up">
          Primeiro acesso?
          <a href="#">cadastre-se!</a>
        </span>
      </form>
    </div>
  );
}

export default LoginForm;
