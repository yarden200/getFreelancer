import React from 'react'
import { connect } from 'react-redux';
import { onRemoveGig, onEditGig } from '../store/gig.actions.js'
import { gigService } from '../services/gig.service.js';
import { ModalApp } from '../cmps/app-modal.jsx';
import { GigEdit } from '../cmps/gig-edit.jsx';
import { OrderAdd } from '../cmps/order-add.jsx'
import GigsCarusel from '../cmps/gigs-slider.jsx';
import sellerex from '../assets/img/sellerex.PNG';
import face1 from '../assets/img/face1.PNG';
import face2 from '../assets/img/face2.PNG';
import face3 from '../assets/img/face3.PNG';
import { FaRegClock } from 'react-icons/fa';
import { FaRedo } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';


export class _GigDetails extends React.Component {


    state = {
        gig: null,
        showModal: false
    }
    componentDidMount() {
        const gigId = this.props.match.params.gigId
        if (!gigId) return
        gigService.getById(gigId)
            .then(gig => {
                this.setState({ gig })
            })
    }
    openModal = () => {
        this.setState({ showModal: true })
    }
    onRemove = async (gigId) => {
        await this.props.onRemoveGig(gigId)
        this.props.history.push("/")
    }
    onOrderSubmit = (ev) => {
        console.log('event from gig-details by buyer', ev);
        // const buyer = ev.

    }

    openModal = () => {
        this.setState({ showModal: true })
    }
    
    closeModal = () => {
        this.setState({ showModal: false })
    }

    onRemove = async (gigId) => {
        await this.props.onRemoveGig(gigId)
        this.props.history.push("/")
    }

