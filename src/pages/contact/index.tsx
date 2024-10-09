import "./contact.css";

interface FormElements extends HTMLFormControlsCollection {
  firstname: HTMLInputElement;
  lastname: HTMLInputElement;
  email: HTMLInputElement;
  usernameInput: HTMLInputElement;
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const Contact = () => {
  // const [firstName, setFisrtname] = useState("");
  // const [lastName, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  //   const [formData, setFormData] = useState({
  //     name: "",
  //     lastname: "",
  //     email: "",
  //     message: "",
  //   });

  const handleSubmit = (e: React.FormEvent<UsernameFormElement>) => {
    e.preventDefault();
    console.log(
      e.currentTarget.elements.firstname.value,
      e.currentTarget.elements.lastname.value,
      e.currentTarget.elements.email.value,
      e.currentTarget.elements.usernameInput.value
    );
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="contact">
        <input
          type="text"
          name="FirstName"
          id="firstname"
          placeholder="First Name"
          // value={firstName}
          // onChange={(e: ChangeEvent<HTMLInputElement>) => {
          //   setFisrtname(e.target.value);
          // }}
        />

        <input
          type="text"
          name="Lastname"
          id="lastname"
          placeholder="Last Name"
          // value={lastName}
          // onChange={(e: ChangeEvent<HTMLInputElement>) => {
          //   setLastname(e.target.value);
          // }}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          // value={email}
          // onChange={(e: ChangeEvent<HTMLInputElement>) => {
          //   setEmail(e.target.value);
          // }}
        />

        <textarea
          id="usernameInput"
          name="Message"
          placeholder="Input Message"
          // value={message}
          // onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          //   setMessage(e.target.value);
          // }}
        />

        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
