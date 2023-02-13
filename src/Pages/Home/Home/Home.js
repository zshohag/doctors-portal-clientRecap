import React from "react";
import Form from "../Form/Form";
import Banner from "../Banner/Banner";
import ExtraBanner from "../ExtraBanner/ExtraBanner";
import ExtraCard from "../ExtraCard/ExtraCard";
import InfoCard from "../InfoCard/InfoCard";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCard />
      <Services />
      <ExtraCard />
      <ExtraBanner />
      <Testimonials />
      <Form />
    </div>
  );
};

export default Home;
