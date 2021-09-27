import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'
import { ModalApp } from './app-modal'





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

    render() {
        const { /*count,*/ user } = this.props
        return (
            <header className="app-header">
                <nav>
                    <div className="logo"><NavLink to="/">finderr<span>.</span></NavLink>
                        <div className="nav-links">
                            <NavLink to="/explore">Explore</NavLink>
                            <NavLink to="/start_selling">Seller</NavLink>
                            <a className="join">Join</a>
                        </div>
                    </div>
                    {/* {routes.map(route => <NavLink exact key={route.path} to={route.path}>{route.label}</NavLink>)} */}
                    <h1>Find the perfect freelance<br /> services for your business</h1>
                    {user && <span className="user-info">
                        <Link to={`user/${user._id}`}>
                            {user.fullname}
                            {/* <span className="score">{user.score.toLocaleString()}</span> */}
                        </Link>
                        <button onClick={this.onLogout}>Logout</button>
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
                </nav>
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