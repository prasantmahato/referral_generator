import React, { useEffect } from "react";

const UserDetailsForm = ({form, handleChange, handleSubmit, handleReset}) => {
    
    return (
      <div className="form">
        <h4>Fill in your details:</h4>
        <form action="/" method="post">
          <label htmlFor="name">Name: </label> <br />
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />{" "}
          <br />
          <label htmlFor="email">Email: </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />{" "}
          <br />
          <label htmlFor="resume">Resume URL: </label>
          <br />
          <input
            type="text"
            name="resume"
            id="resume"
            value={form.resume}
            onChange={handleChange}
          />{" "}
          <br />
          <br />
          {/* <div className="buttons">
            <button type="button" onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
            <button type="reset" onClick={handleReset} className="btn btn-secondary">
              Reset
            </button>
          </div> */}
        </form>
      </div>
    );
  };
  
  export default UserDetailsForm;
  