    // onOrderSubmit = () => {
    //     // const buyer = getLoggedinUser()
    //     const buyer = JSON.parse(sessionStorage.getItem('loggedinUser'))
    //     const {gig} = this.state
    //     console.log('buyer from details orderbuyer',buyer);
    //     this.onOrder(gig, buyer)
    // }
    render() {

        const { gig } = this.state
        console.log(gig)
        const { history } = this.props
        if (!gig) return <div>Loading</div>
        return (
            <div className="details-page main-container">
                {/* {/* <div className="main-container"> */}
                <div className="details-page-wrapper flex">
                    <div className="gig-details">
                        <div className="gig-title">
                            <h2>{gig.title}</h2>
                            <div className="mini-title">
                                <img src={sellerex} alt="1" style={{ maxHeight: "40px", maxWidth: "40px" }} />
                                {<h5>{gig.seller.fullname}  ⭐⭐⭐⭐⭐  {gig.rate}  ({gig.rateCount})<span>|  1 Orders in Queue</span></h5>}
                            </div>
                        </div>
                        <div className="gig-image-slider">
                            <GigsCarusel />
                        </div>
                        <button className="delete-gig" onClick={() => this.onRemove(gig._id)}>Delete</button>
                        <button className="edit-gig" onClick={this.openModal}>Edit</button>
                        <div className="about-gig">
                            <h2>About This Gig</h2>
                            <p>{gig.description}
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, reiciendis eos nulla dicta, fugit nemo saepe minus asperiores corrupti eveniet sunt facere commodi id hic deleniti cupiditate! Consequatur, recusandae laudantium!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta, odit delectus aliquid perspiciatis molestias commodi blanditiis! Commodi nisi architecto nam porro aliquid incidunt nostrum. Excepturi odio dolor ad officiis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit fuga tempore, voluptatum veniam aut at mollitia quasi nulla quibusdam officiis dignissimos harum, nam error, esse fugit fugiat natus repellendus?</p>

                        </div>
                        <div className="about-seller">
                            <h2>About The Seller</h2>
                            <div className="seller-profile">
                                <div className="seller-img">
                                    <img src={sellerex} alt="1" style={{ borderRadius: "50%", maxHeight: "140px", maxWidth: "140px" }} />
                                </div>
                                <div className="seller-sum">
                                    <div className="seller-name">
                                        <h4>{gig.seller.fullname}</h4>
                                    </div>
                                    <div className="seller-rate">
                                        ⭐⭐⭐⭐⭐ {gig.rate}
                                    </div>
                                    <div className="contact-me">
                                        <button>Contact Me</button>
                                    </div>
                                </div>

                            </div>
                            <div className="seller-bio">
                                <ul>
                                    <li>
                                        <h6>Seller</h6>
                                        <h4>{gig.seller.fullname}</h4>
                                    </li>
                                    <li>
                                        <h6>From</h6>
                                        <h4>{gig.seller.from}</h4>
                                    </li>
                                    <li>
                                        <h6>Response time</h6>
                                        <h4>{gig.seller.AvResponseTime}</h4>
                                    </li>
                                    <li>
                                        <h6>Member since</h6>
                                        <h4>{gig.seller.MemberSince}</h4>
                                    </li>
                                </ul>
                                <p>Hello! My name is <span>{gig.seller.fullname}</span> and I have been delivering heavily researched and value-adding content
                                    to my clients for more than 5 years now.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur error officia eos qui pariatur, excepturi unde adipisci nostrum, aliquam eius dignissimos facilis cupiditate veritatis dolorem minima fugiat. Repellat, tenetur autem.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque incidunt sapiente! Numquam, sunt beatae enim fugiat fuga earum distinctio culpa corporis ad inventore dolorem nobis cupiditate nostrum necessitatibus asperiores.</p>
                            </div>
                        </div>
                        <div className="seller-reviews">
                            <h2>What People Loved About This Seller</h2>
                            <Slide>
                                <div className="review-slider">
                                    <div className="seller-image">
                                        <img src={face1} alt="1" style={{borderRadius: "50%", maxHeight: "70px", maxWidth: "70px" }} />
                                    </div>
                                    <div className="seller-rev">
                                        {gig.reviews}
                                    </div>
                                </div>
                                <div className="review-slider">
                                    <div className="seller-image">
                                        <img src={face2} alt="1" style={{borderRadius: "50%", maxHeight: "70px", maxWidth: "70px" }} />
                                    </div>
                                    <div className="seller-rev">
                                        {gig.reviews} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto sint impedit saepe.
                                    </div>
                                </div>
                                <div className="review-slider">
                                    <div className="seller-image">
                                        <img src={face3} alt="1" style={{borderRadius: "50%", maxHeight: "70px", maxWidth: "70px" }} />
                                    </div>
                                    <div className="seller-rev">
                                        {gig.reviews} Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    </div>

                                </div>
                            </Slide>

                        </div>
                        {/* <button className="edit-gig" onClick={()=> this.props.onEditGig(gig)}>Edit</button> */}
                        <ModalApp
                            showModal={this.state.showModal}
                            openModal={() => this.setState({ showModal: true })}
                            closeModal={() => this.setState({ showModal: false })}
                        >
                            <GigEdit onEdit={this.onEdit} gig={gig} history={history} />
                        </ModalApp>
                    </div>
                    <div className="sidebar">
                        <div className="package-content">
                            <div className="flex package-price">
                                <h3>Package Price</h3>
                                <h3><span>$75.00</span></h3>
                            </div>
                            <p>Includes 1 logo design concept with 3 free revisions plus more to come </p>
                            <div className="delivery">
                                <span><FaRegClock size={20} /></span> 4 Days Delivery <span><FaRedo /></span> Revisions
                            </div>
                            <div className="check-mark">
                                <ul>
                                    <li>
                                        <FaCheck style={{ color: "green" }} /> <span>Logo Transparency</span>
                                    </li>
                                    <li>
                                        <FaCheck style={{ color: "green" }} /> <span>High Resolution</span>
                                    </li>
                                    <li>
                                        <FaCheck style={{ color: "green" }} /> <span>3D Mockup</span>
                                    </li>
                                    <li>
                                        <FaCheck style={{ color: "green" }} /> <span>Topic Research</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="continue-button">
                            <OrderAdd onOrder={this.onOrder} gig={gig} ></OrderAdd>
                            {/* <button onClick={() => this.onOrder} > Continue $75.00</button> */}
                            {/* <button className="package-button" class="FKiIhUG _1x76oPA co-white bg-co-green-700" type="submit">Continue<span> (₪33.58)</span></button> */}
                        </div>
                        <div >
                            <button className="contact-seller-button">Contact Seller</button>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}
function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}
const mapDispatchToProps = {
    onRemoveGig,
    onEditGig,
}
export const GigDetails = connect(mapStateToProps, mapDispatchToProps)(_GigDetails)