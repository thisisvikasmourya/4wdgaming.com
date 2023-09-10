import React from "react";
import About2 from "../../public/images/new/18.gif";
import About1 from "../../public/images/new/17.gif";
import Image from "next/image";
const WhatWeDo = () => {
  return (
    <>
      <div id="whatwedo">
        <div className="bg-[#eee2dc]">
          <div className="max-w-screen-xl mx-auto md:px-8">
            <div data-aos="zoom-in">
              <div
                className="content bg-[#eee2dc] py-16  px-4"
                data-aos="zoom-in"
              >
                <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
                  What We Do
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-[#eee2dc]">
            <div className="max-w-screen-xl mx-auto md:px-8">
              <div className="flex lg:flex-row  flex-col gap-4 p-4 py-10  px-4 bg-[#eee2dc]">
                <div>
                  <Image
                    src={About1}
                    alt="hello"
                    className="rounded-lg"
                    width={300}
                    layout="responsive"
                  />
                </div>

                <div className="text-[#123c69] text-[20px]">
                  <p className="py-3">
                    Sharing Cool Stories: We create exciting stories about your
                    brand that make people go &quot;wow!&quot; We tell these
                    stories to the right people so they can learn about your
                    brand.
                  </p>

                  <p className="py-3">
                    Being Social Media Experts: You know Google,Facebook,
                    Instagram,Linkedin and Twitter? We make brands popular there
                    too. We post fun stuff and talk to the gaming industry.
                  </p>

                  <p className="py-3">
                    Helping Games Grow: We use clever tricks to make more people
                    know about my brand. We also make sure the gaming companies
                    get more money for their hard work.
                  </p>
                  <p className="py-3">
                    Making Fun Stuff: We make fun videos, articles, and things
                    that gaming indutsry like. This makes game companies look
                    super smart and cool.
                  </p>
                  <p className="py-3">
                    Being Friends with Gaming folks: We help brands make friends
                    online and talk about whats cooking. This makes the game
                    community strong and happy.
                  </p>
                  <p className="py-3">
                    Making gaming brand Famous and Trusted: We work hard so
                    people think the gaming brands are really good and
                    trustworthy. We do this by working with famous people and
                    making sure everyone hears good things about the gaming
                    companies.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#eee2dc]">
                <div className="max-w-screen-xl mx-auto md:px-8">
                  <div data-aos="zoom-in">
                    <div className="content bg-[#eee2dc] py-16  px-4 ">
                      <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
                        How We Do It
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="bg-[#eee2dc]">
                  <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="flex lg:flex-row  flex-col gap-4 p-4 py-10  px-4 bg-[#eee2dc]">
                      <div>
                        <Image
                          src={About2}
                          alt="hello"
                          className="rounded-lg"
                          width={300}
                          layout="responsive"
                        />
                      </div>

                      <div className="text-[#123c69] text-[20px]">
                        <p className="py-3">
                          We guide gaming companies to their ideal audience
                          using PR & Marketing, Content Marketing, Social Media
                          Management, Digital, Growth and Performance Marketing,
                          Community Building & Management. We also cultivate
                          Brand Awareness and Trust.
                        </p>
                        {/* <p className="py-3">
                          Aligning company and brand strategies, we create a
                          seamless flow of communication with stakeholders. Our
                          success stories speak for the effectiveness of this
                          approach.
                        </p> */}
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
