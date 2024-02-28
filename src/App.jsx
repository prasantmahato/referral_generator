import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import UserDetailsForm from "./components/UserDetailsForm";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
    const [form, setForm] = useState({
        username: "",
        role: "Software Developer",
        company: "",
        jobid: "",
        url: "",
    });

    const [userDetails, setUserDetails] = useState({
        name: "",
        resume: "",
        email: "",
    });

    const handleUserDetailsChange = (e) => {
        console.log("Values: ", e.target.value);
        const { name, value } = e.target;
        setUserDetails((prevForm) => ({ ...prevForm, [name]: value }));
        console.log("UserDetails: ", userDetails);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Additional logic for form submission if needed
    };

    const handleReset = () => {
        setForm({
            username: "",
            role: "Software Developer",
            company: "",
            jobid: "",
            url: "",
        });
    };

    const handleCopyClick = () => {
        const textToCopy = `Hi ${form.username},
Hope you are doing good.

I came across a ${form.role} role at ${form.company} that I’m interested in applying to. Would you be open to referring me to the role?

Here is the job description:
${form.url}

JOB ID: ${form.jobid}

Attaching my resume for your reference: ${userDetails.resume}

My mail: ${userDetails.email}

Thank you,
${userDetails.name}`;

        copyToClipboard(textToCopy);
    };

    const copyToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };

    return (
        <>
            <h1 className="title"><mark>Referral</mark> Request Message Generator</h1>
            <div className="container">
                <div className="user-details-form-container">
                    <UserDetailsForm
                        form={userDetails}
                        handleChange={handleUserDetailsChange}
                        handleSubmit={handleSubmit}
                        handleReset={handleReset}
                    />
                </div>
                <div className="form-section-container">
                    <Form
                        form={form}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleReset={handleReset}
                    />
                    <Section
                        formData={{ ...form, ...userDetails }}
                        handleCopyClick={handleCopyClick}
                    />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default App;
