import React, {useEffect, useState} from "react"
import "../scss/components/text-input-component.scss"

/* export default class SelectInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  
            placeholder: props.placeholder  
        }  
    }

    state = {
            city: ''
        }

    handleLangChange = () => {
        var city = this.city.value;
        this.props.onSelectCity(city);            
    }

    render() {
        return (
            <div>
               <input ref={(ref) => this.city = ref} 
                valueField='city' textField="city"
                className={"text-input-component"}
                placeholder={placeholder}
                onChange={this.handleLangChange}
                required 
                />
            </div>
        )
    }
} */