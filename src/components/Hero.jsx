import React from 'react'

function Hero() {
  return (
    <div>
        <p>Hi {name},</p>
        <p>Hope you are doing good.</p>
        <p>I came across an {role} role at {company} that I’m interested in applying to. Would you be open to referring me to the role?</p>
        <p>Here is the job description:</p>
        <p>{url}</p>
        <p>JOB ID: {jobid}</p>
        <p>Attaching my resume for your reference: https://drive.google.com/file/d/1kPQrvIEVqnDOXBXAvjs2kKBSlZtfpAl4/view?usp=drive_link</p>
        <p>My mail: prasantmahato33@gmail.com</p>
        <p>Thank you,</p>
        <p>Prasant Mahato</p>
    </div>
  )
}

export default Hero