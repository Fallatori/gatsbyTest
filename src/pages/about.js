import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Falla">
        <StaticImage alt="Potatos" src="../images/Patates.jpg"></StaticImage>
        <p>Decent at everything!</p>
      </Layout>
    </main>
  );
};

export const Head = () => <title>Big Scrub</title>;

export default AboutPage;
