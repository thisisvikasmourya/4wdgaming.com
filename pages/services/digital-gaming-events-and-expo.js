import DigitalGamingEvents from "@/components/Main/Services/DigitalGamingEvents";
import React from "react";
import Head from "next/head";

const digitalgamingevents = () => {
  return (
    <div>
      <Head>
        <title>
          {" "}
          Digital Gaming Events and Expo - Engaging Experiences for Gamers
          Everywhere
        </title>
        <meta
          name="description"
          content="Elevate your gaming brand to new heights with Moram Napu's top-notch  Outreach services. As gaming and esports specialists, we craft Outreachstrategies that hit the mark, tailored for gaming companies, esports teams, and developers. Let us be your Outreachpartner and conquer the world of gaming, Web3 gaming, and esports."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DigitalGamingEvents />
    </div>
  );
};

export default digitalgamingevents;
