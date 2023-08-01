import Image from 'next/image';
import React from 'react'
import About from "../../public/images/owner.jpg";


const AboutTheFounder = () => {
  return (
    <div>
      <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
        <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
          About the Founder
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 py-10 lg:px-32 px-4 bg-[#191C20]">
        <div>
          <Image src={About} alt="hello" layout="" className="rounded-lg" />
        </div>

        <div>
          <p className="text-xl text-[#c52326]">Sharmilee Daru</p>
          <p className="text-lg text-[#c52326]">Founder, 4WD Gaming</p>
          <p className="py-2">
            An alumnus of St. Xaviers’ College, Mumbai and a post graduate from
            the Xavier’s Institute of Communication, Mumbai, Sharmilee Daru is
            one of the pioneers of focused and curated, successful communication
            for gaming solutions in the country and is one of the most noted
            names in the space.
          </p>
          <p className="py-2">
            With a proven track record in establishing gaming as a formidable
            niche in the media, Sharmilee Daru, branched out to etch more
            success stories. She recently launched 4WD Gaming, the first of its
            kind specialised gaming PR and marketing consultancy in the country
            for Indian and international brands. She believes in the seamless
            merger of gaming into the Indian mainstream ecosystem while enabling
            sectoral growth.
          </p>
          <p>
            Managing the communication mandate for Nazara Technologies Ltd.
            somehow, allowed Sharmilee Daru to set the path for the gaming PR
            ecosystem in the country. She has been instrumental to Nazara’s
            growth story. Starting the corporate communication department for a
            gaming company seemed farfetched at the time in March 2016.
            Architecting plans and strong execution, while managing reputation,
            she saw the company through the public listing process. Today, it
            stands as India’s only listed online skill-based gaming firm
            enabling her to be among the pioneers for gaming communication in
            the country.
          </p>
        </div>
      </div>
      <div className=" lg:px-32 px-4 bg-[#191C20]">
        <p className="py-2">
          Being among the early adopter and proponent of gaming communication,
          she has seen the industry evolve. Be it the ongoing battle for
          regulation and skill based real money gaming or the introduction of
          Web3 among other trends setting in, she has an advantage having
          managed all gaming categories. Be it the fantasy sports space,
          esports, sports media space, gamified learning, real money or the
          casual gaming space, she has managed to gain a strong foothold in the
          Indian gaming ecosystem.
        </p>
        <p className="py-2">
          With more than two decades of experience in the communication space,
          Sharmilee Daru has been instrumental in creating successful brands by
          providing guidance, training and strategic direction. From consulting
          with big names of the industry like RIL and HUL to emerging gaming
          start-ups, her experience as a communication advisor with a sharp eye
          for detail and strong domain knowledge has culminated into the
          inception of 4WD Gaming.
        </p>
        <p className="py-2">
          When she is not working, she loves to spend her time horse riding,
          swimming or simply at the gym.
        </p>
      </div>
    </div>
  );
}

export default AboutTheFounder
