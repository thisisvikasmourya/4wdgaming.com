import React from 'react'
import Image from "next/image";
import About from "../../../public/images/HOW.jpg";

const CreatorsandInfluencers = () => {
  return (
    <div>
      <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
        <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
          Creators & Influencers
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 py-16 lg:px-32 px-4 bg-[#191C20]">
        <div>
          <Image src={About} alt="hello" layout="" className="rounded-lg" />
        </div>
        <p>
          Content is king! We work with some of the top gaming content creators
          and influencers from the interwebs. Be it Twitch, YouTube, Instagram
          or the next gamer platform that hasn’t been invented as yet, we’re
          bossing every game. Our creator and influencer strategy will help you
          reach your pointed target audience through some of the most creative
          talents and engaging content.
        </p>
      </div>
    </div>
  );
}

export default CreatorsandInfluencers
