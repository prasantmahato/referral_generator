import React from 'react';

const Form = ({ form, handleChange, handleSubmit, handleReset }) => {
  return (
    <div className="form">
      <h3>Please fill company details</h3>
      <form action="/" method="post">
        <label htmlFor="username">Name <small>(of the person you are requesting for referral)</small>: </label> 
        <input
          type="text"
          name="username"
          id="username"
          value={form.username}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="role">Role: </label>
        <br />
        <input
          type="text"
          name="role"
          id="role"
          value={form.role}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="company">Company: </label>
        <br />
        <input
          type="text"
          name="company"
          id="company"
          value={form.company}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="jobid">Job ID: </label>
        <br />
        <input
          type="text"
          name="jobid"
          id="jobid"
          value={form.jobid}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="url">URL: </label>
        <br />
        <input
          type="url"
          name="url"
          id="url"
          value={form.url}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        {/* <div className="buttons">
          <button type="submit" onClick={handleSubmit} className='btn btn-secondary'>
            Submit
          </button>
          <button type="reset" onClick={handleReset} className='btn btn-primary'>
            Reset
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Form;
