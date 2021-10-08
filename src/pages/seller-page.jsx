import React from 'react'
import { connect } from 'react-redux'
import { onAddGig, onEditGig, onRemoveGig } from '../store/gig.actions.js'
import { GigAdd } from '../cmps/gig-add.jsx'
import { loadOrders } from '../store/order.actions.js'
import { OrderList } from '../cmps/order-list.jsx'
import { ModalApp } from '../cmps/app-modal.jsx'
const queryString = require('query-string');



class _SellerPage extends React.Component {
    state = {
        orders: [],
        showModal: false


    }

    async componentDidMount() {
        // const parsed = queryString.parse(this.props.location.search);
        // console.log(parsed);
        // const {userId} = parsed
        // console.log(userId);
        await this.props.loadOrders()
    }

    onRemoveGig = (gigId) => {
        this.props.onRemoveGig(gigId)
    }

    onAddGig = (gig) => {
        console.log(gig)
        this.props.onAddGig(gig)
    }

    onEditGig = (gig) => {
        const price = +prompt('New price?')
        const gigToSave = { ...gig, price }
        this.props.onEditGig(gigToSave)
    }
    openModal = () => {
        this.setState({ showModal: true })
    }


    render() {
        const { orders } = this.props
        return (
            <div className="seller-page main-container">
                <div className="header-container">
                    <nav className="header-categories">
                        <ul>
                            <li>
                                <div>My Orders</div>
                            </li>
                            <li>
                                {/* <Link to="/explore">Active</Link> */}
                                <div >Active</div>

                            </li>
                            <li>
                                {/* <Link to="/explore">Pending Approval</Link> */}
                                <div >Pending </div>

                            </li>
                            <li>
                                {/* <Link to="/explore">Denied</Link> */}
                                <div >Denied</div>

                            </li>
                            <li>
                                {/* <Link to="/explore">Draft</Link> */}
                                <div >Draft</div>

                            </li>
                            <li>
                                {/* <Link to="/explore">Draft</Link> */}
                                <div >Completed</div>

                            </li>
                        </ul>

                    </nav>
                    {/* <button className="delete-gig" onClick={() => this.onRemove(gig._id)}>Delete</button>
                    <button className="edit-gig" onClick={this.openModal}>Edit</button> */}
                </div>
                {/* <div className="add-btn-container">
                    <h2><span className="add">Add New Gig</span></h2>
                </div> */}
                <div className="orders-list">
                    <button className="btn-add-gig" onClick={this.openModal}>Add Gig To Your Collection</button>
                    <OrderList orders={orders} />
                </div>
                <div className="start-selling">
                    <div className="gig-sell">
                        <div className="add-gig-modal">

                            <ModalApp
                                className="modal"
                                showModal={this.state.showModal}
                                openModal={() => this.setState({ showModal: true })}
                                closeModal={() => this.setState({ showModal: false })}
                            >

                                <GigAdd onAddGig={this.onAddGig} />


                            </ModalApp>
                        </div>



                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs,
        orders: state.orderModule.orders
    }
}

const mapDispatchToProps = {
    onRemoveGig,
    onAddGig,
    onEditGig,
    loadOrders
}

export const SellerPage = connect(mapStateToProps, mapDispatchToProps)(_SellerPage)