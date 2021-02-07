
import React from "react"
import {Helmet} from "react-helmet";

//components
import Btn from "../components/btn";
import TextInput from "../components/textInput";
import Weather from "../components/weather";

//scss
import "../scss/views/container-component.scss";
import "../scss/views/homepage/banner-component.scss";
import "../scss/views/homepage/weather-component.scss"

export default class IndexPage extends React.Component {

 state = {city : ''}

  passCity = (cityValue) => {
      console.log(cityValue)
      this.setState({city: cityValue});
  }

  render() {
    return (
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
          <h3 className={"title-weather"}>Search the <span>Weather</span> for any cities in the <span>world</span> !</h3>
            <div className="wrapper-input">
           {/*    <TextInput placeholder="Mexico" onChange={this.passCity}/> */}
              <Weather placeholder="Mexico"/>
            </div>
        </section>
    </div>
    )
  }
}