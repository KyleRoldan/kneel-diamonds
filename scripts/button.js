import { placeOrder } from "./transientState.js"


const saveOrder = (clickEvent) => {

    if (clickEvent.target.id === "saveSubmission") {

        placeOrder()

    }


}








export const placeOrderButton = () => {
    document.addEventListener("click", saveOrder)

    return `
            <button class ="btn" id ="saveSubmission">Place Order</button>
            
            `
}

