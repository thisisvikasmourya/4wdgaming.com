import React from "react";
import About1 from "../../public/images/whT.jpg";
import About2 from "../../public/images/HOW.jpg";
import Image from "next/image";
const WhatWeDo = () => {
  return (
    <>
      <div>
        <div className="bg-[#17191d]">
          <div className="max-w-screen-xl mx-auto md:px-8">
            <div data-aos="zoom-in">
              <div
                className="content bg-[#17191d] py-16  px-4"
                data-aos="zoom-in"
              >
                <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
                  What We Do
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-[#191C20]">
            <div className="max-w-screen-xl mx-auto md:px-8">
              <div className="flex lg:flex-row  flex-col gap-4 p-4 py-10  px-4 bg-[#191C20]">
                <div>
                  <Image src={About1} alt="hello" className="rounded-lg" />
                </div>

                <div className="text-white">
                  <p>
                    At 4WD GAMING, we challenge the norms of traditional
                    agencies. Instead, we focus on brand objectives and goals.
                    Our approach strikes the perfect balance, blending
                    traditional media ideals with new-age strategies to capture
                    the new-age media for our brands.
                  </p>
                  <p>
                    Understanding evolving client needs and media trends is at
                    the core of our service. We work hand-in-hand with brands to
                    ensure success, escalate brand image, and optimize
                    communication strategies. Our success is measured only by
                    the success of our partner brands.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#17191d]">
                <div className="max-w-screen-xl mx-auto md:px-8">
                  <div data-aos="zoom-in">
                    <div className="content bg-[#17191d] py-16  px-4 ">
                      <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
                        How We Do It
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="bg-[#191C20]">
                  <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="flex lg:flex-row  flex-col gap-4 p-4 py-10  px-4 bg-[#191C20]">
                      <div>
                        <Image
                          src={About2}
                          alt="hello"
                          className="rounded-lg"
                        />
                      </div>

                      <div className="text-white">
                        <p>
                          We devise a &quot;PR-Hack&quot; to define a
                          company&apos;s direction, approach, and objectives.
                          Through rigorous industry research and stakeholder
                          communication, we identify goals, communication
                          spaces, and target audiences. Our strategies bring
                          visibility and ensure the message reaches the right
                          audience.
                        </p>
                        <p>
                          Aligning company and brand strategies, we create a
                          seamless flow of communication with stakeholders. Our
                          success stories speak for the effectiveness of this
                          approach.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
