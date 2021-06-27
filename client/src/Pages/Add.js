import React, { useEffect, useState } from "react";
import axios from "axios";
function Add() {
  useEffect(() => {
    getData();
  }, []);
  const [input, setInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };
  const getData = () => {
    let response = axios.get("http://localhost:3002/users");
  };
  const inputHandler = (event) => {};
  return (
    <>
      <div className="container">
        <div className="container">
          <div className="container">
            <div className="container">
              <form onSubmit={submitHandler}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(event) => {
                      inputHandler(event);
                    }}
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={(event) => {
                      inputHandler(event);
                    }}
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
