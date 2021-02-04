import React, {useEffect, useState} from "react"
import "../scss/components/radio-component.scss"

function Input({placeholder}){

    return (
        <div>
            <p>
                <input type="radio" id="test1" name="radio-input" />
                <label for="radio-label">Apple</label>
            </p>
            <p>
                <input type="radio" id="test1" name="radio-input" />
                <label for="radio-label">Apple</label>
            </p>
            <p>
                <input type="radio" id="test1" name="radio-input" />
                <label for="radio-label">Apple</label>
            </p>
        </div>
    )
}


export default Input;