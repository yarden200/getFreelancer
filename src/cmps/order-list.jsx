import { OrderPreview } from '../cmps/orders-preview.jsx'

export function OrderList(props) {

    const { orders } = props
    console.log('orders from list', orders);
    return (
        <div className="order-list">
            <ul>
                {orders.map(order => <OrderPreview key={order._id} order={order} />)}
            </ul>
        </div>
    )
}