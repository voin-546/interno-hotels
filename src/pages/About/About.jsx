import React from "react";
import { Helmet } from "react-helmet";
import "../../css/Header.scss";
const AboutPage = () => {
  return (
    <>
    <Helmet>
  <meta name="description" content="About" />
  <title>About Interno</title>
  {/* Другие метатеги */}
</Helmet>
    <div>About Page</div>
    </>
  )
}

export default AboutPage;