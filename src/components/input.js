import React, {useEffect, useState} from "react"
import "../scss/components/text-input-component.scss"

function Input({placeholder}){

    return (
        <div>
           <input class="text-input-component"
           placeholder={placeholder}
           required />
        </div>
    )
}


export default Input;