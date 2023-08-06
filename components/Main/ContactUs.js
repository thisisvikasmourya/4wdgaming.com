import React from "react";
import logo from "../../public/images/Logo.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
const router = useRouter();
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      phone,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setBody( "" );
                router.push("/");

      }
    });
  };

  return (
    <div>
      <main className="w-full flex" data-aos="zoom-in">
        <div className="relative flex-1 hidden items-center justify-center h-screen bg-[#121416] lg:flex">
          <div className="relative z-10 w-full max-w-md">
            <div className=" space-y-3">
              <h3 className="text-white text-3xl font-bold">
                Our customers positive feedback keeps us inspired and driven to
                excel. Thank you for being a part of our journey!{" "}
              </h3>
              <p className="text-gray-300">
                Create an account and get access to all features for 30-days, No
                credit card required.
              </p>
              {/* <div className="flex items-center -space-x-2 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <p className="text-sm text-gray-400 font-medium translate-x-5">
                  Join 5.000+ users
                </p>
              </div> */}
            </div>
          </div>
          <div
            className="absolute inset-0 my-auto h-[500px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
              filter: "blur(118px)",
            }}
          ></div>
        </div>
        <div className="py-5 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto bg-[#191c20]">
          <div className="max-w-lg flex-1 mx-auto px-4 text-[#fff]">
            <div>
              <h3 className=" text-[#c52326] text-3xl font-semibold sm:text-4xl">
                Get in touch
              </h3>
              <p className="mt-3 text-white">
                We’d love to hear from you! Please fill out the form bellow.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 mt-12 lg:pb-12"
            >
              <div>
                <label className="font-medium text-white">Full name</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-[#c52326] shadow-sm rounded-lg"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="font-medium text-white">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-[#c52326] shadow-sm rounded-lg"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="font-medium text-white">Phone number</label>

                <input
                  type="number"
                  placeholder="+91  00000-00000"
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className="w-full pl-2 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-[#c52326] shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-white">Message</label>
                <textarea
                  required
                  placeholder="Message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-[#c52326] shadow-sm rounded-lg"
                ></textarea>
              </div>
              
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="w-full px-4 py-2 text-white font-medium bg-[#c52326] hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
              >
                Submit
                </button>
              
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
