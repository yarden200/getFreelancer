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
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
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
    onScroll = (ev) => {
        // console.log('scrolling', ev);
        console.log((window.pageYOffset));
        let elHeader = document.querySelector('.app-header')
        let elNav = document.querySelector('.header-categories-container')
        // console.log(elHeader);
        console.log(elNav);

        if (window.pageYOffset === 0) {
            elHeader.classList.remove("app-header-scroll1")
            elNav.classList.add("hide")
        } else if (window.pageYOffset > 0) {
            elHeader.classList.add("app-header-scroll1")
            elNav.classList.add("hide")
        }
        if (window.pageYOffset >= 160) {
            elNav.classList.remove("hide")
            console.log(elNav);
        }
    }

    render() {
        const { user } = this.props
        return (
            // <section className="main-container">
            <header className="app-header" onScroll={this.onScroll}>

                <div className="main-container">
                    <div className="top-header flex">
                        <div className="logo"><NavLink to="/">Finderr<span>.</span></NavLink></div>
                        <div className="nav-links">
                            <NavLink to="/explore">Explore</NavLink>
                            <NavLink to="/start_selling">Become a Seller</NavLink>
                            <button className="btn-signin" onClick={this.openModal}>Sign In</button>
                            <button className="btn-join" onClick={this.openModal}>Join</button>
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
                </div>
                <div className="header-categories-container hide">
                    <div className="main-container">
                        <div className="header-categories flex align-center">
                            <Link to="#">Graphics &#38; Design</Link>
                            <Link to="#">Digital Marketing</Link>
                            <Link to="#">Writing & Translation</Link>
                            <Link to="#">Video & Animation</Link>
                            <Link to="#">Music & Audio</Link>
                            <Link to="#">Programming & Tech</Link>
                            <Link to="#">Data</Link>
                            <Link to="#">Lifestyle</Link>
                        </div>
                    </div>

                </div>
            </header>

            // </section>

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