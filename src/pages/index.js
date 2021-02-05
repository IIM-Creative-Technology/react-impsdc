
import React from "react"
import {Helmet} from "react-helmet";
import Btn from "../components/btn";
import "../scss/pages/container-component.scss";
import "../scss/pages/banner-component.scss";
import "../scss/pages/weather-component.scss";


const IndexPage = (data) => (
  <div class="home">
    <Helmet>
        <html lang="en" />
        <title>Paul Santamaria Meteo</title>
        <meta name="description" content="get the weather of paris by Paul Santamaria" />
        <meta name="theme-color" content="#fff" /> 
    </Helmet>

      <section className="banner-component">
        <h1 className="hero-title"><span>Hello World,<br /> Welcome to Paul and Cyprien React project</span><br /> Fast Saas quizz and weather application</h1>
        <h2 className="hero-description">In this project we've created an api quizz in node.js with Express en Sequelize<br />You can create and manage your own quizz and share it to a friend !</h2>
        <div className="hero-wrapper-btn">
            <Btn content="Go to quizz area"  slug="/quizz" />
            <Btn content="Get the weather" inverse={"True"}slug="#weather" />
        </div>
      </section>

      <section className="weather-component" id="weather">

      </section>
  </div>
)

export default IndexPage