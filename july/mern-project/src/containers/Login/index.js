import { useState } from "react";
import "./index.scss";
import * as yup from "yup";
import Toast from "../../components/Toast";
import InputField from "../../components/InputField";

let schema = yup.object().shape({
  password: yup.string().required().min(6),
  email: yup.string().required().email(),
});

const Login = () => {
  console.log(process.env.REACT_APP_SECRET_KEY);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    schema
      .validate({ email, password }, { abortEarly: false })
      .then((values) => {
        setMessage("");
        console.log(values);
      })
      .catch((err) => {
        setMessage(err.errors[0]);
      });
  };
  return (
    <form className="login-form" onSubmit={submitHandler}>
      <Toast message={message} />
      <InputField
        value={email}
        setValue={setEmail}
        name="email"
        fieldId="inputEmail"
        label="Email"
      />

      <InputField
        value={password}
        setValue={setPassword}
        name="password"
        fieldId="inputPassword"
        label="Password"
      />

      <div className="mb-3 row">
        <div className="col-sm-10">
          <button className="btn btn-outline-primary" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
