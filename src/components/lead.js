import {useState} from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({name: "", email: ""});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Submitting form...");

    // You no longer need axios; Formspree handles the submission
    const form = e.target;

    // Directly submit the form to Formspree
    const formDataToSend = new FormData(form); // Convert form data into the format Formspree expects

    fetch("https://formspree.io/f/{your-form-id}", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage("Form submitted successfully!");
        setFormData({name: "", email: ""});
      })
      .catch((error) => {
        setMessage("Error submitting form. Please try again.");
      });
  };

  return (
    <form
      className="offer-form"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/{your-form-id}"
      method="POST"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit" className="offer-button">
        Claim Our Free Audit
      </button>

      <p>{message}</p>
    </form>
  );
};

export default MyForm;
