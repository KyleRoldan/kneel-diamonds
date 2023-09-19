// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setMetal } from "./transientState.js"

const handleMetalChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "metal") {
        setMetal(parseInt(event.target.value))
    }
}



export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const options = await response.json()
    document.addEventListener("change", handleMetalChoice)
   

    let MetalOptionsHtml = `<div></div>`


    // Use map() to generate new array of strings
    const divStringArray = options.map(
        (metal) => {
          return `<div>
              <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
     MetalOptionsHtml  += divStringArray.join(" ")

    return MetalOptionsHtml 
}

  





/* for (const option of options) {
        MetalOptionsHtml += `<div><input type="radio" name="location" value="${option.id}"/>${option.metal}</div>

        `

    }
    
    return MetalOptionsHtml





}*/

