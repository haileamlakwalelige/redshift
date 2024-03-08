import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center">
      <form className="flex flex-col justify-center items-center">
        <div className="my-3">
          <p className="text-secondary text-start text-[24px]   cri font-light">
            Full Name
          </p>
          <input
            type="text"
            className="bg-faq text-secondary min-w-[300px]  outline-none focus:outline-none placeholder:pl-2 pl-2 lg:min-w-[400px] h-[44px] rounded"
          />
        </div>
        <div className="my-3">
          <p className="text-secondary text-start text-[24px]   cri font-light">
            Phone
          </p>
          <input
            type="text"
            className="bg-faq text-secondary min-w-[300px]  outline-none focus:outline-none placeholder:pl-2 pl-2 lg:min-w-[400px] h-[44px] rounded"
          />
        </div>
        <div className="my-3">
          <p className="text-secondary text-start text-[24px]   cri font-light">
            Email
          </p>
          <input
            type="email"
            className="bg-faq text-secondary min-w-[300px]  outline-none focus:outline-none placeholder:pl-2 pl-2 lg:min-w-[400px] h-[44px] rounded"
          />
        </div>
        <div className="my-3">
          <p className="text-secondary text-start text-[24px]   cri font-light">
            Message
          </p>
          <textarea
            cols={30}
            rows={4}
            type="text"
            className="bg-faq text-secondary min-w-[300px]  outline-none focus:outline-none placeholder:pl-2 pl-2 lg:min-w-[400px] rounded"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="text-white bg-primary px-16 py-2 font-medium text-[18px]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
