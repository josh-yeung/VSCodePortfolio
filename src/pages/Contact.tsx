import React from "react";
import { MailIcon } from "@heroicons/react/solid";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fullName = (formData.get("fullName") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const subject = encodeURIComponent(
      fullName ? `Message from ${fullName}` : "Message from portfolio"
    );
    const body = encodeURIComponent(
      `Name: ${fullName || "N/A"}\nEmail: ${email || "N/A"}\n\n${message}`
    );

    window.location.href = `mailto:joshyeung126@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      id="Contact"
      className="lg:w-1/2 mt-16 pb-24 text-center sm:text-justify mx-4 sm:mx-12 lg:mx-60"
    >
      <div className="table">
        <MailIcon className="h-5 w-5 mr-4 text-yellow_vs" />
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Get In Touch
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5 flex flex-col items-stretch sm:items-center">
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-2xl space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="text-sm text-lightblue_vs">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your name"
              className="rounded-md border border-[#2f2f2f] bg-[#1b1b1b] px-4 py-3 text-[#e6f1ff] placeholder:text-[#5b6274] focus:outline-none focus:ring-2 focus:ring-yellow_vs/40"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-lightblue_vs">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@email.com"
              className="rounded-md border border-[#2f2f2f] bg-[#1b1b1b] px-4 py-3 text-[#e6f1ff] placeholder:text-[#5b6274] focus:outline-none focus:ring-2 focus:ring-yellow_vs/40"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-lightblue_vs">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Enter your message!"
              className="rounded-md border border-[#2f2f2f] bg-[#1b1b1b] px-4 py-3 text-[#e6f1ff] placeholder:text-[#5b6274] focus:outline-none focus:ring-2 focus:ring-yellow_vs/40"
              required
            />
          </div>
          <button
            type="submit"
            className="border border-lightblue_vs text-lightblue_vs mt-2 px-6 py-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs"
          >
            <code>Send Message</code>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
