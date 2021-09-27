import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { loadGigs, onSetFilter } from '../store/gig.actions.js'
import { GigList } from '../cmps/gig-list.jsx'
import a9 from '../assets/img/a9.PNG';
import a8 from '../assets/img/a8.PNG';
import a7 from '../assets/img/a7.PNG';
import a4 from '../assets/img/a4.PNG';
import a5 from '../assets/img/a5.PNG';


import { HomeHero } from '../cmps/home-hero'
// import logo from '../assets/img/logo.png'

class _HomePage extends React.Component {

    state = {
        // gigs: []
    }

    componentDidMount() {
        const gigs = this.props.loadGigs()
        // console.log('home: this.props.history', this.props.history);
        this.setState({ gigs })
    }

    render() {
        const { gigs } = this.props
        const { history } = this.props
        return (
            <section>
                {/* history={history} */}
                <HomeHero />
                <div className="cards-container card-grid">
                    <section className="a">
                        {/* <img src={a9} alt="a1" /> */}
                        <GigList
                            gigs={gigs}
                        />
                    </section>
                </div>
            </section >
        )
    }
}

function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}
const mapDispatchToProps = {
    loadGigs,
    onSetFilter
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)