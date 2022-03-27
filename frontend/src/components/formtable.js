import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const FormTable = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const state = {
    button: 1
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('name', name)
    data.append('email', email)
    data.append('phone', phone)
    if (state.button === 1) {
      console.log("Button 1 clicked!");

      try {
        let res = await axios.post('http://127.0.0.1:8000/api/add/', data
        );
        if (res.status === 200) {
          console.log(res.data)
          navigate(`/thanks/${res.data}`)

        }
      } catch (err) {
        console.log(err);
      }

    };

    if (state.button === 2) {
      console.log("Button 2 clicked!");
      try {
        let res = await axios.post('http://127.0.0.1:8000/api/disable/', data
        );
        if (res.status === 200) {
          navigate(`/thanks/${res.data}`)

        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Questions</legend>

        <div class="form-group">
          <label class="col-form-label mt-4" for="exampleInputText">Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Input name"
            required
            id="exampleInputText"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            required
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        <div class="form-group">
          <label class="col-form-label mt-4" for="exampleInputText">Phone</label>
          <input
            type="text"
            class="form-control"
            required
            placeholder="Input Phone number"
            id="exampleInputText"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <Row className='g-3'>
          <Col md>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => (state.button = 1)}
            >
              Add Experiments</button>
          </Col>

          <Col md>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => (state.button = 2)}
            >
              Default Experiments</button>
          </Col>
        </Row>


      </fieldset>
    </form>
  );
};

export default FormTable;