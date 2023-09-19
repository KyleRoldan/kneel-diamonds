const transientState = {

    "styleId": "",
    "sizeId": "0",
    "metalId": "",

}
// Functions to modify each property of style transient state
export const setStyle = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

// Functions to modify each property of size transient state
export const setSize = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

// Functions to modify each property of metal transient state
export const setMetal = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}


// Function to convert transient state to permanent state
export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)



    }
    

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("orderSubmitted")
    document.dispatchEvent(customEvent)

}







/*export const saveSurveySubmission = async () => {

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify(transientState)


    }
    const response = await fetch("http://localhost:8088/submissions", postOptions)

    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)

}*/
