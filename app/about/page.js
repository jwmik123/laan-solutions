"use client";

import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
const About = () => {
  return (
    <div className="flex items-center justify-center h-full pt-32 pb-24 mx-5 md:h-screen md:mx-10">
      <div className="flex flex-col w-full gap-4 md:w-1/2 ">
        <h3 className="text-2xl font-bold">Welkom bij Laan Solutions!</h3>
        <p className="text-lg leading-relaxed text-black ">
          Wij zijn een jong team dat elkaar ontmoette aan de TU Delft, verenigd
          door een passie voor het versnellen en vereenvoudigen van
          bouwprojecten. Ons doel? Het hele traject van vergunning tot bouw
          soepel en duidelijk maken, zodat je weet waar je aan toe bent. Bij
          Laan Solutions geloven we in open communicatie en samenwerking.
          Samenwerken moet niet alleen efficiënt zijn, maar ook leuk. Daarom
          werken we nauw met je samen om jouw visie werkelijkheid te maken, of
          het nu gaat om een uitbouw, dakkapel of een compleet nieuw
          bedrijfspand. We staan klaar met advies, heldere oplossingen en
          praktische ondersteuning.
          <br />
          <br />
          Ons motto? Jij vraagt, wij draaien. Wij houden van aanpakken en denken
          graag mee met je plannen. Klaar om samen aan de slag te gaan? Neem
          contact met ons op en ontdek wat wij voor jou kunnen betekenen!
        </p>
        <div>
          <p className="text-lg leading-relaxed text-black">
            Email:{" "}
            <a
              data-animation-link="no-animation"
              href="mailto:info@laansolutions.nl"
              className="text-primary-500"
            >
              info@laansolutions.nl
            </a>
          </p>
          <p className="text-lg leading-relaxed text-black">
            Telefoon:{" "}
            <a
              data-animation-link="no-animation"
              href="tel:+31615191923"
              className="text-primary-500"
            >
              +31 6 15 19 19 23
            </a>
          </p>
        </div>
      </div>
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
};

export default About;
