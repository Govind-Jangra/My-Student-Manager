import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Details = () => {
    const [users, setUsers] = useState([]);
    const [render, setRender] = useState(false);
    useEffect(() => {
        const getAllData = async () => {
          const res = await axios.get("/api/v1/users");
          setUsers(res.data); 
        };
        getAllData();
      }, [render]);
    const handelDelete = async (id) => {
        toast.success('Deleted successfully')
        await axios.delete(`/api/v1/users/${id}`);
        const newUsers = users.filter((item) => {
          return item._id !== id;
        });
        setUsers(newUsers);
      };
  return (
    <>
    <div><Toaster/></div>
    <div className=" mx-2 my-2 flex items-center justify-center bg-blue-500 text-white text-3xl">
  <h1 className="mx-2 my-2 py-2">STUDENT LIST</h1>
</div>
      <div className="col-md-6 mx-16 py-4">
      <div  style={{ maxHeight: "100vh" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Age</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => {
                    return (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                          <Link to={`/edit/${user._id}`}>
                            <button className="btn btn-primary">Edit</button>
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => handelDelete(user._id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            </div>
          </div>
    </>
  )
}

export default Details
