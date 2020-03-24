import React, { useEffect, useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import FriendForm from "./FriendForm";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const reload = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };

  const addFriend = data => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", {
        id: Date.now(),
        name: data.name,
        age: data.age,
        email: data.email
      })
      .then(res => {
        console.log(res);
        reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="friends-list">
      <h1>Friends</h1>
      <FriendForm addFriend={addFriend} />
      {friends.map(friend => (
        <div key={friend.id}>
          <h3 className="friend-name">{friend.name}</h3>
          <h4>{friend.age} years old</h4>
          <h4>Email: {friend.email}</h4>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
