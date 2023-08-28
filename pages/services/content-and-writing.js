import ContentandCopywriting from "@/components/Main/Services/ContentandCopywriting";
import React from "react";
import Head from "next/head";

const contentandwriting = () => {
  return (
    <div>
      <Head>
        <title>
          {" "}
          Content and Copywriting - Engage Your Audience with Compelling Stories
        </title>
        <meta
          name="description"
          content="Engage your audience and boost brand loyalty with Moram Napu's expert content and copywriting services. Our skilled copywriters and content creators craft compelling stories that resonate with your gaming community, leaving a lasting impact on your audience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentandCopywriting />
    </div>
  );
};

export default contentandwriting;
