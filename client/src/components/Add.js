import React, { useState, useEffect } from "react";
import axios from "axios";

import toast, { Toaster } from 'react-hot-toast';

const Add = () => {
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
  });
  useEffect(() => {
    const getAllData = async () => {
      const res = await axios.get("/api/v1/users");
      setUsers(res.data);
    };
    getAllData();
  }, [render]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if( !input.age || !input.name || !input.email){
      toast.error("Plz enter all details")
      return
    }
    await axios.post("/api/v1/users", input);
    setRender(true);
    setInput({
      name: "",
      email: "",
      age: "",
    });
    toast.success('Successfully Added!')
  };

  // const handelDelete = async (id) => {
  //   toast.success('Deleted successfully')
  //   await axios.delete(`/api/v1/users/${id}`);
  //   const newUsers = users.filter((item) => {
  //     return item._id !== id;
  //   });
  //   setUsers(newUsers);
  // };
  return (
    <>
     <div><Toaster/></div>
      <div className="container py-4">
        <div className="row">
        <div className="flex items-center justify-center bg-blue-500 text-white text-3xl">
  <h1 className="mx-2 my-2 py-2">STUDENT DETAILS</h1>
</div>
          <div className="col-md-6">
            <form className="py-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  value={input.name}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Age
                </label>
                <input
                  value={input.age}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  name="age"
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Submit
    </button>
            </form>
          </div>
         
        </div>
      </div>
      
    </>
  );
};

export default Add;
