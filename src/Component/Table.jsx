import React, { useState } from "react";

export default function Table() {
  const [userList, setUserList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const deleteItem = (i) => {
    const newList = [...userList];
    newList.splice(i, 1);
    setUserList(newList);
  };

  return (
    <>
      <div className="container">
        <h4 className="mt-4 mb-4" style={{ color: "Black" }}>
          User List
        </h4>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={user.name}
                      onChange={(e) => {
                        const newName = e.target.value;
                        const newDesg = userList[index].desg;
                      }}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  <input type="text" value={user.desg} />
                </td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
