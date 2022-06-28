import { StaticImage } from "gatsby-plugin-image";
import React from "react"
<<<<<<< HEAD
const IndexPage =() =>{
  return (
<main>
    <title>Home Page???</title>
    <h1>Home Page!!!</h1>

</main>
=======
import Layout from "../components/layout";
const IndexPage =() =>{
  return (

      <Layout pageTitle="HomePage">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      
      </Layout>

>>>>>>> main

  );
};


export default IndexPage;
