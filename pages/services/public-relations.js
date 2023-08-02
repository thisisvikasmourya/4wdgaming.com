import PublicRelations from "@/components/Main/Services/PublicRelations";
import React from "react";
import Head from "next/head";

const publicrelations = () => {
  return (
    <div>
      <Head>
        <title>
          {" "}
          Public Relations - Elevate Your Gaming Brand with 4WD Gaming PR
        </title>
        <meta
          name="description"
          content="Elevate your gaming brand to new heights with 4WD Gaming's top-notch public relations services. As gaming and esports specialists, we craft PR strategies that hit the mark, tailored for gaming companies, esports teams, and developers. Let us be your PR partner and conquer the world of gaming, Web3 gaming, and esports."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PublicRelations />
    </div>
  );
};

export default publicrelations;
