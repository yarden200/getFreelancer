import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'
import { ModalApp } from './app-modal.jsx'
import { socketService } from '../services/socket.service.js'
import { showGlobalMsg } from '../services/event-bus.service.js'
import {UserMsg} from '../cmps/user-msg.jsx'


class _AppHeader extends React.Component {

    state = {
        showModal: false,
        className: 'app-header',
        navClassName: 'header-categories-container'
    }

    componentDidMount() {
        socketService.on('gig-orderd',this.updateUsers)
        console.log('in didmount after on');
        window.addEventListener('scroll', this.onScroll);
        this.unlisten = this.props.history.listen((location, action) => {
            const { pathname } = location
            pathname === '/' ? this.setState({ className: 'app-header' }) :
                this.setState({ className: 'app-header app-header-scroll1' })
        });
    }
    
    componentWillUnmount() {
        this.unlisten();
    }

    updateUsers = (msg) => {
        console.log('in update users header',msg);
        showGlobalMsg(msg)
    }

    // componentWillMount() {
    //     ModalApp.setAppElement(document.querySelector(body))
    // }



    onScroll = (ev) => {
        let elHeaderNav = document.querySelector('.header-categories-container')
        const { pathname } = this.props.location

        if (pathname === '/') {
            if (window.pageYOffset === 0) {
                this.setState({ className: 'app-header' })

            } else if (window.pageYOffset > 0) {
                // elHeaderNav.classList.add("hide")
                this.setState({ className: 'app-header app-header-scroll1', navClassName: 'header-categories-container' })
                if (window.pageYOffset >= 160) {
                    // elHeaderNav.classList.remove("hide")
                    this.setState({ navClassName: 'header-categories-container open' })
                }
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
        const { className, navClassName } = this.state
        return (
            <header
                className={className}
                onScroll={this.onScroll}>
                <div className="main-container">
                    <div className="top-header flex align-center">
                        <div className="logo"><NavLink to="/">finderr<span></span></NavLink></div>
                        <div className="nav-links flex" ref='elHeaderNav'>
                            <NavLink to="/explore">Explore</NavLink>
                            {user && <NavLink to={`/start_selling?userId=${user._id}`}>Become a Seller</NavLink>}
                            {!user && <NavLink to={`/start_selling/`}>Become a Seller</NavLink>}
                            {user && <div className="nav-btn nav-btn-user">
                                <button className="btn-logout" onClick={this.onLogout}>Log Out</button>
                                <span>{user.fullname}</span>
                            </div>}
                            {!user && <div className="nav-btn nav-btn-guest">
                                <button className="btn-signin" onClick={this.openModal}>Sign In</button>
                                <button className="btn-join" onClick={this.openModal}>Join</button>
                                <ModalApp
                                    showModal={this.state.showModal}
                                    openModal={() => this.setState({ showModal: true })}
                                    closeModal={() => this.setState({ showModal: false })}
                                >
                                    <LoginSignup onLogin={this.onLogin} onSignup={this.onSignup} onLogout={this.onLogout} />
                                </ModalApp>
                            </div >}
                        </div>
                    </div >
                </div >
                <div className={navClassName}>
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
                <UserMsg />
            </header >
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.userModule.users,
        user: state.userModule.user,
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

