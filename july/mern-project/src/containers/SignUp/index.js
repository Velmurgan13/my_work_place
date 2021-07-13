import { useState } from "react";
import "./index.scss";
import * as yup from "yup";
import Toast from "../../components/Toast";
import InputField from "../../components/InputField";

let schema = yup.object().shape({
  firstName: yup.string().required().max(15),
  email: yup.string().required().email(),
  // mobileNumber: yup.integer().required().min(10).max(10),
  password: yup.string().required().min(6),
});

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // const [mobileNumber, setmobileNumber] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    schema
      .validate({ firstName, email, password }, { abortEarly: false })
      // .validate({ firstName, email, mobileNumber, password })
      .then((values) => {
        setMessage("");
        console.log(values);
      })
      .catch((err) => {
        setMessage(err.errors[0]);
      });
  };
  return (
    <form className="signup-form" onSubmit={submitHandler}>
      <Toast message={message} />
      <InputField
        value={firstName}
        setValue={setFirstName}
        name="firstName"
        fieldId="inputFirstName"
        label="First Name"
      />

      <InputField
        value={email}
        setValue={setEmail}
        name="email"
        fieldId="inputEmail"
        label="Email"
      />

      {/* <InputField
        value={mobileNumber}
        setValue={setmobileNumber}
        name="mobileNumber"
        fieldId="inputMobileNumber"
        label="Mobile"
      /> */}

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

export default SignUp;
