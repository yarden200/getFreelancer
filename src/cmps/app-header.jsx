import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'
import { ModalApp } from './app-modal.jsx'


class _AppHeader extends React.Component {
    state = {
        showModal: false,
        isHome: true
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        console.log(this.refs);
        console.log("header", this.props);
        this.unlisten = this.props.history.listen((location, action) => {
            const { pathname } = location
            console.log(pathname);
            pathname === '/' ? this.setState({ isHome: true }) : this.setState({ isHome: false })
        });
    }
    componentWillUnmount() {
        this.unlisten();
    }

    onScroll = (ev) => {
        // console.log((window.pageYOffset));
        let elHeader = document.querySelector('.app-header')
        let elHeaderNav = document.querySelector('.header-categories-container')
        // let { elHeader, elHeaderNav } = this.refs

        if (this.state.isHome) {
            if (window.pageYOffset === 0) {
                elHeader.classList.remove("app-header-scroll1")
                elHeaderNav.classList.add("hide")
            } else if (window.pageYOffset > 0) {
                elHeader.classList.add("app-header-scroll1")
                elHeaderNav.classList.add("hide")
            }
            if (window.pageYOffset >= 160) {
                elHeaderNav.classList.remove("hide")
            }
        }
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
        const { isHome } = this.state
        return (
            <header className={isHome ? "app-header" : "app-header app-header-scroll1"} ref='elHeader' onScroll={this.onScroll}>
                <div className="main-container">
                    <div className="top-header flex align-center">
                        <div className="logo"><NavLink to="/">finderr<span>.</span></NavLink></div>
                        <div className="nav-links flex" ref='elHeaderNav'>
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
                            <Link to="/explore">Graphics &amp; Design</Link>
                            <Link to="/explore">Digital Marketing</Link>
                            <Link to="/explore">Writing &amp; Translation</Link>
                            <Link to="/explore">Video &amp; Animation</Link>
                            <Link to="/explore">Music &amp; Audio</Link>
                            <Link to="/explore">Programming &amp; Tech</Link>
                            <Link to="/explore">Data</Link>
                            <Link to="/explore">Lifestyle</Link>

                        </div>
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

const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader)
export default withRouter(AppHeader);

