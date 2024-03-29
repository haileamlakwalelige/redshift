import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../button/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://dashboard.redshiftbusinessgroup.com/api/rigistrations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        toast.success("Register successfully!");
        setFormData({
          title: "",
          phone: "",
          email: "",
          description: "",
        });
      } else {
        toast.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Error submitting data");
    }
  };

  return (
    <div id="form" className="flex justify-center items-center">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="my-3">
          <p className="text-secondary text-start text-[24px] cri font-light">
            Full Name
          </p>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="bg-faq text-secondary min-w-[300px] outline-none focus:outline-none placeholder:pl-2 pl-2 lg:min-w-[400px] h-[44px] rounded"
          />
        </div>
        <div className="my-3">
          <p className="text-secondary text-start text-[24px] cri font-light">
            Phone
          </p>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-faq text-secondary min-w-[300px] outline-none focus:outline-none placeholder:pl-2 pl-2 lg:min-w-[400px] h-[44px] rounded"
          />
        </div>
        <div className="my-3">
          <p className="text-secondary text-start text-[24px] cri font-light">
            Email
          </p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-faq text-secondary min-w-[300px] outline-none focus:outline-none placeholder:pl-2 pl-2 lg:min-w-[400px] h-[44px] rounded"
          />
        </div>
        <div className="my-3">
          <p className="text-secondary text-start text-[24px] cri font-light">
            Message
          </p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            cols={30}
            rows={4}
            className="bg-faq text-secondary min-w-[300px] outline-none focus:outline-none placeholder:pl-2 pl-2 lg:min-w-[400px] rounded"
          />
        </div>
        <div className="mt-6">
          <Button type="submit" title="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
