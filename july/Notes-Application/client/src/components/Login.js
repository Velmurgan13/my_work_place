import axios from "axios";
import React from "react";
import { useState } from "react";
export default function Login() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const [err, setErr] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/register", {
        username: user.name,
        email: user.email,
        password: user.password,
      });
      setUser({ name: "", email: "", password: "" });
      setErr(res.data.msg);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };
  return (
    <section>
      <div className="login">
        <h2>Login</h2>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            id="login-email"
            required
            value={user.email}
            onChange={onChangeInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            id="login-password"
            required
            value={user.password}
            autoComplete="true"
            onChange={onChangeInput}
          />
          <button type="submit">Login</button>
          <p>
            You Don't Have An Account ?<span>Register Now</span>
          </p>
          <h3>{err}</h3>
        </form>
      </div>
      <div className="Register">
        <h2>Register</h2>
        <form onSubmit={registerSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            id="register-name"
            required
            value={user.name}
            onChange={onChangeInput}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            id="register-email"
            required
            value={user.email}
            onChange={onChangeInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            id="register-password"
            required
            value={user.password}
            autoComplete="true"
            onChange={onChangeInput}
          />
          <button type="submit">Register</button>
          <p>
            Already Have An Account ?<span>Login Now</span>
          </p>
          <h3>{err}</h3>
        </form>
      </div>
    </section>
  );
}
