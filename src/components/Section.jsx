import React, { useState } from "react";

const Section = ({ formData, handleCopyClick }) => {
  const { username, role, company, jobid, url, name, resume, email } = formData;

  const [copyStatus, setCopyStatus] = useState("default");
  const [buttonClass, setButtonClass] = useState("btn btn-primary float-right");

  const handleCopyButtonClick = () => {
    handleCopyClick();
    setCopyStatus("copied");
    setButtonClass("btn btn-success float-right");
    setTimeout(() => {
      setCopyStatus("default");
      setButtonClass("btn btn-primary float-right");
    }, 3000);
  };

  return (
    <div className="section">
        <div>
          <button
            onClick={handleCopyButtonClick}
            className={buttonClass}
            data-toggle="tooltip" data-placement="top" title="Copy to clipboard" data-bs-delay="0"
          >
            {copyStatus === "default" ? "Copy Text" : "Copied"}
          </button>
        </div>
          <textarea
            rows="25"
            cols="60"
            value={`Hi ${username},
Hope you are doing good.

I came across a ${role} role at ${company} that I’m interested in applying to. Would you be open to referring me to the role?

Here is the job description:
${url}

JOB ID: ${jobid}

Attaching my resume for your reference: ${resume}

My mail: ${email}

Thank you,
${name}`}
            readOnly
          />
    </div>
  );
};

export default Section;
