import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'
import { ModalApp } from './app-modal.jsx'






class _AppHeader extends React.Component {

    state = {
        showModal: false
    }

    onLogin = (credentials) => {
        this.props.onLogin(credentials)
    }
    onSignup = (credentials) => {
        this.props.onSignup(credentials)
    }
    onLogout = () => {
        this.props.onLogout()
    }
    openModal = () => {
        this.setState({ showModal: true })
    }


    render() {
        const { user } = this.props
        return (
            <header className="app-header ">
                <div className="main-container">
                    <div className="top-header">
                        <div className="logo"><NavLink to="/">finderr<span>.</span></NavLink></div>

                        <div className="nav-links">
                            <NavLink to="/explore">Explore</NavLink>
                            <NavLink to="/start_selling">Seller</NavLink>
                            <button className="join" onClick={this.openModal}>Join</button>
                            {/* <button onClick={this.onLogout}>Logout</button> */}
                            {user && <span className="user-info">
                                <div className="user-info">
                                    <Link to={`user/${user._id}`}>
                                        {user.fullname}
                                    </Link>
                                </div>
                                <option value={<button onClick={this.onLogout}>Logout</button>}></option>
                            </span>}
                            {!user && <section className="user-info">
                                <ModalApp
                                    showModal={this.state.showModal}
                                    openModal={() => this.setState({ showModal: true })}
                                    closeModal={() => this.setState({ showModal: false })}
                                >
                                    <LoginSignup onLogin={this.onLogin} onSignup={this.onSignup} />
                                </ModalApp>
                            </section>}
                        </div>
                    </div>
                    <div className="header-categoties">
                        {/* <Carousel>
                        <span>Graphics & Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing & Translation</span>
                        <span>Video & Animation</span>
                        <span>Music & Audio</span>
                        <span>Programming & Tech</span>
                        <span>Data</span>
                        <span>Lifestyle</span>
                        </Carousel> */}
                        {/* <Carousel > */}
                        <Link>Graphics & Design</Link>
                        <Link>Digital Marketing</Link>
                        <Link>Writing & Translation</Link>
                        <Link>Video & Animation</Link>
                        <Link>Music & Audio</Link>
                        <Link>Programming & Tech</Link>
                        <Link>Data</Link>
                        <Link>Lifestyle</Link>
                        {/* </Carousel> */}
                        {/* <Carousel>
                        <ul>
                        <li><Link>Graphics & Design</Link></li>
                        <li><Link>Digital Marketing</Link></li>
                        <li><Link>Writing & Translation</Link></li>
                        <li><Link>Video & Animation</Link></li>
                        <li><Link>Music & Audio</Link></li>
                        <li><Link>Programming & Tech</Link></li>
                        <li><Link>Data</Link></li>
                        <li><Link>Lifestyle</Link></li>
                        </ul>
                        </Carousel> */}
                    </div>
                </div>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.userModule.users,
        user: state.userModule.user,
        // count: state.userModule.count,
        isLoading: state.systemModule.isLoading
    }
}
const mapDispatchToProps = {
    onLogin,
    onSignup,
    onLogout,
    loadUsers,
    removeUser
}



export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader)