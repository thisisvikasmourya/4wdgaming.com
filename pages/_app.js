import "@/styles/globals.css";
import "@/styles/style.css";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


import Layout from "@/components/Layout/Layout";

export default function App ( { Component, pageProps } )
{
   useEffect(() => {
     AOS.init({
       duration: 800,
       once: false,
     });
   }, []);

  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
