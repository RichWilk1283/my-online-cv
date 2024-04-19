import React from "react";

function Contact() {
  return (
    <div>
      <h5 className="font-bold text-center text-2xl text-blue-900">Contact</h5>
      <div className="flex flex-col my-3 p-3 rounded-xl bg-blue-950/20">
        <p className="font-thin">Phone</p>
        <p className="pl-3">07549 918881</p>
        <p className="font-thin">Email</p>
        <p className="pl-3">richardwilkinson1283@gmail.com</p>
        <p className="font-thin">Address</p>
        <p className="pl-3">Keswick, Cumbria</p>
        <p className="font-thin">LinkedIn</p>
        <a
          className="pl-3"
          href="https://www.linkedin.com/in/richard-wilkinson1283/"
        >
          https://www.linkedin.com/in/richard-wilkinson1283/
        </a>
        <p className="font-thin">GitHub</p>
        <a className="pl-3" href=" https://github.com/RichWilk1283">
          https://github.com/RichWilk1283i
        </a>
      </div>
    </div>
  );
}

export default Contact;
