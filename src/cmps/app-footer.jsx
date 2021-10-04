
import React from 'react'
import { Link } from 'react-router-dom'

// import { connect } from 'react-redux'

// import { showSuccessMsg } from '../services/event-bus.service'
// import { addToCart, removeFromCart, checkout } from '../store/gig.actions'
// import { UserMsg } from './user-msg.jsx'
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';




class _AppFooter extends React.Component {

    state = {
        isCartShown: false,
    }

    componentDidMount() { }

    // removeFromCart = (carId) => {
    //     this.props.removeFromCart(carId)
    // }

    // checkout = () => {
    //     this.props.check
    // out();
    // }

    // get cartTotal() {
    //     return this.props.cart.reduce((acc, gig) => acc + gig.price, 0)
    // }

    render() {
        // const { isCartShown } = this.state
        // const { count, cart } = this.props;
        return (
            <footer className="app-footer">
                <div className="app-footer-container">
                    <div className="main-container">
                        <div className="footer-upper-menu flex between">
                            <div className="categories-div flex column">
                                <article className="categories-article">
                                    <div className="title">
                                        <h6>Categories</h6>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <Link to="/explore">Graphics & Design</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Digital Marketing</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Writing & Translation</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Video & Animation</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Music & Audio</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Programming & Tech</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Data</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Business</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Lifestyle</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Sitemap</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </article>
                            </div>
                            <div className="about-div">
                                <article className="about-article">
                                    <div className="title">
                                        <h6>About</h6>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <Link to="/explore">Careers</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Partnerships</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Terms of Service</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Intellectual Property Claims</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Investor Relations</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </article>
                            </div>
                            <div className="support-div">
                                <article className="support-article">
                                    <div className="title">
                                        <h6>Support</h6>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <Link to="/explore">Help & Support</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Trust & Safety</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Selling on Finderr</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Buying on Finderr</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </article>
                            </div>
                            <div className="community-div">
                                <article className="community-article">
                                    <div className="title">
                                        <h6>Community</h6>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <Link to="/explore">Events</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Blog</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Forum</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Community Standards</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Podcast</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Affiliates</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Invite a Friend</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Become a Seller</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Finderr Elevate</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </article>
                            </div>
                            <div className="more-from-finderr-div">
                                <article className="more-from-finderr-article">
                                    <div className="title">
                                        <h6>More From Finderr</h6>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <Link to="/explore">Fiverr Business</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Fiverr Pro</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Fiverr Studios</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Fiverr Logo Maker</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Fiverr Guides</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Get Inspired</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">ClearVoice</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">AND CO</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Learn</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Working Not Working</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <div className="footer-bottom-line flex align-center between">
                            <div className="footer-left flex align-center">
                                <div className="footer-logo">finderr<span>®️</span></div>
                                <div className="ltd">
                                    ©️ finderr international Ltd. 2021
                                </div>
                            </div>
                            <div className="footer-right flex align-center">

                                <span><FaTwitter /></span>
                                <span><FaFacebook /></span>
                                <span><FaLinkedin /></span>
                                <span><FaPinterest /></span>
                                <span><FaInstagram /></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {count}
                {cart.length > 0 &&
                    <h5>
                        <span>{cart.length}</span> Products in your Cart
                        <button className="btn-link" onClick={(ev) => {
                            ev.preventDefault();
                            this.setState(prevState => ({ isCartShown: !prevState.isCartShown }))
                        }}>
                            ({(isCartShown) ? 'hide' : 'show'})
                        </button>
                    </h5>
                }
                {isCartShown && cart.length > 0 && <section className="cart" >
                    <h5>Your Cart</h5>
                    <ul>
                        {
                            cart.map((gig, idx) => <li key={idx}>
                                <button onClick={() => {
                                    this.removeFromCart(gig._id)
                                }}>x</button>
                                {gig.vendor}
                            </li>)
                        }
                    </ul>
                    <p>Total: ${this.cartTotal.toLocaleString()} </p>
                    <button onClick={this.checkout}>Checkout</button>
                </section>}
                <UserMsg /> */}
            </footer>
        )
    }
}


// function mapStateToProps(state) {
//     return {
//         count: state.userModule.count,
//         cart: state.gigModule.cart
//     }
// }

// const mapDispatchToProps = {
//     checkout,
//     addToCart,
//     removeFromCart
// }

export const AppFooter = /*connect(mapStateToProps, mapDispatchToProps)*/(_AppFooter)