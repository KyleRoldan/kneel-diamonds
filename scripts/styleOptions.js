import { setStyle } from "./transientState.js"




const handleStyleChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "style") {
        setStyle(parseInt(event.target.value))
    }
}




export const styleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const allStyleOptions = await response.json()
    document.addEventListener("change", handleStyleChoice)

    let styleOptionsHtml = `<div></div>`

    const divStringArray = allStyleOptions.map(
        (style) =>{
            return `<div><input type="radio" name="style" value="${style.id}"/>${style.style}</div>

            `
        }
    )

    styleOptionsHtml += divStringArray.join(" ")

    return styleOptionsHtml
}

   /*for (const style of allStyleOptions) {
        styleOptionsHtml += `<div><input type="radio" name="location" value="${style.id}"/>${style.style}</div>

        `
     }
    
    return styleOptionsHtml*/


