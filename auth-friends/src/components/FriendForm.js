import React from "react";
import { useForm } from "react-hook-form";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = props => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    // axiosWithAuth()
    //   .post("http://localhost:5000/api/friends", {
    //     id: Date.now(),
    //     name: data.name,
    //     age: data.age,
    //     email: data.email
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
    props.addFriend(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          placeholder="Name"
          ref={register({ required: true })}
        />
      </label>
      <br />
      <label htmlFor="age">
        Age:
        <input
          type="text"
          name="age"
          placeholder="Age"
          ref={register({ required: true })}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          placeholder="Email"
          ref={register({ required: true })}
        />
      </label>
      <br />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default FriendForm;
