
import{MetalOptions} from "./metalOptions.js"
import { sizeOptions } from "./sizeOptions.js"
import {styleOptions} from "./styleOptions.js"
import{placeOrderButton} from "./button.js"
import { Orders } from "./customOrders.js"




const container = document.querySelector(".mainContainer")


const render = async () => {

   
    const metalsHTML = await MetalOptions()
    const stylesHTML = await styleOptions()
    const sizesHTML = await sizeOptions()
    const buttonHTML = placeOrderButton()
    const orderDisplay = await Orders()
    



    container.innerHTML = `<h1>Kneel Diamonds</h1>

    <div class="choices">
        <div class="choices__metals options">
            <h2>Metals</h2>
            ${metalsHTML}
        </div>

        <div class="choices__sizes options">
            <h2>Sizes</h2>
            ${sizesHTML}
        </div>

        <div class="choices__styles options">
            <h2>Styles</h2>
            ${stylesHTML} 
        </div>
    </div>

    <div class="order">
    ${buttonHTML}

    </div>

    

    <div class="customOrders">
       ${orderDisplay}

    </div>
`
    
   
    

}


render()
document.addEventListener("orderSubmitted", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

