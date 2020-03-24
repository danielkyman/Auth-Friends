import React from "react";
import { useForm } from "react-hook-form";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    axiosWithAuth()
      .post("http://localhost:5000/api/login", {
        username: data.username,
        password: data.password
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friendslist");
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login">
      <h1>Log In</h1>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          name="username"
          placeholder="Username"
          ref={register({ required: true })}
        />
        <br />
        {errors.username && <span>Password is required!</span>}
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="text"
          name="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        <br />
        {errors.password && <span>Password is required!</span>}
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
