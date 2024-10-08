import { ChangeEvent, FormEvent, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [firstName, setFisrtname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   const [formData, setFormData] = useState({
  //     name: "",
  //     lastname: "",
  //     email: "",
  //     message: "",
  //   });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(firstName, lastName, email, message);
    e.preventDefault();
  };
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="contact">
        <input
          type="text"
          name="FirstName"
          id="FirstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFisrtname(e.target.value);
          }}
        />

        <input
          type="text"
          name="Lastname"
          id="Lastname"
          placeholder="Last Name"
          value={lastName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setLastname(e.target.value);
          }}
        />
        <input
          type="text"
          name="LastName"
          id="LastName"
          placeholder="Email Address"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />

        <textarea
          id=""
          name="Message"
          value={message}
          placeholder="Input Message"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
        />

        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
