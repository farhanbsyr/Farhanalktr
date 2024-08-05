import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="text-center mt-[100px] lg:mx-[120px] md:mx-24 sm:mx-20 mx-8"
    >
      <h1 className="text-[40px] mb-6 font-semibold">Contact</h1>
      <div className="md:mx-[75px] mx-0">
        <p className="sm:text-lg text-base">
          Apart from that, I am currently open to opportunities to work or
          intern at your company. If you have an interesting project or need
          extra help, don't hesitate to contact me. <br /> <br /> Feel free to
          get in touch with me whenever you need assistance or want to discuss
          anything. I'm here to help you with pleasure!
        </p>
        <form action="" className="mt-6 flex flex-col gap-6">
          <label htmlFor="username" className="w-full">
            <input
              type="text"
              required
              maxLength={35}
              name="username"
              id="username"
              className="border-black text-xl rounded-md border-2 py-5 px-4 w-full "
              placeholder="Your name"
            />
          </label>
          <label htmlFor="email" className="w-full">
            <input
              required
              type="email"
              name="email"
              id="email"
              className="border-black text-xl rounded-md border-2 py-5 px-4 w-full "
              placeholder="Your email"
            />
          </label>
          <label htmlFor="message">
            <textarea
              required
              maxLength={250}
              name="message"
              placeholder="Your message"
              id="message"
              className="border-black text-xl rounded-md border-2 py-5 px-4 w-full"
            ></textarea>
          </label>
          <div className="text-left">
            <button
              type="submit"
              className="bg-black transform duration-500 hover:scale-110 rounded-full font-semibold text-xl text-white py-[1.25rem] px-14"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
