export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const ordersSubmitted = await fetchResponse.json()

    let orderOptionsHTML = `<ul></ul>`


    const orderStringArray = ordersSubmitted.map(

            (order) => {
                const orderPrice = order.metal.price + order.style.price + order.size.price
                return `<ul id =${order.id}>Order # ${order.id} cost $ ${orderPrice} </ul>`
        

            }
    )
    orderOptionsHTML += orderStringArray.join("")

    return orderOptionsHTML
}


