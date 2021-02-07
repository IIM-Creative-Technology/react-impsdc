import React from "react";
import axios from "axios";
import "../scss/components/weather/weather-result-component.scss";
import windLogo from "../static/wind.svg";
const logo = require("../static/wind.svg");
require('dotenv').config()
export default class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false,
            city : null,
            temp : null,
            wind : null,
            weather :{
                main : null,
                description: null
            },
            icon: null,
            placeholder : props.placeholder
        }
    }

    fetchData = () => {
         setTimeout(() => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.field.value}&appid=${process.env.REACT_APP_WEATHER_APP_ID}`)
                .then((res) => {
                    if(res){
                        this.setState({
                            success:true,
                            city : res.data.name,
                            temp : res.data.main.temp - 273.15,
                            wind : res.data.wind.speed,
                            weather : {
                                main :res.data.weather[0].main,
                                description : res.data.weather[0].description,
                                icon : res.data.weather[0].icon
                            }
                            
                        })
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.setState({
                        success:false
                    })
                });

          }, 1000);
    }

    round = (str) => {
        return Math.round((str + Number.EPSILON) * 100) / 100
        
    }
      
   render() {
    return (
        <div>
            <div>
               <input ref={(ref) => this.field = ref} 
                className={"text-input-component"}
                placeholder={this.state.placeholder}
                onChange={this.fetchData}
                required 
                />
            </div>
           <div className={"weather-result-component"}>
                {this.state.city === null ? 
                    <p>None city has been write</p>
                
                :this.state.success ? 
                   <div>
                        <p className={"city-title"}>{this.state.city}</p>
                        <div className={'wrapper-result'}>
                           <div className={"item-result"}>
                           <img src={"https://openweathermap.org/img/wn/" + this.state.weather.icon + "@4x.png"} alt={this.state.weather.main}/>
                            <p>{this.state.weather.main}</p>
                            <p>{this.round(this.state.temp)}°C</p>
                           </div>
                           <div className={"item-result"}>
                            <img src={windLogo} alt="wind icon" />
                            <p>{this.state.wind} m/s</p>
                           </div>
                        </div>
                        <p className={"item-description"}>{this.state.weather.description}</p>
                   </div>
                  
                : <p>This city does not exist</p>
                }
                
           </div>
        </div>
    )
   }
}