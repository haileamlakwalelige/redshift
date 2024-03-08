import React from 'react'
import ContactIntro from "../components/contact/ContactIntro";
import ContactFormTop from "../components/contact/ContactFormTop";
import ContactAddress from "../components/contact/ContactAddress";
import ContactForm from "../components/Reusable/contact/ContactForm";

const Contact = () => {
  return (
    <div className="mt-32">
      <ContactIntro />
      <ContactAddress />
      <ContactFormTop />
      <ContactForm />
    </div>
  );
};

export default Contact