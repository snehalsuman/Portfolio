import { useRef } from "react";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_525i5qm", // from EmailJS
      "template_qkiv3mf",
      form.current,
      "36h8XwCiplVZTr_Pa"
    ).then(
      () => alert("Message Sent Successfully"),
      (error) => alert("Something went wrong: " + error.text)
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="bg-[#1e1e2f] p-6 rounded-3xl w-full max-w-2xl text-white shadow-md backdrop-blur-md">
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
  Get in Touch
</h2>
      <input name="user_name" type="text" placeholder="Your Name" required className="w-full p-3 rounded-xl mb-3 bg-[#2b2b3c]" />
      <input name="user_email" type="email" placeholder="Your Email" required className="w-full p-3 rounded-xl mb-3 bg-[#2b2b3c]" />
      <textarea name="message" placeholder="Your Message" rows="4" required className="w-full p-3 rounded-xl bg-[#2b2b3c] mb-4" />
      <button type="submit" className="bg-gradient-to-r from-purple-500 to-indigo-500 px-5 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition">
        <FiSend />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;