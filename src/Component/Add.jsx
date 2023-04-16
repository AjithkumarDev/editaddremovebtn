import React from "react";

export default function Add() {
  const [userList, setUserList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const addUser = (username, desg) => {
    const newUser = {
      id: userList.length + 1,
      name: username,
      desg: desg,
    };
    setUserList([...userList, newUser]);
  };
  return (
    <div>
      <Modal
        addUser={addUser}
        editIndex={editIndex}
        saveEdit={saveEdit}
        userList={userList}
      />
    </div>
  );
}
