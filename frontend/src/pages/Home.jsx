import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import FeatureItem from "../components/FeatureItem";
import Footer from "../components/Footer";

// Créez un tableau d'objets avec les données pour chaque FeatureItem
const featureItemsData = [
  {
    image: "./img/icon-chat.png",
    title: "You are our #1 priority",
    description:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    image: "./img/icon-money.png",
    title: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    image: "./img/icon-security.png",
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <section className="features">
        {/* Utilisez la méthode map pour générer les composants FeatureItem */}
        {featureItemsData.map((item, index) => (
          <FeatureItem
            key={index} 
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Home;
