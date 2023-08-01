import React from 'react'
import About1 from "../../public/images/whT.jpg";
import About2 from "../../public/images/HOW.jpg";
import Image from 'next/image';
const WhatWeDo = () => {
    return (
      <>
        <div>
          <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              What We Do
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 py-10 lg:px-32 px-4 bg-[#191C20]">
            <div>
              <Image src={About1} alt="hello" />
            </div>

            <div>
              <p>
                We are a bunch of consultants who don’t play by the norms of a
                traditional agency, but rather focus on brand objectives and
                goals.
              </p>

              <p>
                We bring the perfect balance to your brand. Drawing from the
                ideals of traditional media approach, we blend them with new-age
                strategies to capture the new-age media for our brands.
              </p>
              <p>
                We spend time understanding the ever evolving client
                requirements and media trends and work hand-in-hand with the
                brands to ensure success, escalate brand image and optimizing
                communication strategies.
              </p>
              <p>
                We strongly believe in the fact that – We measure our success
                only through the success of our partners brands.
              </p>
              <p>
                Being a part of the diversified communication space in India –
                we believe in trying out newer ways which are poised to benefit
                our clients and give them an edge over their contemporaries.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="content bg-[#17191d] py-16 lg:px-32 px-4 ">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              How We Do It
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 py-10 lg:px-32 px-4 bg-[#191C20]">
            <div>
              <Image src={About2} alt="hello" />
            </div>

            <div>
              <p>
                We consider it necessary to devise a “PR-Hack” to define a
                company’s direction, approach and ultimately, objective. We draw
                out roadmaps and relevant communication messaging to achieve the
                results a brand desires.
              </p>

              <p>
                Through rigorous industry research and constant communication
                with the stakeholders, we primarily identify the company’s
                goals, relevant communication spaces and target audience. Based
                on that, we implement our strategies to not only bring
                visibility to the brand, but also make sure the message reaches
                to the right audience as required by the brand.
              </p>
              <p>
                We align company strategies along with brand strategies and
                create a seamless flow of communication with all the
                stakeholders.
              </p>
              <p>
                This approach’s success is well reflected in our clientele and
                their success stories, to which we have been instrumental.
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default WhatWeDo
