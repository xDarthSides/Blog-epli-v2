import '../styles/globals.scss';
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import React,{useEffect, useState} from"react";
import {Layout} from "../components";

function MyApp({ Component, pageProps }) {
  return( 
  <Layout>
  <Component {...pageProps} />
  <Footer />
  </Layout>
   
  )
}

export default MyApp
