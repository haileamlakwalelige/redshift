import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactIntro from "../components/contact/ContactIntro";
import ContactAddress from "../components/contact/ContactAddress";
import ContactFormTop from "../components/contact/ContactFormTop";
import ContactForm from "../components/Reusable/contact/ContactForm";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the element with the ID from the hash fragment
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div className="mt-32">
      <ContactIntro />
      <ContactAddress />
      <ContactFormTop />
      <ContactForm />
    </div>
  );
};

export default Contact;
