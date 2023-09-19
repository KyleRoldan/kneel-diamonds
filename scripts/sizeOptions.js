import { setSize } from "./transientState.js"



const handleSizeChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "size") {
        setSize(parseInt(event.target.value))
    }
}




export const sizeOptions = async () => {

    const response = await fetch("http://localhost:8088/sizes") 

    const allSizeOptions = await response.json()
    document.addEventListener("change", handleSizeChoice)

    let sizeOptionsHTML = `<div></div>`


    const divStringArray = allSizeOptions.map(

            (size)=>{
                return `<div><input type="radio" name="size" value="${size.id}"/>${size.carets}</div>`
        

            }
    )
    sizeOptionsHTML += divStringArray.join("")

    return sizeOptionsHTML


}

/* for (const size of allSizeOptions){

        sizeOptionsHTML += `<div><input type="radio" name="size" value="${size.id}"/>${size.carets}</div>
        
        
        
        
        `



    }*/



    