export function OrderPreview(props) {

    const { order } = props

    return (
        <div className="order-preview">
            <li >Buyer: {order.buyer.fullname} Gig Title: {order.gig.title} CreaterAt: {order.createdAt} Total Price: {order.totalPrice}  Delivery Time: {order.deliveryTime} </li>
        </div>
    )
}