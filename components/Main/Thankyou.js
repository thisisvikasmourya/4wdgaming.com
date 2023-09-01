import React from "react";
const Thankyou = () => {
  return (
    <div>
      <main className="w-full flex" data-aos="zoom-in">
        <div className="relative flex-1 hidden items-center justify-center h-screen bg-[#121416] lg:flex">
          <div className="relative z-10 w-full max-w-md">
            <div className=" space-y-3">
              <h3 className="text-[#123c69] text-3xl font-bold">
                Our customers positive feedback keeps us inspired and driven to
                excel. Thank you for being a part of our journey!{" "}
              </h3>
              <p className="text-gray-300">
                Create an account and get access to all features for 30-days, No
                credit card required.
              </p>
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
      </main>
    </div>
  );
};

export default Thankyou;
