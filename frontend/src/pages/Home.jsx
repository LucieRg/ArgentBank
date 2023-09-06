import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import FeatureItem from "../components/FeatureItem";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <section className="features">
        <FeatureItem
          image={"./img/icon-chat.png"}
          title={"You are our #1 priority"}
          description={
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          }
        />
        <FeatureItem
          image={"./img/icon-money.png"}
          title={"More savings means higher rates"}
          description={
            "The more you save with us, the higher your interest rate will be!"
          }
        />
        <FeatureItem
          image={"./img/icon-security.png"}
          title={"Security you can trust"}
          description={
            "We use top of the line encryption to make sure your data and money is always safe."
          }
        />
      </section>
      <Footer />
    </div>
  );
}
export default Home;
