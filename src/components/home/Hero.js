import React from "react";
import "./Hero.css";


function Home() {
  return (
    <div>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
          <div className="columns is-desktop">
  <div className="column">

  <h1 className="title"> Raahat</h1>
            <h5 className="title is-4">
              Your helping hands in this COVID-19 pandemic
            </h5>
            <div className="box1" />
            <div className="subtitle">
              Kiraana Ka Raahat is an NGO to help the people in need during the
              COVID-19 pandemic. This is a survey app solely built for people
              who are in need of food and ration kits. The app contains survey
              records of slums and a variety of food items. It also gives an
              estimation of food items along with its price and the total amount
              required for the fundraiser.
            </div>
  </div>
  <div className="column col2" />
</div>

            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
