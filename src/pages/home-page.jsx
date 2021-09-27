import React from 'react'
import { connect } from 'react-redux'


import { HomeHero } from '../cmps/home-hero'
// import logo from '../assets/img/logo.png'

class _HomePage extends React.Component {

    state = {}

    componentDidMount() {
        console.log('home: this.props.history', this.props.history);
    }

    render() {
        const { history } = this.props
        return (
            <section>
                <HomeHero history={history}/>
            </section >
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.userModule.count
    }
}

export const HomePage = connect(mapStateToProps)(_HomePage)